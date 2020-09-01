import React, { Component } from "react";
import Question from './ListQuestion'




class Student extends Component {
  constructor(props) {
    super(props);
    const updateStateData = this.retriveData();
    console.log(updateStateData);
    if (updateStateData != undefined) {
      this.state = {
        question: updateStateData.question,
        length: updateStateData.length,
        score: 0
      }
    }
    else {
      this.state = {
        question: [
          {
            id: 1, content: "this is question 1", ans: 1,
            options: [
              { id: 1, content: "option1" },
              { id: 2, content: "option2" },
              { id: 3, content: "option3" },
              { id: 4, content: "option4" },


            ], selected: 0,
          },
          {
            id: 2, content: "this is question 2", ans: 2,
            options: [
              { id: 1, content: "option1" },
              { id: 2, content: "option2" },
              { id: 3, content: "option3" },
              { id: 4, content: "option4" },

            ], selected: 0,
          },
          {
            id: 3, content: "this is question 3", ans: 3,
            options: [
              { id: 1, content: "option1" },
              { id: 2, content: "option2" },
              { id: 3, content: "option3" },
              { id: 4, content: "option4" },

            ], selected: 0,
          },
          {
            id: 4, content: "this is question 4", ans: 4,
            options: [
              { id: 1, content: "option1" },
              { id: 2, content: "option2" },
              { id: 3, content: "option3" },
              { id: 4, content: "option4" },

            ], selected: 0,
          },
          {
            id: 5, content: "this is question 5", ans: 2,
            options: [
              { id: 1, content: "option1" },
              { id: 2, content: "option2" },
              { id: 3, content: "option3" },
              { id: 4, content: "option4" },

            ], selected: 0,
          },

        ],
        score: 0,
        length: 5,
      }
    }

  }


  retriveData = () => {
    try {
      const serializedState = localStorage.getItem('allData');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }
  updateSelected = (e, questionId, questions) => {
    /*console.log(e.target.id)*/
    let selectedOption = e.target.id;
    let questionList = [...questions];
    questionList[questionId - 1].selected = selectedOption;

    this.setState({
      question: questionList
    })
  }
  handleSubmit = () => {
    let questionList = [...this.state.question];
    let scoreEvaluating = this.state.score;
    for (var i = 0; i < this.state.length; i++) {
      if (parseInt(questionList[i].selected) === parseInt(questionList[i].ans)) {
        scoreEvaluating++;
      }
    }
    this.setState({
      score: scoreEvaluating
    }, () => { this.storeTolocal() })



  }
  storeTolocal = () => {
    try {
      const serializedState = JSON.stringify(this.state);
      localStorage.setItem('allData', serializedState);

    } catch {
      /*do nothing*/
    }
  }
  render() {

    return (
      <div className="question-container">
        <Question questions={this.state.question} updateSelected={this.updateSelected} />
        <a href="/result" onClick={this.handleSubmit} className="btn-large">Submit</a>
      </div>


    );
  }
}

export default Student;
