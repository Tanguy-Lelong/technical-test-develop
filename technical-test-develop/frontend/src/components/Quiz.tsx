import { useState } from "react";
import { IQuiz } from "../data-interfaces/quiz.interfaces"

interface QuizProps {
    quiz: IQuiz;
}

type SelectedAnswers = Record<number, number | null>;


export const Quiz = ({ quiz }: QuizProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

    const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answerIndex,
        });
    };

    const getAnswerStyle = (questionIndex: number, answerIndex: number, isCorrect: boolean) => {
        const isSelected = selectedAnswers[questionIndex] === answerIndex;
        return isSelected ? { color: isCorrect ? 'green' : 'red' } : {};
    };

    return (
        <div>
            <h2>{quiz.name}</h2>
            {quiz.questions.map((question, questionIndex) => (
                <div key={questionIndex}>
                    <h3>{question.name}</h3>
                    <div>
                        {question.answers.map((answer, answerIndex) => {
                            const isSelected = selectedAnswers[questionIndex] === answerIndex;
                            return (
                                <div key={answerIndex} style={getAnswerStyle(questionIndex, answerIndex, answer.isCorrect)}>
                                    <input
                                        type="radio"
                                        value={answerIndex}
                                        checked={isSelected}
                                        onChange={() => handleAnswerSelect(questionIndex, answerIndex)}
                                    />
                                    <label>{answer.name}</label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}