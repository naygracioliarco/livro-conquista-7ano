import { useRef } from 'react';

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

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || showResults || !textRef.current) return;

    // Obter a posição do clique no texto
    const clickPoint = e.clientX;
    const clickY = e.clientY;
    
    // Criar um range temporário para encontrar a posição do clique
    const range = document.caretRangeFromPoint?.(clickPoint, clickY);
    if (!range || !textRef.current.contains(range.commonAncestorContainer)) {
      return;
    }

    // Calcular posição do clique no texto plano
    const preRange = document.createRange();
    preRange.selectNodeContents(textRef.current);
    preRange.setEnd(range.startContainer, range.startOffset);
    const clickText = preRange.toString();
    const clickPosition = clickText.replace(/<[^>]*>/g, '').length;

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

  const handleMouseUp = () => {
    if (disabled || showResults) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || !textRef.current) {
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
    );
  }

  return (
    <div
      ref={textRef}
      className="mb-4 p-4 select-text"
      style={{
        border: '1px solid #87CEEB',
        borderRadius: '4px',
        userSelect: disabled ? 'none' : 'text',
        cursor: disabled ? 'default' : 'pointer',
        fontFamily: 'inherit',
        lineHeight: '1.6',
      }}
      onClick={handleClick}
      onMouseUp={handleMouseUp}
    >
      {renderText()}
    </div>
  );
}

export default SelectableText;

