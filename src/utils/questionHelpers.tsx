import React from 'react';
import { Question } from '../types/questions';

/**
 * Renderiza a resposta correta de uma questão para a visão do professor
 */
export function renderQuestionAnswer(question: Question): React.ReactNode {
  if (question.type === 'text-input') {
    // Se for questão de seleção de texto direto (sem subquestões)
    if (question.requiresTextSelection && question.correctSelections && question.correctSelections.length > 0 && !question.subQuestions) {
      return (
        <div className="mb-3">
          <p>
            {question.number !== undefined && (
              <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
            )}
            <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: question.question }} />
          </p>
          {question.instructions && question.instructions.length > 0 && (
            <ul className="mt-2 ml-4 list-disc">
              {question.instructions.map((instruction, idx) => (
                <li key={idx} className="mb-1">
                  <span style={{ color: '#BF3154' }} dangerouslySetInnerHTML={{ __html: instruction }} />
                </li>
              ))}
            </ul>
          )}
          <ul className="mt-2 ml-4 list-disc">
            {question.correctSelections.map((selection, idx) => (
              <li key={idx} className="mb-1">
                <span dangerouslySetInnerHTML={{ __html: `"${selection}"` }} />
              </li>
            ))}
          </ul>
        </div>
      );
    }

    // Se tiver subquestões, renderiza cada uma
    if (question.subQuestions && question.subQuestions.length > 0) {
      return question.subQuestions.map((subQ) => {
        // Se tiver subItems, renderiza com bullets
        if (subQ.subItems && subQ.subItems.length > 0) {
          return (
            <div key={subQ.letter} className="mb-4">
              <p className="mb-2">
                {question.number !== undefined && (
                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                )}
                <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                <span style={{ color: 'black' }}>{subQ.question}</span>
              </p>
              <ul className="question-subitems" style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                {subQ.subItems.map((subItem, index) => (
                  <li key={index} className="mb-2">
                    <p className="mb-1">
                      <span style={{ color: 'black' }}>{subItem.label}: </span>
                      <span dangerouslySetInnerHTML={{ __html: subItem.correctAnswer || '' }} />
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        // Se for questão de seleção de texto, renderiza as seleções corretas
        if (subQ.requiresTextSelection && subQ.correctSelections && subQ.correctSelections.length > 0) {
          return (
            <div key={subQ.letter} className="mb-3">
              <p>
                {question.number !== undefined && (
                  <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
                )}
                <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                <span style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: subQ.question }} />
              </p>
              <ul className="mt-2 ml-4 list-disc">
                {subQ.correctSelections.map((selection, idx) => (
                  <li key={idx} className="mb-1">
                    <span dangerouslySetInnerHTML={{ __html: `"${selection}"` }} />
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        // Se não tiver subItems, renderiza normalmente
        return (
          <p key={subQ.letter} className="mb-3">
            {question.number !== undefined && (
              <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
            )}
            <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
            <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
          </p>
        );
      });
    }
    // Se não tiver subquestões, renderiza a resposta direta
    if (question.correctAnswer) {
      return (
        <p className="mb-3">
          {question.number !== undefined && (
            <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
          )}
          <span dangerouslySetInnerHTML={{ __html: question.correctAnswer }} />
        </p>
      );
    }
  }

  if (question.type === 'true-false') {
    if (question.statements && question.statements.length > 0) {
      return question.statements.map((stmt, idx) => {
        const key = stmt.letter || `stmt_${idx}`;
        const correctAnswerText = stmt.correctAnswer ? 'Verdadeiro (V)' : 'Falso (F)';
        
        let answerText = correctAnswerText;
        if (stmt.correctAnswer && stmt.proof) {
          answerText = `${correctAnswerText}. "${stmt.proof}"`;
        } else if (!stmt.correctAnswer && stmt.correction) {
          answerText = `${correctAnswerText}. ${stmt.correction}`;
        }

        return (
          <p key={key} className="mb-3">
            {question.number !== undefined && (
              <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
            )}
            {stmt.letter && (
              <span style={{ color: '#00776E', fontWeight: 'bold' }}>{stmt.letter}) </span>
            )}
            <span dangerouslySetInnerHTML={{ __html: answerText }} />
          </p>
        );
      });
    }
    // Formato antigo
    if (question.correctAnswer !== undefined) {
      return (
        <p className="mb-3">
          {question.number !== undefined && (
            <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
          )}
          <span>{question.correctAnswer ? 'Verdadeiro' : 'Falso'}</span>
        </p>
      );
    }
  }

  if (question.type === 'alternative') {
    const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
    return (
      <p className="mb-3">
        {question.number !== undefined && (
          <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
        )}
        {correctAnswers.map((ans, idx) => {
          const correctLetter = String.fromCharCode(97 + ans);
          return (
            <span key={ans}>
              <span style={{ color: '#00776E', fontWeight: 'bold' }}>{correctLetter}) </span>
              <span dangerouslySetInnerHTML={{ __html: question.options[ans] || '' }} />
              {idx < correctAnswers.length - 1 ? ', ' : ''}
            </span>
          );
        })}
      </p>
    );
  }

  if (question.type === 'multiple-choice') {
    return (
      <p className="mb-3">
        {question.number !== undefined && (
          <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
        )}
        <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.correctAnswer.toUpperCase()}) </span>
        <span>{question.options[question.correctAnswer]}</span>
      </p>
    );
  }

  if (question.type === 'table-fill') {
    return (
      <>
        {/* Respostas da tabela */}
        {question.correctAnswer && (
          <>
            <p className="mb-2 font-semibold">
              {question.number !== undefined && (
                <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
              )}
              Tabela:
            </p>
            {question.rows.map((row) => {
              const correctAnswers = question.correctAnswer!;
              const firstColumnKey = Object.keys(row).find(key => key !== 'id') || 'paragraph';
              const firstColumnValue = row[firstColumnKey] || '';

              const columnAnswers = question.columns.slice(1).map((columnName, colIndex) => {
                const fieldId = `${question.id}_${row.id}_col${colIndex + 1}`;
                return {
                  columnName,
                  answer: correctAnswers[fieldId] || ''
                };
              });

              return (
                <div key={row.id} className="mb-4">
                  <p className="mb-2 font-semibold" style={{ color: '#0E3B5D' }}>
                    {question.columns[0]} {firstColumnValue}:
                  </p>
                  {columnAnswers.map((colAnswer, idx) => (
                    <p key={idx} className="mb-1">
                      <strong>{colAnswer.columnName}:</strong> {colAnswer.answer}
                    </p>
                  ))}
                </div>
              );
            })}
          </>
        )}
        {/* Respostas das subquestões */}
        {question.subQuestions && question.subQuestions.length > 0 && (
          <>
            <p className="mb-2 mt-4 font-semibold">Subquestões:</p>
            {question.subQuestions.map((subQ) => (
              <p key={subQ.letter} className="mb-3">
                <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
                <span dangerouslySetInnerHTML={{ __html: subQ.correctAnswer || '' }} />
              </p>
            ))}
          </>
        )}
      </>
    );
  }

  if (question.type === 'alternative-with-excerpts') {
    return (
      <>
        {question.subQuestions.map((subQ) => {
          const correctAnswers = Array.isArray(subQ.correctAnswer) ? subQ.correctAnswer : [subQ.correctAnswer];
          return (
            <p key={subQ.letter} className="mb-3">
              {question.number !== undefined && (
                <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
              )}
              <span style={{ color: '#00776E', fontWeight: 'bold' }}>{subQ.letter}) </span>
              {correctAnswers.map((ans, idx) => (
                <span key={ans}>
                  <span dangerouslySetInnerHTML={{ __html: subQ.options[ans] || '' }} />
                  {idx < correctAnswers.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          );
        })}
      </>
    );
  }

  if (question.type === 'ordering') {
    return (
      <div className="mb-3">
        {question.number !== undefined && (
          <span style={{ color: '#00776E', fontWeight: 'bold' }}>{question.number}. </span>
        )}
        {question.items
          .sort((a, b) => a.correctOrder - b.correctOrder)
          .map((item, idx) => (
            <p key={item.id} className="mb-2">
              <span style={{ color: '#00776E', fontWeight: 'bold' }}>{item.correctOrder}. </span>
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </p>
          ))}
      </div>
    );
  }

  return null;
}

/**
 * Renderiza múltiplas respostas de questões
 */
export function renderMultipleQuestionAnswers(questions: Question[]): React.ReactNode {
  return (
    <>
      {questions.map((question) => (
        <div key={question.id}>
          {renderQuestionAnswer(question)}
        </div>
      ))}
    </>
  );
}

