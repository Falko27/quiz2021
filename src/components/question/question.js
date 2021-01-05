import React from 'react';

const Question = () => {
    return (
        <div className="questionContainer">
          <p>This is the very first question</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
              Answer 1
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
              Answer 2
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault3">
              Answer 3
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault4">
              Answer 4
            </label>
          </div>
        </div>
    )
}

    export default Question;