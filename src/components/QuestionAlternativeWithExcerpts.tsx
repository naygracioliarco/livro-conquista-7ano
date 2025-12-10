import { AlternativeWithExcerptsQuestion, UserAnswers } from '../types/questions';
import { COLORS, FONTS } from '../constants/colors';

// Função auxiliar para verificar se é letra do alfabeto (a-z) ou número romano (I, II, III, etc.)
const isAlphabetLetter = (letter: string): boolean => {
  // Verifica se é uma única letra minúscula do alfabeto (a-z)
  return /^[a-z]$/.test(letter);
};

interface QuestionAlternativeWithExcerptsProps {
  question: AlternativeWithExcerptsQuestion;
  userAnswers: UserAnswers;
  onAnswerChange: (questionId: string, answer: number | number[]) => void;
  showResults?: boolean;
}

function QuestionAlternativeWithExcerpts({
  question,
  userAnswers,
  onAnswerChange,
  showResults = false,
}: QuestionAlternativeWithExcerptsProps) {
  return (
    <div className="mb-6">
      {/* Título principal com número */}
      <p className="mb-4">
        {question.number !== undefined && (
          <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
        )}
        <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: question.question }} />
      </p>

      {/* Trechos de texto */}
      {question.textExcerpts && question.textExcerpts.length > 0 && (
        <div className="mb-6 space-y-3">
          {question.textExcerpts.map((excerpt, index) => (
            <div
              key={index}
              className=""
              style={{
                fontFamily: FONTS.primary,
                color: COLORS.text.primary,
              }}
            >
              "{excerpt || ''}"
            </div>
          ))}
        </div>
      )}

      {/* Subquestões */}
      <div className="space-y-6">
        {question.subQuestions.map((subQ) => {
          const subQuestionId = `${question.id}_${subQ.letter}`;
          const isMultiple = subQ.allowMultiple || Array.isArray(subQ.correctAnswer);
          const correctAnswers = Array.isArray(subQ.correctAnswer) ? subQ.correctAnswer : [subQ.correctAnswer];
          
          // Para múltipla escolha, armazena como array; para única, como número
          const userAnswer = userAnswers[subQuestionId];
          const selectedAnswers = isMultiple 
            ? (Array.isArray(userAnswer) ? userAnswer : (userAnswer !== undefined ? [userAnswer] : [])) as number[]
            : (userAnswer as number | undefined);
          
          const isOptionSelected = (index: number) => {
            if (isMultiple) {
              return (selectedAnswers as number[]).includes(index);
            }
            return selectedAnswers === index;
          };

          const handleOptionChange = (index: number) => {
            if (isMultiple) {
              const currentAnswers = (selectedAnswers as number[]) || [];
              const newAnswers = currentAnswers.includes(index)
                ? currentAnswers.filter(i => i !== index)
                : [...currentAnswers, index];
              onAnswerChange(subQuestionId, newAnswers);
            } else {
              onAnswerChange(subQuestionId, index);
            }
          };

          const isOptionCorrect = (index: number) => {
            return correctAnswers.includes(index);
          };

          const isAllCorrect = isMultiple && correctAnswers.length > 0 && 
            correctAnswers.every(ans => (selectedAnswers as number[]).includes(ans)) &&
            (selectedAnswers as number[]).length === correctAnswers.length;

          return (
            <div key={subQ.letter} className="space-y-3">
              {/* Texto da subquestão */}
              <p className="mb-3">
                <span style={{ color: '#00776E', fontWeight: 'bold' }}>
                  {subQ.letter}{isAlphabetLetter(subQ.letter) ? ') ' : ' '}
                </span>
                <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: subQ.question }} />
              </p>

              {/* Opções de múltipla escolha */}
              <div className="space-y-2">
                {subQ.options.map((option, index) => {
                  const selected = isOptionSelected(index);
                  const correct = isOptionCorrect(index);
                  const showAsCorrect = showResults && selected && correct;
                  const showAsIncorrect = showResults && selected && !correct;

                  return (
                    <label
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${
                        selected
                          ? 'bg-blue-100 border-l-4 border-blue-600'
                          : 'bg-white hover:bg-blue-50'
                      } ${
                        showAsCorrect
                          ? 'border-l-4 border-green-600 bg-green-50'
                          : showAsIncorrect
                          ? 'border-l-4 border-red-600 bg-red-50'
                          : ''
                      }`}
                    >
                      <input
                        type={isMultiple ? "checkbox" : "radio"}
                        name={subQuestionId}
                        value={index}
                        checked={selected}
                        onChange={() => handleOptionChange(index)}
                        className="w-4 h-4"
                        disabled={showResults}
                      />
                      <span style={{ fontFamily: FONTS.primary, color: COLORS.text.primary }} dangerouslySetInnerHTML={{ __html: option }} />
                      {showResults && selected && (
                        <span className={`ml-auto text-sm font-semibold ${
                          correct ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {correct ? '✓ Correto' : '✗ Incorreto'}
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>

              {/* Mensagem de resposta correta (quando errado ou incompleto) */}
              {showResults && (
                (isMultiple 
                  ? !isAllCorrect
                  : selectedAnswers !== undefined && !correctAnswers.includes(selectedAnswers as number)
                ) && (
                  <p className="mt-2 text-sm text-red-600">
                    {isMultiple ? (
                      <>
                        Respostas corretas:{' '}
                        {correctAnswers.map((ans, idx) => (
                          <span key={ans}>
                            <strong dangerouslySetInnerHTML={{ __html: subQ.options[ans] }} />
                            {idx < correctAnswers.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </>
                    ) : (
                      <>
                        Resposta correta: <strong dangerouslySetInnerHTML={{ __html: subQ.options[correctAnswers[0]] }} />
                      </>
                    )}
                  </p>
                )
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionAlternativeWithExcerpts;

