import { MatchingQuestion, UserAnswers } from '../types/questions';
import { QuestionWrapper } from './shared/QuestionWrapper';

interface QuestionMatchingProps {
  question: MatchingQuestion;
  userAnswers: UserAnswers;
  onAnswerChange: (questionId: string, answer: string) => void;
  showResults?: boolean;
}

function QuestionMatching({
  question,
  userAnswers,
  onAnswerChange,
  showResults = false,
}: QuestionMatchingProps) {
  return (
    <div className="mb-6">
      <QuestionWrapper
        number={question.number}
        question={question.question}
        className="mb-4"
        useHTML={true}
      />

      {/* Características */}
      <div className="mb-6">
        
        <div className="space-y-2">
          {question.characteristics.map((char) => (
            <p key={char.letter} className="mb-2">
              <span style={{ color: '#00776E', fontWeight: 'bold' }}>
                ({char.letter}){' '}
              </span>
              <span dangerouslySetInnerHTML={{ __html: char.text }} />
            </p>
          ))}
        </div>
      </div>

      {/* Trechos para relacionar */}
      <div className="mb-4">
        
        <div className="space-y-4">
          {question.excerpts.map((excerpt) => {
            const answerId = `${question.id}_${excerpt.id}`;
            const userAnswer = (userAnswers[answerId] as string) || '';
            const isCorrect = userAnswer.toUpperCase() === excerpt.correctAnswer.toUpperCase();
            const showAsCorrect = showResults && userAnswer && isCorrect;
            const showAsIncorrect = showResults && userAnswer && !isCorrect;

            return (
              <div
                key={excerpt.id}
                className={`flex items-start gap-3 p-3 rounded ${
                  showAsCorrect
                    ? 'bg-green-50 border-l-4 border-green-600'
                    : showAsIncorrect
                    ? 'bg-red-50 border-l-4 border-red-600'
                    : 'bg-white-50'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => {
                      const value = e.target.value.toUpperCase().replace(/[^A-D]/g, '');
                      if (value.length <= 1) {
                        onAnswerChange(answerId, value);
                      }
                    }}
                    disabled={showResults}
                    className="w-12 p-2 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      fontFamily: 'Ubuntu, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: showAsCorrect
                        ? '#16a34a'
                        : showAsIncorrect
                        ? '#dc2626'
                        : '#0E3B5D',
                    }}
                    maxLength={1}
                    placeholder="?"
                  />
                </div>
                <div className="flex-1">
                  <p
                    className="mb-2"
                    style={{ color: '#0E3B5D' }}
                    dangerouslySetInnerHTML={{ __html: excerpt.text }}
                  />
                </div>
                {showResults && userAnswer && (
                  <div className="text-sm">
                    {isCorrect ? (
                      <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span>
                    ) : (
                      <span style={{ color: '#dc2626', fontWeight: 'bold' }}>
                        ✗ ({excerpt.correctAnswer})
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuestionMatching;

