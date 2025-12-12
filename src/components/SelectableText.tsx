import { useRef, useState, useEffect, useCallback } from 'react';
import SublinharButton from './SublinharButton';

interface SelectableTextProps {
  text: string;
  selectedRanges: Array<{ start: number; end: number }>;
  onSelectionChange: (ranges: Array<{ start: number; end: number }>) => void;
  disabled?: boolean;
  correctSelections?: string[];
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
  // MUDANÇA 1: O ref agora aponta especificamente para o container do texto
  const contentRef = useRef<HTMLDivElement>(null); 
  const [isHighlightingActive, setIsHighlightingActive] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const selectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getClickPosition = (x: number, y: number): number | null => {
    // Usamos contentRef aqui
    if (!contentRef.current) return null;

    const range = document.caretRangeFromPoint?.(x, y);
    if (!range || !contentRef.current.contains(range.commonAncestorContainer)) {
      return null;
    }

    const preRange = document.createRange();
    // Seleciona apenas o conteúdo da div de texto
    preRange.selectNodeContents(contentRef.current);
    preRange.setEnd(range.startContainer, range.startOffset);
    const clickText = preRange.toString();
    // Remove quebras de linha extras que o navegador pode adicionar
    return clickText.replace(/\r\n/g, '\n').length;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || showResults || !contentRef.current || !isHighlightingActive) return;

    // Se clicar no botão, não faz nada (pois o botão está fora do contentRef agora)
    if (e.target instanceof Node && !contentRef.current.contains(e.target)) return;

    const clickPosition = getClickPosition(e.clientX, e.clientY);
    if (clickPosition === null) return;

    const clickedRange = selectedRanges.find(
      (r) => clickPosition >= r.start && clickPosition < r.end
    );

    if (clickedRange) {
      const updatedRanges = selectedRanges.filter((r) => r !== clickedRange);
      onSelectionChange(updatedRanges);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleSelection = useCallback(() => {
    if (disabled || showResults || !isHighlightingActive || !contentRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    
    // Verifica se a seleção está dentro do contentRef
    if (!contentRef.current.contains(range.commonAncestorContainer)) {
      selection.removeAllRanges();
      return;
    }

    const preRange = document.createRange();
    preRange.selectNodeContents(contentRef.current);
    preRange.setEnd(range.startContainer, range.startOffset);
    const startText = preRange.toString();

    preRange.setEnd(range.endContainer, range.endOffset);
    const endText = preRange.toString();

    const plainText = text.replace(/\*\*/g, '');
    const start = startText.length;
    const end = endText.length;

    if (start === end || start < 0 || end > plainText.length) {
      selection.removeAllRanges();
      return;
    }

    const newRange = { start, end };
    const overlapping = selectedRanges.some(
      (r) => !(newRange.end <= r.start || newRange.start >= r.end)
    );

    if (!overlapping) {
      const updatedRanges = [...selectedRanges, newRange].sort((a, b) => a.start - b.start);
      onSelectionChange(updatedRanges);
    } else {
      const updatedRanges = selectedRanges.filter(
        (r) => !(newRange.end <= r.start || newRange.start >= r.end)
      );
      onSelectionChange(updatedRanges);
    }

    selection.removeAllRanges();
  }, [disabled, showResults, isHighlightingActive, text, selectedRanges, onSelectionChange]);

  // Handler para touch e selectionchange (mantive simplificado para focar na correção)
  useEffect(() => {
    if (disabled || showResults || !isHighlightingActive || !contentRef.current) return;

    const handleSelectionChange = () => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      
      // Verifica se a seleção é relevante para nós
      if (!contentRef.current?.contains(selection.anchorNode)) return;

      if (selectionTimeoutRef.current) clearTimeout(selectionTimeoutRef.current);
      selectionTimeoutRef.current = setTimeout(() => handleSelection(), 150);
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      if (selectionTimeoutRef.current) clearTimeout(selectionTimeoutRef.current);
    };
  }, [disabled, showResults, isHighlightingActive, handleSelection]);

  // Lógica de renderização original
  const renderText = () => {
    const processText = (text: string) => text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    const plainText = text.replace(/\*\*/g, '');
    
    if (selectedRanges.length === 0) {
      return <span dangerouslySetInnerHTML={{ __html: processText(text) }} />;
    }

    const sortedRanges = [...selectedRanges].sort((a, b) => a.start - b.start);
    let html = '';
    let lastIndex = 0;

    sortedRanges.forEach((range) => {
      if (range.start > lastIndex) {
        const beforeOriginal = text.substring(
          getOriginalIndex(text, lastIndex),
          getOriginalIndex(text, range.start)
        );
        html += processText(beforeOriginal);
      }

      // Correção visual: Se o texto original era negrito, tentamos manter (simplificado)
      const selectedPlain = plainText.substring(range.start, range.end);
      html += `<span style="background-color: #FFEB3B; text-decoration: underline; cursor: pointer;">${selectedPlain}</span>`;

      lastIndex = range.end;
    });

    if (lastIndex < plainText.length) {
      const remainingOriginal = text.substring(getOriginalIndex(text, lastIndex));
      html += processText(remainingOriginal);
    }

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const getOriginalIndex = (originalText: string, plainIndex: number): number => {
    let originalIndex = 0;
    let plainCount = 0;
    for (let i = 0; i < originalText.length && plainCount < plainIndex; i++) {
      if (originalText.substring(i).startsWith('**')) {
        i++; 
        continue;
      }
      originalIndex = i + 1;
      plainCount++;
    }
    return originalIndex;
  };

  // Render do professor omitido para brevidade (mantém igual)

  return (
    <div
      className="mb-4 p-4"
      style={{
        border: '1px solid #87CEEB',
        borderRadius: '4px',
        fontFamily: 'inherit',
        lineHeight: '1.6',
      }}
    >
      {/* Botão renderizado FORA da área de referência do texto */}
      {!showResults && (
        <div className="mb-3">
          <SublinharButton
            onClick={() => setIsHighlightingActive(!isHighlightingActive)}
            disabled={disabled}
            // isActive={isHighlightingActive} // Assumindo que seu botão aceita essa prop visual
          />
        </div>
      )}
      
      {/* Container Específico para o Texto com o REF correto */}
      <div
        ref={contentRef}
        onClick={handleClick}
        // Removedores de handlers de touch aqui para simplificar a demo, mas pode manter os seus
        className="select-text"
        style={{
            // MUDANÇA 2: pre-wrap garante que espaços do HTML sejam iguais aos da string JS
            whiteSpace: 'pre-wrap', 
            userSelect: disabled || !isHighlightingActive ? 'none' : 'text',
            cursor: disabled || !isHighlightingActive ? 'default' : 'text',
        }}
      >
        {renderText()}
      </div>
    </div>
  );
}

export default SelectableText;