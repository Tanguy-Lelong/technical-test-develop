import { useQuizzes } from "../hooks/quiz-hook"

export const QuizList = () => {
    const { quizzes, deleteQuiz } = useQuizzes()
    return (
        <>
            <div style={{ display: "flex" }}>
                Create a quiz :
                <button
                    style={{
                        marginLeft: 5
                    }}
                    onClick={() => {
                        // TODO add dummy quiz here
                    }}
                >
                    Add
                </button>
            </div>
            <h2>Quizzes</h2>
            <div className="list">
                {/* // TODO : display multiple quizzes here */}
                {quizzes.length > 0 ? <div style={{ backgroundColor: "white", borderRadius: 5, margin: 10, padding: 10, color: "black", display: "flex", justifyContent: "space-between" }}>
                    {`${quizzes[0].name} (${quizzes[0].questions.length} questions)`}
                    <button
                        onClick={() => {
                            deleteQuiz(quizzes[0]._id)
                        }}
                    >
                        Delete
                    </button>
                </div>
                    :
                    <div style={{ backgroundColor: "#FFF5", borderRadius: 5, margin: 10, padding: 10, color: "black", display: "flex", justifyContent: "space-between" }}>
                        {"Looks like you don't have any quiz yet :/"}
                    </div>
                }
            </div>
        </>
    )
}