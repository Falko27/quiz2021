import React from 'react';
import './style.css'
import QuestionList from './questionList'

//const test = QuestionList[0]
//console.log(test)

const {questionNumber, question, answer1, answer2, answer3, answer4, correctAnswer} = QuestionList[0]

const Question = () => {
    return (
        <div className="questionContainer">
          <p>{questionNumber}. {question}</p>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
            {answer1}
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
            {answer2}
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault3">
            {answer3}
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault4">
            {answer4}
            </label>
          </div>
          <p>The correct answer is {correctAnswer}</p>
        </div>
    )
}

    export default Question;