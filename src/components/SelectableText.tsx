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
  // Ref isolado apenas para o texto
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHighlightingActive, setIsHighlightingActive] = useState(false);
  const selectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Ref para controlar se estamos num fluxo de toque (para evitar conflito com click)
  const isTouchingRef = useRef(false);

  // --- LÓGICA DE SELEÇÃO (CRIAÇÃO DO DESTAQUE) ---
  const handleSelection = useCallback(() => {
    if (disabled || showResults || !isHighlightingActive || !contentRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;

    const range = selection.getRangeAt(0);

    // Verifica se a seleção está contida na div de texto
    if (!contentRef.current.contains(range.commonAncestorContainer)) {
      return;
    }

    // Cria range temporário para calcular offset baseado APENAS no texto visível
    const preRange = document.createRange();
    preRange.selectNodeContents(contentRef.current);
    preRange.setEnd(range.startContainer, range.startOffset);
    const startText = preRange.toString();

    preRange.setEnd(range.endContainer, range.endOffset);
    const endText = preRange.toString();

    // Removemos quebras de linha estranhas que o navegador possa injetar
    const cleanStart = startText.replace(/\r\n/g, '\n').length;
    const cleanEnd = endText.replace(/\r\n/g, '\n').length;
    
    const plainTextLength = text.replace(/\*\*/g, '').length;

    // Validações de segurança
    if (cleanStart === cleanEnd || cleanStart < 0 || cleanEnd > plainTextLength) {
      // Limpa seleção para fechar menu nativo do mobile
      selection.removeAllRanges(); 
      return;
    }

    const newRange = { start: cleanStart, end: cleanEnd };

    // Lógica de sobreposição (se já existe, remove; se não, adiciona)
    const overlapping = selectedRanges.some(
      (r) => !(newRange.end <= r.start || newRange.start >= r.end)
    );

    if (!overlapping) {
      const updatedRanges = [...selectedRanges, newRange].sort((a, b) => a.start - b.start);
      onSelectionChange(updatedRanges);
    } else {
      // Opcional: Se selecionar por cima de um já existente, mescla ou remove? 
      // Aqui optei por remover os que colidem (toggle behavior)
      const updatedRanges = selectedRanges.filter(
        (r) => !(newRange.end <= r.start || newRange.start >= r.end)
      );
      onSelectionChange(updatedRanges);
    }

    // CRUCIAL PARA MOBILE: Remove a seleção nativa imediatamente
    // Isso impede que o menu "Copiar/Colar" fique aberto em cima do texto
    selection.removeAllRanges();
    
    // Se estiver em mobile, forçamos o blur para garantir que o teclado/menus sumam
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

  }, [disabled, showResults, isHighlightingActive, text, selectedRanges, onSelectionChange]);

  // --- LISTENER DE MUDANÇA DE SELEÇÃO ---
  useEffect(() => {
    if (disabled || showResults || !isHighlightingActive) return;

    const handleSelectionChange = () => {
      // Se não tiver seleção ou não for na nossa div, ignora
      const selection = window.getSelection();
      if (!selection || !contentRef.current) return;
      if (selection.rangeCount > 0 && !contentRef.current.contains(selection.anchorNode)) return;

      // Debounce: Espera o usuário parar de mexer o dedo/mouse
      if (selectionTimeoutRef.current) clearTimeout(selectionTimeoutRef.current);
      
      // 300ms é um bom tempo para mobile (dá tempo de ajustar a "alça" da seleção)
      selectionTimeoutRef.current = setTimeout(() => {
        handleSelection();
      }, 350);
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    
    // Touch End ajuda a forçar o processamento imediato ao soltar o dedo
    const handleTouchEnd = () => {
       if (selectionTimeoutRef.current) clearTimeout(selectionTimeoutRef.current);
       setTimeout(handleSelection, 50); // Pequeno delay para garantir que o range existe
       isTouchingRef.current = false;
    };
    
    const handleTouchStart = () => {
        isTouchingRef.current = true;
    }

    // Adiciona listener especifico no contentRef para touch
    const el = contentRef.current;
    if (el) {
        el.addEventListener('touchend', handleTouchEnd);
        el.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
      if (el) {
          el.removeEventListener('touchend', handleTouchEnd);
          el.removeEventListener('touchstart', handleTouchStart);
      }
      if (selectionTimeoutRef.current) clearTimeout(selectionTimeoutRef.current);
    };
  }, [disabled, showResults, isHighlightingActive, handleSelection]);


  // --- LÓGICA DE CLIQUE (APENAS PARA REMOVER SELEÇÃO JÁ FEITA) ---
  const getClickIndex = (x: number, y: number): number | null => {
      if (!contentRef.current) return null;
      // document.caretRangeFromPoint é bom para cliques pontuais
      // @ts-ignore - Algumas versões do TS não tem essa definição nativa ainda
      const range = document.caretRangeFromPoint ? document.caretRangeFromPoint(x, y) : null;
      
      // Fallback para navegadores que usam caretPositionFromPoint (Firefox)
      if (!range) return null; 

      if (!contentRef.current.contains(range.commonAncestorContainer)) return null;

      const preRange = document.createRange();
      preRange.selectNodeContents(contentRef.current);
      preRange.setEnd(range.startContainer, range.startOffset);
      return preRange.toString().length;
  };

  const handleInteraction = (clientX: number, clientY: number) => {
    if (disabled || showResults || !isHighlightingActive) return;

    const clickIndex = getClickIndex(clientX, clientY);
    if (clickIndex === null) return;

    // Verifica se clicou DENTRO de um range existente para removê-lo
    const clickedRange = selectedRanges.find(
      (r) => clickIndex >= r.start && clickIndex < r.end
    );

    if (clickedRange) {
      const updatedRanges = selectedRanges.filter((r) => r !== clickedRange);
      onSelectionChange(updatedRanges);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
      // Evita duplo processamento se for touch
      if (isTouchingRef.current) return;
      handleInteraction(e.clientX, e.clientY);
  };

  // --- RENDERIZAÇÃO ---
  const renderText = () => {
    // Processa negrito visual
    const processText = (txt: string) => txt.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    const plainText = text.replace(/\*\*/g, '');
    
    if (selectedRanges.length === 0) {
      return <span dangerouslySetInnerHTML={{ __html: processText(text) }} />;
    }

    const sortedRanges = [...selectedRanges].sort((a, b) => a.start - b.start);
    let html = '';
    let lastIndex = 0;

    sortedRanges.forEach((range) => {
      // Texto antes
      if (range.start > lastIndex) {
        const beforeOriginal = text.substring(
           getOriginalIndex(text, lastIndex), 
           getOriginalIndex(text, range.start)
        );
        html += processText(beforeOriginal);
      }

      // Texto selecionado
      const selectedContent = plainText.substring(range.start, range.end);
      // Fundo amarelo e user-select: none no highlight evita bugar a seleção ao tentar remover
      html += `<mark style="background-color: #FFEB3B; color: black; text-decoration: none; padding: 2px 0; border-radius: 2px; cursor: pointer;">${selectedContent}</mark>`;

      lastIndex = range.end;
    });

    // Texto depois
    if (lastIndex < plainText.length) {
      const remainingOriginal = text.substring(getOriginalIndex(text, lastIndex));
      html += processText(remainingOriginal);
    }

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  // Helper para mapear index plain -> original (com **)
  const getOriginalIndex = (originalText: string, plainIndex: number): number => {
    let originalIndex = 0;
    let plainCount = 0;
    for (let i = 0; i < originalText.length && plainCount < plainIndex; i++) {
      if (originalText.substring(i).startsWith('**')) {
        i++; // Pula asterisco
        continue;
      }
      originalIndex = i + 1;
      plainCount++;
    }
    return originalIndex;
  };

  return (
    <div className="mb-4 p-4" style={{ border: '1px solid #87CEEB', borderRadius: '8px' }}>
      
      {!showResults && (
        <div className="mb-3">
          <SublinharButton
            onClick={() => setIsHighlightingActive(!isHighlightingActive)}
            disabled={disabled}
            // isActive={isHighlightingActive} 
          />
          <span className="ml-2 text-xs text-gray-500">
             {isHighlightingActive ? "(Ativado: Selecione o texto)" : "(Toque para ativar)"}
          </span>
        </div>
      )}

      <div
        ref={contentRef}
        onClick={handleClick}
        className="text-lg leading-relaxed"
        style={{
          whiteSpace: 'pre-wrap', // Mantém formatação fiel para cálculos de posição
          userSelect: disabled || !isHighlightingActive ? 'none' : 'text',
          WebkitUserSelect: disabled || !isHighlightingActive ? 'none' : 'text',
          cursor: disabled || !isHighlightingActive ? 'default' : 'text',
          // Touch callout none evita o menu de contexto nativo do iOS em alguns casos
          WebkitTouchCallout: 'none', 
        }}
      >
        {renderText()}
      </div>
    </div>
  );
}

export default SelectableText;