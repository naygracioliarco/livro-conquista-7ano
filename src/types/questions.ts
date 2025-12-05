export type QuestionType = 'multiple-choice' | 'true-false' | 'alternative' | 'text-input' | 'table-fill' | 'alternative-with-excerpts';

export interface MultipleChoiceQuestion {
  id: string;
  type: 'multiple-choice';
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
  };
  correctAnswer: 'a' | 'b' | 'c';
}

export interface TrueFalseQuestion {
  id: string;
  type: 'true-false';
  question: string;
  correctAnswer?: boolean; // Para compatibilidade com formato antigo (opcional quando há statements)
  number?: number; // Número da questão (ex: 2, 3, 4...)
  statements?: Array<{
    letter?: string; // Letra da afirmação (opcional, ex: 'a', 'b', 'c')
    statement: string; // Texto da afirmação
    correctAnswer: boolean; // Se a afirmação é verdadeira ou falsa
    correction?: string; // Correção/justificativa esperada (opcional)
    proof?: string; // Trecho do texto que comprova (para afirmações verdadeiras)
  }>;
  hasCorrectionBox?: boolean; // Se deve mostrar campo de texto para correções (formato antigo)
  correctionPlaceholder?: string; // Placeholder para o campo de correção (formato antigo)
  hasIndividualTextFields?: boolean; // Se cada afirmação deve ter seu próprio campo de texto
  instructions?: string[]; // Lista de instruções a serem exibidas após o enunciado
}

export interface AlternativeQuestion {
  id: string;
  type: 'alternative';
  question: string;
  options: string[];
  correctAnswer: number;
  number?: number; // Número da questão (ex: 3, 4, 5...)
}

export interface TextInputQuestion {
  id: string;
  type: 'text-input';
  question: string;
  placeholder?: string;
  correctAnswer?: string; // Opcional, para validação na visão do professor
  number?: number; // Número da questão (ex: 1, 2, 3...)
  subQuestions?: Array<{
    letter: string; // Letra da subquestão (ex: 'a', 'b', 'c')
    question: string; // Texto da subquestão
    placeholder?: string;
    correctAnswer?: string;
    subItems?: Array<{
      label: string; // Rótulo da subquestão aninhada (ex: 'Situação inicial', 'Conflito', 'Desfecho')
      placeholder?: string;
      correctAnswer?: string;
    }>;
    requiresTextSelection?: boolean; // Se a subquestão requer seleção de texto
    selectableText?: string; // Texto que pode ser selecionado/sublinhado
    correctSelections?: string[]; // Trechos que devem ser selecionados (resposta correta)
  }>;
  embeddedContent?: string; // Conteúdo a ser exibido em uma caixa (ex: versos do poema)
  followUpQuestion?: string; // Pergunta adicional com bullet vermelho
}

export interface TableFillQuestion {
  id: string;
  type: 'table-fill';
  question?: string;
  number?: number;
  columns: string[];
  rows: Array<{
    id: string;
    [key: string]: string | undefined; // Permite campos dinâmicos: o primeiro campo corresponde à primeira coluna, os demais às outras colunas
  }>;
  correctAnswer?: {
    [fieldId: string]: string; // Mapeia fieldId (questionId_rowId_colN) para a resposta correta
  };
  subQuestions?: Array<{
    letter: string; // Letra da subquestão (ex: 'a', 'b', 'c')
    question: string; // Texto da subquestão
    placeholder?: string;
    correctAnswer?: string;
  }>;
}

export interface AlternativeWithExcerptsQuestion {
  id: string;
  type: 'alternative-with-excerpts';
  question: string; // Instrução principal (ex: "Leia os trechos a seguir. Em seguida, resolva os itens.")
  textExcerpts?: string[]; // Array de trechos de texto a serem exibidos (opcional)
  number?: number;
  subQuestions: Array<{
    letter: string; // Letra da subquestão (ex: 'a', 'b', 'c')
    question: string; // Texto da subquestão
    options: string[]; // Opções de múltipla escolha
    correctAnswer: number | number[]; // Índice(s) da(s) resposta(s) correta(s) - pode ser único ou múltiplo
    allowMultiple?: boolean; // Se permite múltiplas seleções (usa checkboxes)
  }>;
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion | AlternativeQuestion | TextInputQuestion | TableFillQuestion | AlternativeWithExcerptsQuestion;

export interface UserAnswers {
  [questionId: string]: string | number | boolean | number[];
}

export interface QuestionResult {
  questionId: string;
  userAnswer: string | number | boolean | undefined;
  correctAnswer: string | number | boolean;
  isCorrect: boolean;
}
