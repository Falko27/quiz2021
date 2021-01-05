
import React, {useState} from 'react';

function App() {

  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <h2>My Quiz</h2>
        <p>Current Score {score}</p>

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
        </div>
      </header>
    </div>
  );
}

export default App;
