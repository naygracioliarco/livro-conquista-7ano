import { OrderingQuestion, UserAnswers } from '../types/questions';
import { QuestionWrapper } from './shared/QuestionWrapper';
import { COLORS, FONTS } from '../constants/colors';

interface QuestionOrderingProps {
  question: OrderingQuestion;
  userAnswers: UserAnswers;
  onAnswerChange: (questionId: string, answer: Record<string, number>) => void;
  showResults?: boolean;
}

function QuestionOrdering({
  question,
  userAnswers,
  onAnswerChange,
  showResults = false,
}: QuestionOrderingProps) {
  const savedAnswers = (userAnswers[question.id] as Record<string, number>) || {};
  
  const maxOrder = question.items.length;
  const availableNumbers = Array.from({ length: maxOrder }, (_, i) => i + 1);

  const handleOrderChange = (itemId: string, order: number) => {
    // Verificar se o número já está sendo usado por outro item
    const isNumberUsed = Object.values(savedAnswers).includes(order) && savedAnswers[itemId] !== order;
    
    if (isNumberUsed) {
      // Trocar os números entre os itens
      const itemUsingNumber = Object.keys(savedAnswers).find(
        key => savedAnswers[key] === order && key !== itemId
      );
      if (itemUsingNumber) {
        const newAnswers = {
          ...savedAnswers,
          [itemId]: order,
          [itemUsingNumber]: savedAnswers[itemId] || 0,
        };
        // Remover itens com ordem 0
        Object.keys(newAnswers).forEach(key => {
          if (newAnswers[key] === 0) {
            delete newAnswers[key];
          }
        });
        onAnswerChange(question.id, newAnswers);
      }
    } else {
      const newAnswers = {
        ...savedAnswers,
        [itemId]: order,
      };
      // Se selecionar 0, remove o item
      if (order === 0) {
        delete newAnswers[itemId];
      }
      onAnswerChange(question.id, newAnswers);
    }
  };

  return (
    <QuestionWrapper
      number={question.number}
      question={question.question}
      className="p-4 rounded-lg"
      useHTML={true}
    >
      <div className="space-y-3">
        {question.items.map((item) => {
          const selectedOrder = savedAnswers[item.id] || 0;
          const isCorrect = selectedOrder === item.correctOrder;
          const showAsCorrect = showResults && selectedOrder > 0 && isCorrect;
          const showAsIncorrect = showResults && selectedOrder > 0 && !isCorrect;

          return (
            <div
              key={item.id}
              className={`flex items-center gap-3 p-3 rounded transition-colors ${
                selectedOrder > 0
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
              {/* Número selecionado ou dropdown */}
              {showResults ? (
                <span
                  style={{
                    fontFamily: FONTS.primary,
                    color: COLORS.text.primary,
                    fontWeight: 'bold',
                    minWidth: '2rem',
                  }}
                >
                  ({selectedOrder > 0 ? selectedOrder : ' '})
                </span>
              ) : (
                <select
                  value={selectedOrder}
                  onChange={(e) => handleOrderChange(item.id, parseInt(e.target.value))}
                  disabled={showResults}
                  className="w-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center font-semibold"
                  style={{
                    fontFamily: FONTS.primary,
                    color: COLORS.text.primary,
                    backgroundColor: 'white',
                  }}
                >
                  <option value={0}>( )</option>
                  {availableNumbers.map((num) => (
                    <option key={num} value={num}>
                      ({num})
                    </option>
                  ))}
                </select>
              )}
              
              {/* Texto do item */}
              <span
                style={{ fontFamily: FONTS.primary, color: COLORS.text.primary }}
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
              
              {/* Indicador de correção */}
              {showResults && selectedOrder > 0 && (
                <span className={`ml-auto text-sm font-semibold ${
                  isCorrect ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isCorrect ? '✓ Correto' : '✗ Incorreto'}
                </span>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Mensagem de resposta correta (quando errado) */}
      {showResults && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
          <p className="font-semibold text-gray-700 mb-2">Ordem correta:</p>
          {question.items
            .sort((a, b) => a.correctOrder - b.correctOrder)
            .map((item, idx) => (
              <p key={item.id} className="text-gray-600 mb-1">
                <strong>{item.correctOrder}.</strong>{' '}
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </p>
            ))}
        </div>
      )}
    </QuestionWrapper>
  );
}

export default QuestionOrdering;

