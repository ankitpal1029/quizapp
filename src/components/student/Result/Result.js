import React from "react"
import Confetti from "../../../images/confetti.jpg"

const retrieveData = () => {
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


const Result = () => {
    const Score = retrieveData();

    return (
        <div className="result-container">
            <div className="result-card">
                <img src={Confetti} alt="something"></img>
                <div className="result-text">
                    <h1>You Finished The Quiz!!!</h1>
                    <h3>Score:{Score.score}</h3>
                    <h2>Murty is proud of you</h2>
                </div>
            </div>
            <a href="/" className="btn-large" >Go Back?</a>
        </div>


    )
}
export default Result;