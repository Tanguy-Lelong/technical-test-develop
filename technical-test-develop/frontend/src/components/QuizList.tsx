import { IQuiz } from "../data-interfaces/quiz.interfaces"
import { useQuizzes } from "../hooks/quiz-hook"
import { Quiz } from "./Quiz"

export const QuizList = () => {
    const { quizzes, deleteQuiz, addQuiz } = useQuizzes()

    const generateHexId = () => {
        return [...Array(24)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      };
    const staticQuizz: IQuiz = {
        "name": "Static Quiz",
        "_id": generateHexId(),
        "questions": []
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                Create a quiz :
                <button
                    style={{
                        marginLeft: 5
                    }}
                    onClick={() => {
                        addQuiz(staticQuizz)
                    }}
                >
                    Add
                </button>
            </div>
            <h2>Quizzes</h2>
            <div className="list">
                {/* // TODO : display multiple quizzes here */}

                {quizzes.length > 0 ? quizzes.map((quiz, index) => (
                    <div key={index} style={{ backgroundColor: "white", borderRadius: 5, margin: 10, padding: 10, color: "black", display: "flex", justifyContent: "space-between" }}>
                        {`${quiz.name} (${quiz.questions.length} questions)`}
                        <Quiz quiz={quiz} />
                        <button
                            onClick={() => {
                                deleteQuiz(quiz._id)
                            }}
                        >
                            Delete
                        </button>
                    </div>

                ))
                    :
                    <div style={{ backgroundColor: "#FFF5", borderRadius: 5, margin: 10, padding: 10, color: "black", display: "flex", justifyContent: "space-between" }}>
                        {"Looks like you don't have any quiz yet :/"}
                    </div>
                }
            </div>
        </>
    )
}