import { useRef, useState, useEffect, useCallback } from 'react';
import SublinharButton from './SublinharButton';

interface SelectableTextProps {
  text: string;
  selectedRanges: Array<{ start: number; end: number }>;
  onSelectionChange: (ranges: Array<{ start: number; end: number }>) => void;
  disabled?: boolean;
  correctSelections?: string[]; // Para mostrar na visão do professor
  showResults?: boolean;
}

function SelectableText({
  text,
  selectedRanges,
  onSelectionChange,
  disabled = false,
  correctSelections,
  showResults = false,
}: SelectableTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isHighlightingActive, setIsHighlightingActive] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const selectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Função auxiliar para obter posição do clique/toque
  const getClickPosition = (x: number, y: number): number | null => {
    if (!textRef.current) return null;

    // Tentar usar caretRangeFromPoint (suportado na maioria dos navegadores)
    const range = document.caretRangeFromPoint?.(x, y);
    if (!range || !textRef.current.contains(range.commonAncestorContainer)) {
      return null;
    }

    // Calcular posição do clique no texto plano
    const preRange = document.createRange();
    preRange.selectNodeContents(textRef.current);
    preRange.setEnd(range.startContainer, range.startOffset);
    const clickText = preRange.toString();
    return clickText.replace(/<[^>]*>/g, '').length;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || showResults || !textRef.current || !isHighlightingActive) return;

    const clickPosition = getClickPosition(e.clientX, e.clientY);
    if (clickPosition === null) return;

    // Verificar se o clique foi em uma área já selecionada
    const clickedRange = selectedRanges.find(
      (r) => clickPosition >= r.start && clickPosition < r.end
    );

    if (clickedRange) {
      // Remover a seleção clicada
      const updatedRanges = selectedRanges.filter((r) => r !== clickedRange);
      onSelectionChange(updatedRanges);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Handler para touch (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (disabled || showResults || !isHighlightingActive) return;
    
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (disabled || showResults || !isHighlightingActive || !touchStartRef.current) return;

    const touch = e.changedTouches[0];
    const touchEnd = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };

    // Se foi um toque rápido (tap), tratar como clique para desselecionar
    const timeDiff = touchEnd.time - touchStartRef.current.time;
    const distance = Math.sqrt(
      Math.pow(touchEnd.x - touchStartRef.current.x, 2) +
      Math.pow(touchEnd.y - touchStartRef.current.y, 2)
    );

    // Se foi um tap (toque rápido e curto), verificar se clicou em uma seleção
    if (timeDiff < 300 && distance < 10) {
      const clickPosition = getClickPosition(touchEnd.x, touchEnd.y);
      if (clickPosition !== null) {
        const clickedRange = selectedRanges.find(
          (r) => clickPosition >= r.start && clickPosition < r.end
        );

        if (clickedRange) {
          const updatedRanges = selectedRanges.filter((r) => r !== clickedRange);
          onSelectionChange(updatedRanges);
          e.preventDefault();
          e.stopPropagation();
          touchStartRef.current = null;
          return;
        }
      }
    }

    // Se foi uma seleção (arrastar), processar a seleção após um pequeno delay
    // para garantir que o navegador tenha processado a seleção
    setTimeout(() => {
      handleSelection();
    }, 200);
    
    touchStartRef.current = null;
  };

  // Handler adicional para capturar seleção em mobile após o usuário terminar de selecionar
  const handleTouchMove = (e: React.TouchEvent) => {
    // Não fazer nada durante o movimento, apenas permitir a seleção nativa
    if (disabled || showResults || !isHighlightingActive) return;
  };

  // Função compartilhada para processar seleção (usada tanto em mouse quanto touch)
  const handleSelection = useCallback(() => {
    if (disabled || showResults || !isHighlightingActive || !textRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return;
    }

    const range = selection.getRangeAt(0);
    
    // Verificar se a seleção está dentro do nosso texto
    if (!textRef.current.contains(range.commonAncestorContainer)) {
      selection.removeAllRanges();
      return;
    }

    // Calcular posições relativas ao texto renderizado
    const preRange = document.createRange();
    preRange.selectNodeContents(textRef.current);
    preRange.setEnd(range.startContainer, range.startOffset);
    const startText = preRange.toString();

    preRange.setEnd(range.endContainer, range.endOffset);
    const endText = preRange.toString();

    // Converter para posições no texto plano (removendo tags HTML)
    const plainText = text.replace(/\*\*/g, '');
    const start = startText.replace(/<[^>]*>/g, '').length;
    const end = endText.replace(/<[^>]*>/g, '').length;

    // Não permitir seleção vazia
    if (start === end || start < 0 || end > plainText.length) {
      selection.removeAllRanges();
      return;
    }

    // Verificar se já existe uma seleção que se sobrepõe
    const newRange = { start, end };
    const overlapping = selectedRanges.some(
      (r) => !(newRange.end <= r.start || newRange.start >= r.end)
    );

    if (!overlapping) {
      // Adicionar nova seleção
      const updatedRanges = [...selectedRanges, newRange].sort((a, b) => a.start - b.start);
      onSelectionChange(updatedRanges);
    } else {
      // Remover seleção sobreposta
      const updatedRanges = selectedRanges.filter(
        (r) => !(newRange.end <= r.start || newRange.start >= r.end)
      );
      onSelectionChange(updatedRanges);
    }

    selection.removeAllRanges();
  }, [disabled, showResults, isHighlightingActive, text, selectedRanges, onSelectionChange]);

  // Listener para capturar mudanças na seleção (especialmente útil em mobile)
  useEffect(() => {
    if (disabled || showResults || !isHighlightingActive) return;

    const handleSelectionChange = () => {
      // Limpar timeout anterior
      if (selectionTimeoutRef.current) {
        clearTimeout(selectionTimeoutRef.current);
      }

      // Aguardar um pouco para garantir que a seleção foi finalizada
      selectionTimeoutRef.current = setTimeout(() => {
        handleSelection();
      }, 150);
    };

    // Adicionar listener para mudanças na seleção
    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      if (selectionTimeoutRef.current) {
        clearTimeout(selectionTimeoutRef.current);
      }
    };
  }, [disabled, showResults, isHighlightingActive, handleSelection]);

  const handleMouseUp = () => {
    handleSelection();
  };

  const renderText = () => {
    // Converter **texto** para <strong>texto</strong>
    const processText = (text: string) => {
      return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    };

    // Texto sem formatação para cálculos
    const plainText = text.replace(/\*\*/g, '');
    
    if (selectedRanges.length === 0) {
      return <span dangerouslySetInnerHTML={{ __html: processText(text) }} />;
    }

    // Ordenar ranges por posição
    const sortedRanges = [...selectedRanges].sort((a, b) => a.start - b.start);
    
    // Construir HTML com seleções destacadas
    let html = '';
    let lastIndex = 0;

    sortedRanges.forEach((range) => {
      // Texto antes da seleção (com formatação)
      if (range.start > lastIndex) {
        const beforeOriginal = text.substring(
          getOriginalIndex(text, lastIndex),
          getOriginalIndex(text, range.start)
        );
        html += processText(beforeOriginal);
      }

      // Texto selecionado (sublinhado)
      const selectedPlain = plainText.substring(range.start, range.end);
      html += `<span style="background-color: #FFEB3B; text-decoration: underline; cursor: ${disabled ? 'pointer' : 'default'}">${selectedPlain}</span>`;

      lastIndex = range.end;
    });

    // Texto restante
    if (lastIndex < plainText.length) {
      const remainingOriginal = text.substring(getOriginalIndex(text, lastIndex));
      html += processText(remainingOriginal);
    }

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  // Converter índice do texto plano para índice do texto original (considerando **)
  const getOriginalIndex = (originalText: string, plainIndex: number): number => {
    let originalIndex = 0;
    let plainCount = 0;
    let inBold = false;

    for (let i = 0; i < originalText.length && plainCount < plainIndex; i++) {
      if (originalText.substring(i).startsWith('**')) {
        inBold = !inBold;
        i++; // Pular um dos *
        continue;
      }
      originalIndex = i + 1;
      plainCount++;
    }

    return originalIndex;
  };

  // Renderizar com correções na visão do professor
  if (showResults && correctSelections && correctSelections.length > 0) {
    return (
      <div>
        <div className="mb-4 p-4" style={{ border: '1px solid #87CEEB', borderRadius: '4px' }}>
          <div className="mb-2">
            {renderText()}
          </div>
          <div className="mt-3 p-2 bg-gray-100 rounded text-sm">
            <strong>Trechos esperados:</strong>
            <ul className="mt-1 ml-4 list-disc">
              {correctSelections.map((selection, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: `"${selection}"` }} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={textRef}
      className="mb-4 p-4 select-text"
      style={{
        border: '1px solid #87CEEB',
        borderRadius: '4px',
        userSelect: disabled || !isHighlightingActive ? 'none' : 'text',
        WebkitUserSelect: disabled || !isHighlightingActive ? 'none' : 'text',
        cursor: disabled || !isHighlightingActive ? 'default' : 'text',
        fontFamily: 'inherit',
        lineHeight: '1.6',
        // Permitir seleção de texto em mobile quando ativo
        touchAction: disabled || !isHighlightingActive ? 'none' : 'pan-y',
        WebkitTouchCallout: disabled || !isHighlightingActive ? 'none' : 'default',
      }}
      onClick={handleClick}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Botão Sublinhar dentro do bloco */}
      {!showResults && (
        <div className="mb-3">
          <SublinharButton
            onClick={() => setIsHighlightingActive(!isHighlightingActive)}
            disabled={disabled}
          />
        </div>
      )}
      
      {renderText()}
    </div>
  );
}

export default SelectableText;

