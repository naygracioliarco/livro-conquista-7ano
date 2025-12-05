import { AlternativeWithExcerptsQuestion, UserAnswers } from '../types/questions';
import { COLORS, FONTS } from '../constants/colors';

interface QuestionAlternativeWithExcerptsProps {
  question: AlternativeWithExcerptsQuestion;
  userAnswers: UserAnswers;
  onAnswerChange: (questionId: string, answer: number) => void;
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
              "{excerpt}"
            </div>
          ))}
        </div>
      )}

      {/* Subquestões */}
      <div className="space-y-6">
        {question.subQuestions.map((subQ) => {
          const subQuestionId = `${question.id}_${subQ.letter}`;
          const selectedAnswer = userAnswers[subQuestionId] as number | undefined;
          const isCorrect = selectedAnswer === subQ.correctAnswer;

          return (
            <div key={subQ.letter} className="space-y-3">
              {/* Texto da subquestão */}
              <p className="mb-3">
                <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: subQ.question }} />
              </p>

              {/* Opções de múltipla escolha */}
              <div className="space-y-2">
                {subQ.options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${
                      selectedAnswer === index
                        ? 'bg-blue-100 border-l-4 border-blue-600'
                        : 'bg-white hover:bg-blue-50'
                    } ${
                      showResults && selectedAnswer === index
                        ? isCorrect
                          ? 'border-l-4 border-green-600 bg-green-50'
                          : 'border-l-4 border-red-600 bg-red-50'
                        : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name={subQuestionId}
                      value={index}
                      checked={selectedAnswer === index}
                      onChange={() => onAnswerChange(subQuestionId, index)}
                      className="w-4 h-4"
                      disabled={showResults}
                    />
                    <span style={{ fontFamily: FONTS.primary, color: COLORS.text.primary }} dangerouslySetInnerHTML={{ __html: option }} />
                    {showResults && selectedAnswer === index && (
                      <span className={`ml-auto text-sm font-semibold ${
                        isCorrect ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {isCorrect ? '✓ Correto' : '✗ Incorreto'}
                      </span>
                    )}
                  </label>
                ))}
              </div>

              {/* Mensagem de resposta correta (quando errado) */}
              {showResults && selectedAnswer !== undefined && selectedAnswer !== subQ.correctAnswer && (
                <p className="mt-2 text-sm text-red-600">
                  Resposta correta: <strong dangerouslySetInnerHTML={{ __html: subQ.options[subQ.correctAnswer] }} />
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionAlternativeWithExcerpts;

