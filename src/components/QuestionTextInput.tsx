import { TextInputQuestion, UserAnswers } from '../types/questions';
import QuestionTextInputWithEmbedded from './QuestionTextInputWithEmbedded';
import SelectableText from './SelectableText';

interface QuestionTextInputProps {
  question: TextInputQuestion;
  userAnswers: UserAnswers;
  onAnswerChange: (questionId: string, answer: string) => void;
  showResults?: boolean;
}

function QuestionTextInput({
  question,
  userAnswers,
  onAnswerChange,
  showResults = false,
}: QuestionTextInputProps) {
  const userAnswer = (userAnswers[question.id] as string) || '';

  // Se tiver conteúdo embutido ou pergunta de acompanhamento, usa formato especial
  if (question.embeddedContent || question.followUpQuestion) {
    return (
      <QuestionTextInputWithEmbedded
        question={question}
        userAnswers={userAnswers}
        onAnswerChange={onAnswerChange}
        showResults={showResults}
      />
    );
  }

  // Se tiver seleção de texto direto (sem subquestões) com instruções
  if (question.requiresTextSelection && question.selectableText && !question.subQuestions) {
    const selectionId = `${question.id}_selections`;
    let savedSelections: Array<{ start: number; end: number }> = [];
    try {
      const saved = userAnswers[selectionId];
      if (typeof saved === 'string') {
        savedSelections = JSON.parse(saved);
      } else if (Array.isArray(saved) && saved.length > 0) {
        const firstItem = saved[0];
        if (typeof firstItem === 'object' && firstItem !== null && 'start' in firstItem && 'end' in firstItem) {
          savedSelections = saved as unknown as Array<{ start: number; end: number }>;
        }
      }
    } catch (e) {
      savedSelections = [];
    }

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
              <li key={idx} className="mb-2">
                <span style={{ color: '#000000' }} dangerouslySetInnerHTML={{ __html: instruction }} />
              </li>
            ))}
          </ul>
        )}

        {/* Texto selecionável */}
        <div className="mb-3">
          <SelectableText
            text={question.selectableText}
            selectedRanges={savedSelections}
            onSelectionChange={(ranges) => {
              onAnswerChange(selectionId, JSON.stringify(ranges));
            }}
            disabled={showResults}
            correctSelections={question.correctSelections}
            showResults={showResults}
          />
        </div>
      </div>
    );
  }

  // Se tiver subquestões, renderiza o formato com número e letras
  if (question.subQuestions && question.subQuestions.length > 0) {
    return (
      <div className="mb-6">
        {/* Título principal com número */}
        <p className="mb-4">
          {question.number !== undefined && (
            <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
          )}
          <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: question.question }} />
        </p>

        {/* Tabela (se houver) */}
        {question.table && (
          <div className="mb-6 overflow-x-auto -mx-4 md:mx-0">
            <div className="min-w-full inline-block">
              <table
                className="w-full border-collapse"
                style={{
                  border: '3px solid #0E3B5D',
                  minWidth: '100%',
                }}
              >
                <thead>
                  <tr>
                    {question.table.columns.map((column, index) => (
                      <th
                        key={index}
                        className="p-2 md:p-3 text-center font-semibold text-xs md:text-base"
                        style={{
                          border: '1px solid #0E3B5D',
                          color: '#0E3B5D',
                          fontFamily: 'Ubuntu, sans-serif',
                          whiteSpace: 'normal',
                          wordBreak: 'break-word',
                        }}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {question.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {question.table!.columns.map((column, colIndex) => (
                        <td
                          key={colIndex}
                          className="p-2 md:p-3"
                          style={{
                            border: '1px solid #0E3B5D',
                            backgroundColor: 'white',
                            fontFamily: 'Ubuntu, sans-serif',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                          }}
                        >
                          {row[column] || ''}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Subquestões */}
        <div className="space-y-4">
          {question.subQuestions.map((subQ) => {
            const subQuestionId = `${question.id}_${subQ.letter}`;
            const subUserAnswer = (userAnswers[subQuestionId] as string) || '';
            const selectionId = `${subQuestionId}_selections`;
            let savedSelections: Array<{ start: number; end: number }> = [];
            try {
              const saved = userAnswers[selectionId];
              if (typeof saved === 'string') {
                savedSelections = JSON.parse(saved);
              } else if (Array.isArray(saved) && saved.length > 0) {
                const firstItem = saved[0];
                if (typeof firstItem === 'object' && firstItem !== null && 'start' in firstItem && 'end' in firstItem) {
                  savedSelections = saved as unknown as Array<{ start: number; end: number }>;
                }
              }
            } catch (e) {
              savedSelections = [];
            }
            
            return (
              <div key={subQ.letter} className="mb-4">
                {/* Texto selecionável (se houver) - aparece ANTES da pergunta */}
                {subQ.requiresTextSelection && subQ.selectableText && (
                  <div className="mb-3">
                    <SelectableText
                      text={subQ.selectableText}
                      selectedRanges={savedSelections}
                      onSelectionChange={(ranges) => {
                        onAnswerChange(selectionId, JSON.stringify(ranges));
                      }}
                      disabled={showResults}
                      correctSelections={subQ.correctSelections}
                      showResults={showResults}
                    />
                  </div>
                )}
                
                <p className="mb-2">
                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                  <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: subQ.question }} />
                </p>
                
                {/* Subquestões aninhadas (com bullets) */}
                {subQ.subItems && subQ.subItems.length > 0 ? (
                  <ul className="space-y-3 mt-3 question-subitems" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                    {subQ.subItems.map((subItem, index) => {
                      const subItemId = `${subQuestionId}_${index}`;
                      const subItemAnswer = (userAnswers[subItemId] as string) || '';
                      
                      return (
                        <li key={index} className="mb-3">
                          <p className="mb-2" style={{ color: 'black' }}>
                            {subItem.label}
                          </p>
                          <textarea
                            value={subItemAnswer}
                            onChange={(e) => onAnswerChange(subItemId, e.target.value)}
                            placeholder={subItem.placeholder || 'Digite sua resposta aqui...'}
                            disabled={showResults}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y min-h-[60px] text-black"
                            style={{
                              fontFamily: 'inherit',
                            }}
                          />
                          {showResults && subItem.correctAnswer && (
                            <div className="mt-2 p-2 bg-gray-100 rounded text-sm">
                              <p className="font-semibold text-gray-700 mb-1">Resposta esperada:</p>
                              <p className="text-gray-600">{subItem.correctAnswer}</p>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  // Só mostra o campo de texto se NÃO for uma questão de seleção de texto e NÃO estiver oculto
                  !subQ.requiresTextSelection && !subQ.hideTextInput && (
                    <textarea
                      value={subUserAnswer}
                      onChange={(e) => onAnswerChange(subQuestionId, e.target.value)}
                      placeholder={subQ.placeholder || 'Digite sua resposta aqui...'}
                      disabled={showResults}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y min-h-[80px] text-black"
                      style={{
                        fontFamily: 'inherit',
                      }}
                    />
                  )
                )}
                
                {showResults && subQ.correctAnswer && !subQ.subItems && (
                  <div className="mt-2 p-2 bg-gray-100 rounded text-sm">
                    <p className="font-semibold text-gray-700 mb-1">Resposta esperada:</p>
                    <p className="text-gray-600">{subQ.correctAnswer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Formato simples (sem subquestões)
  return (
    <div className="mb-6 p-4 rounded-lg">
      <p className="mb-4">
        {question.number !== undefined && (
          <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
        )}
        <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: question.question }} />
      </p>
      <textarea
        value={userAnswer}
        onChange={(e) => onAnswerChange(question.id, e.target.value)}
        placeholder={question.placeholder || 'Digite sua resposta aqui...'}
        disabled={showResults}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y min-h-[100px] text-black"
        style={{
          fontFamily: 'inherit',
        }}
      />
      {showResults && question.correctAnswer && (
        <div className="mt-3 p-3 bg-gray-100 rounded">
          <p className="text-sm font-semibold text-gray-700 mb-1">Resposta esperada:</p>
          <p className="text-sm text-gray-600">{question.correctAnswer}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionTextInput;

