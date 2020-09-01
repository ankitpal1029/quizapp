import React from "react"

const handleSubmit = (e) => {
    e.preventDefault();

}



const InputQuestion = ({ questions, changeState, storetoLocal }) => {
    const QuestionList = questions.map((question) => {
        return (

            <div className="form teacher-card" key={question.id} onChange={(e) => { changeState(e, question.id) }}>
                <h5>Question {question.id}</h5>
                <input type="text" name="content" autoComplete="off" required />
                <h5>Options</h5>
                <input type="text" name="1" autoComplete="off" required />
                <input type="text" name="2" autoComplete="off" required />
                <input type="text" name="3" autoComplete="off" required />
                <input type="text" name="4" autoComplete="off" required />
                <h5>Answer Option</h5>
                <input type="text" name="ans" autoComplete="off" required />
            </div>



        )
    })
    return (
        <form className="teacher-container" onSubmit={handleSubmit}>
            {QuestionList}
            <a href="/" onClick={storetoLocal} className="btn-large">Destroy Kids?</a>
        </form>

    )

}


export default InputQuestion;