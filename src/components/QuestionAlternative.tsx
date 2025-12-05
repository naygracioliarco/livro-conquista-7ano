import { AlternativeQuestion, UserAnswers } from '../types/questions';
import { QuestionWrapper } from './shared/QuestionWrapper';
import { COLORS, FONTS } from '../constants/colors';

interface QuestionAlternativeProps {
  question: AlternativeQuestion;
  userAnswers: UserAnswers;
  onAnswerChange: (questionId: string, answer: number | number[]) => void;
  showResults?: boolean;
}

function QuestionAlternative({
  question,
  userAnswers,
  onAnswerChange,
  showResults = false,
}: QuestionAlternativeProps) {
  const isMultiple = question.allowMultiple || Array.isArray(question.correctAnswer);
  const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
  
  // Para múltipla escolha, armazena como array; para única, como número
  const userAnswer = userAnswers[question.id];
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
      onAnswerChange(question.id, newAnswers);
    } else {
      onAnswerChange(question.id, index);
    }
  };

  const isOptionCorrect = (index: number) => {
    return correctAnswers.includes(index);
  };

  const isAllCorrect = isMultiple && correctAnswers.length > 0 && 
    correctAnswers.every(ans => (selectedAnswers as number[]).includes(ans)) &&
    (selectedAnswers as number[]).length === correctAnswers.length;

  return (
    <QuestionWrapper
      number={question.number}
      question={question.question}
      className="p-4 rounded-lg"
      useHTML={true}
    >
      <div className="space-y-3">
        {question.options.map((option, index) => {
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
                name={question.id}
                value={index}
                checked={selected}
                onChange={() => handleOptionChange(index)}
                className="w-4 h-4"
                disabled={showResults}
              />
              <span style={{ fontFamily: FONTS.primary, color: COLORS.text.primary }}>
                <span style={{ color: COLORS.primary, fontWeight: 'bold' }}>
                  {String.fromCharCode(97 + index)}){' '}
                </span>
                <span dangerouslySetInnerHTML={{ __html: option }} />
              </span>
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
      {showResults && (
        (isMultiple 
          ? !isAllCorrect
          : selectedAnswers !== undefined && !correctAnswers.includes(selectedAnswers as number)
        ) && (
          <p className="mt-3 text-sm text-red-600">
            {isMultiple ? (
              <>
                Respostas corretas:{' '}
                {correctAnswers.map((ans, idx) => (
                  <span key={ans}>
                    <strong dangerouslySetInnerHTML={{ __html: question.options[ans] }} />
                    {idx < correctAnswers.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </>
            ) : (
              <>
                Resposta correta: <strong dangerouslySetInnerHTML={{ __html: question.options[correctAnswers[0]] }} />
              </>
            )}
          </p>
        )
      )}
    </QuestionWrapper>
  );
}

export default QuestionAlternative;
