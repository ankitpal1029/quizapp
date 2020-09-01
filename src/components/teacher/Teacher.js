import React, { Component } from "react"
import InputQuestion from "./InputQuestion"

class Teacher extends Component {
    state = {

        question: [

        ],
        length: 0,
        score: 0,
    };


    handleChange = (e) => {
        const inputVal = e.target.value;
        this.setState({
            length: inputVal
        })

    }

    handleClick = (e) => {
        e.preventDefault();
        e.target.children[0].readOnly = true;
        let newQuestionList = [...this.state.question];
        for (let i = 0; i < this.state.length; i++) {
            let emptyQuestion = {
                id: (i + 1), content: "", ans: "",
                options: [
                    { id: 1, content: "" },
                    { id: 2, content: "" },
                    { id: 3, content: "" },
                    { id: 4, content: "" },


                ], selected: 0,
            }
            newQuestionList.push(emptyQuestion);

        }
        this.setState({
            question: newQuestionList
        })

    }

    changeState = (e, id) => {

        let QuestionList = [...this.state.question]

        if (e.target.name === "content") {
            QuestionList[id - 1].content = e.target.value;
        }
        if (e.target.name === "1") {
            console.log(`option 1`)
            QuestionList[id - 1].options[0].content = e.target.value;


        }
        if (e.target.name === "2") {
            QuestionList[id - 1].options[1].content = e.target.value;


        }
        if (e.target.name === "3") {
            QuestionList[id - 1].options[2].content = e.target.value;


        }
        if (e.target.name === "4") {
            QuestionList[id - 1].options[3].content = e.target.value;

        }
        if (e.target.name === "ans") {
            QuestionList[id - 1].ans = e.target.value;

        }

        this.setState({
            question: QuestionList
        })
    }

    storetoLocal = () => {
        console.log(`store everything to local storage`);
        localStorage.clear();
        const serializedState = JSON.stringify(this.state);
        localStorage.setItem('allData', serializedState);
    }

    render() {
        return (
            <div className="teacher-container">
                <div className="teacher-card">
                    <h3>Enter Number Of Questions</h3>
                    <div className="form">
                        <form onSubmit={this.handleClick}>
                            <input onChange={this.handleChange} type="text" name="noQuestion" autoComplete="off" required />
                            <button className="btn-large" >Start Creating Questions</button>
                        </form>

                    </div>
                </div>
                <InputQuestion questions={this.state.question} changeState={this.changeState} storetoLocal={this.storetoLocal} />
            </div>
        )
    }
}

export default Teacher;