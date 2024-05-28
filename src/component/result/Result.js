
import questions from "@/data";
import Question from "../question/Question";

export default function Result({ checkedIndexes, setShowResult }) {
    console.log(checkedIndexes)
    return (
        <div>
            <div>
                <button className="button is-white" onClick={() => {
                    setShowResult(false);
                }}>
                    <span class="icon">
                        <i class="fas fa-arrow-left"></i>
                    </span>
                    <span className="is-size-7">GO BACK</span>
                </button>
            </div>
            {checkedIndexes.map((value, index) => {
                const question = questions[index];
                console.log(value, question.question, index);
                return (
                    <Question
                        currentQuestion={index}
                        question={question}
                        selectOption={() => { }}
                        totalQuestions={questions.length}
                        checkedIndex={value}
                        key={question.question}
                    />
                );
            })}
        </div>
    );
}