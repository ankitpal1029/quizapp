import React from "react"
import OptionRender from "./OptionRender"


const Question = ({ questions, updateSelected }) => {


    const questionList = questions.map((question) => {

        return (
            <div key={question.id} className="question-card" >
                <span className="question-text">{question.id}) {question.content}</span>

                <OptionRender options={question.options} updateSelected={updateSelected} questionId={question.id} questions={questions} />


            </div>
        )
    })
    return < div > {questionList}</div >




}

export default Question;