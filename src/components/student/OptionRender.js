import React from "react";



const OptionRender = ({ options, updateSelected, questionId, questions }) => {

    const optionList = options.map((option) => {

        return (
            <div key={option.id} >
                <label className="option">
                    <input onClick={(e) => { updateSelected(e, questionId, questions) }} type="radio" className="with-gap" id={option.id} name="Rad" />
                    <span className="option-text">{option.content}</span>
                </label>


            </div>

        )
    })
    return <form className="option-card">{optionList}</form>

}

export default OptionRender;