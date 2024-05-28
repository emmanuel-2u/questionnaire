export default function Question({ currentQuestion, selectOption, checkedIndex, totalQuestions, question: { question, options } }) {
    return (
        <div className="half-width mt-6">
            <div className="has-text-centered">
                <span className="question-color is-size-7">QUESTION {currentQuestion + 1} / {totalQuestions}</span>
            </div>
            <div className="has-text-centered">
                <h4 className="title is-4">{question}</h4>
            </div>
            <div className="mt-6">
                {options.map((value, index) => {
                    console.log(checkedIndex === index, checkedIndex, index);
                    return (
                        <div className="control mb-3" key={value}>
                            <label className="radio options" onClick={() => selectOption(currentQuestion, index)}>
                                <input type="radio" name="answer" checked={checkedIndex === index} onChange={(e) => {
                                    e.stopPropagation();
                                }} />&nbsp;&nbsp;
                                {value}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}