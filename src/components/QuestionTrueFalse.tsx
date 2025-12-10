import { TrueFalseQuestion, UserAnswers } from '../types/questions';

// Função auxiliar para verificar se é letra do alfabeto (a-z) ou número romano (I, II, III, etc.)
const isAlphabetLetter = (letter: string): boolean => {
  // Verifica se é uma única letra minúscula do alfabeto (a-z)
  return /^[a-z]$/.test(letter);
};

interface QuestionTrueFalseProps {
  question: TrueFalseQuestion;
  userAnswers: UserAnswers;
  onAnswerChange: (questionId: string, answer: boolean | string) => void;
  showResults?: boolean;
}

function QuestionTrueFalse({
  question,
  userAnswers,
  onAnswerChange,
  showResults = false,
}: QuestionTrueFalseProps) {
  // Se tiver múltiplas afirmações, renderiza o formato novo
  if (question.statements && question.statements.length > 0) {
    const correctionId = `${question.id}_correction`;
    const correctionAnswer = (userAnswers[correctionId] as string) || '';

    return (
      <div className="mb-6">
        {/* Título principal com número */}
        <p className="mb-4">
          {question.number !== undefined && (
            <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
          )}
          <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: question.question }} />
        </p>

        {/* Lista de instruções (se houver) */}
        {question.instructions && question.instructions.length > 0 && (
          <ul className="mb-4 question-subitems" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            {question.instructions.map((instruction, idx) => (
              <li key={idx} style={{ color: '#00776E' }}>
                <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: instruction }} />
              </li>
            ))}
          </ul>
        )}

        {/* Afirmações */}
        <div className="space-y-4 mb-4">
          {question.statements.map((stmt, index) => {
            const statementKey = stmt.letter || `stmt_${index}`;
            const statementId = `${question.id}_${statementKey}`;
            const textFieldId = `${statementId}_text`;
            const selectedAnswer = userAnswers[statementId] as boolean | undefined;
            const textAnswer = (userAnswers[textFieldId] as string) || '';
            const isCorrect = selectedAnswer === stmt.correctAnswer;

            return (
              <div key={statementKey} className="space-y-2">
                <div className="flex items-start gap-2">
                  {stmt.letter && (
                    <span style={{ color: '#00776E', fontWeight: 'bold' }}>
                      {stmt.letter}{isAlphabetLetter(stmt.letter) ? ') ' : ' '}
                    </span>
                  )}
                  <div className="flex gap-2 flex-shrink-0">
                    {[true, false].map((value) => {
                      const label = value ? 'V' : 'F';
                      const isSelected = selectedAnswer === value;

                      return (
                        <label
                          key={String(value)}
                          className={`flex items-center justify-center w-8 h-8 rounded cursor-pointer transition-colors text-sm font-semibold ${
                            isSelected
                              ? showResults && isCorrect
                                ? 'bg-green-200 border-2 border-green-600 text-green-800'
                                : showResults && !isCorrect
                                ? 'bg-red-200 border-2 border-red-600 text-red-800'
                                : 'bg-blue-200 border-2 border-blue-600 text-blue-900'
                              : 'bg-white hover:bg-gray-100 border-2 border-gray-300 text-gray-700'
                          }`}
                        >
                          <input
                            type="radio"
                            name={statementId}
                            value={String(value)}
                            checked={isSelected}
                            onChange={() => onAnswerChange(statementId, value)}
                            className="sr-only"
                            disabled={showResults}
                          />
                          <span>{label}</span>
                        </label>
                      );
                    })}
                  </div>
                  <p className="mb-0" style={{ color: 'black' }}>
                    <span dangerouslySetInnerHTML={{ __html: stmt.statement }} />
                  </p>
                </div>

                {/* Campo de texto individual (se habilitado) */}
                {question.hasIndividualTextFields && (
                  <div className="ml-0" style={{ marginLeft: stmt.letter ? '2rem' : '0' }}>
                    <textarea
                      value={textAnswer}
                      onChange={(e) => onAnswerChange(textFieldId, e.target.value)}
                      placeholder={
                        'Digite sua resposta aqui...'
                      }
                      disabled={showResults}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y min-h-[80px] text-black"
                      style={{
                        fontFamily: 'inherit',
                      }}
                    />
                    {/* Mostrar resposta esperada na visão do professor */}
                    {showResults && (
                      <p className="mt-2 text-sm text-gray-600">
                        {stmt.correctAnswer && stmt.proof && (
                          <>
                            <strong>Trecho esperado:</strong>{' '}
                            <span dangerouslySetInnerHTML={{ __html: `"${stmt.proof}"` }} />
                          </>
                        )}
                        {!stmt.correctAnswer && stmt.correction && (
                          <>
                            <strong>Justificativa esperada:</strong>{' '}
                            <span dangerouslySetInnerHTML={{ __html: stmt.correction }} />
                          </>
                        )}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Campo de texto para correções (formato antigo - se habilitado) */}
        {question.hasCorrectionBox && !question.hasIndividualTextFields && (
          <div className="mt-4">
            <textarea
              value={correctionAnswer}
              onChange={(e) => onAnswerChange(correctionId, e.target.value)}
              placeholder={question.correctionPlaceholder || 'Corrija as afirmações falsas aqui...'}
              disabled={showResults}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y min-h-[100px] text-black"
              style={{
                fontFamily: 'inherit',
              }}
            />
          </div>
        )}

        {/* Mostrar correções na visão do professor (formato antigo) */}
        {showResults && !question.hasIndividualTextFields && (
          <div className="mt-4 p-3 bg-gray-100 rounded">
            <p className="text-sm font-semibold text-gray-700 mb-2">Correções esperadas:</p>
            {question.statements
              .filter((stmt) => !stmt.correctAnswer && stmt.correction)
              .map((stmt, idx) => {
                const key = stmt.letter || `stmt_${idx}`;
                return (
                  <p key={key} className="text-sm text-gray-600 mb-1">
                    {stmt.letter && <strong>{stmt.letter}):</strong>}{' '}
                    <span dangerouslySetInnerHTML={{ __html: stmt.correction || '' }} />
                  </p>
                );
              })}
          </div>
        )}
      </div>
    );
  }

  // Formato antigo (compatibilidade)
  const selectedAnswer = userAnswers[question.id] as boolean | undefined;
  const isCorrect = question.correctAnswer !== undefined && selectedAnswer === question.correctAnswer;

  return (
    <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
      <p className="font-semibold text-slate-800 mb-4" dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className="flex gap-4">
        {[true, false].map((value) => {
          const label = value ? 'Verdadeiro' : 'Falso';
          const isSelected = selectedAnswer === value;

          return (
            <label
              key={String(value)}
              className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer transition-colors ${
                isSelected
                  ? showResults && isCorrect
                    ? 'bg-green-200 border-2 border-green-600 text-green-800 font-semibold'
                    : showResults && !isCorrect
                    ? 'bg-red-200 border-2 border-red-600 text-red-800 font-semibold'
                    : 'bg-purple-200 border-2 border-purple-600 text-purple-900 font-semibold'
                  : 'bg-white hover:bg-gray-100 border-2 border-gray-300'
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={String(value)}
                checked={isSelected}
                onChange={() => onAnswerChange(question.id, value)}
                className="w-4 h-4"
                disabled={showResults}
              />
              <span>{label}</span>
            </label>
          );
        })}
      </div>
      {showResults && question.correctAnswer !== undefined && selectedAnswer !== question.correctAnswer && (
        <p className="mt-3 text-sm text-red-600">
          Resposta correta: <strong>{question.correctAnswer ? 'Verdadeiro' : 'Falso'}</strong>
        </p>
      )}
    </div>
  );
}

export default QuestionTrueFalse;
