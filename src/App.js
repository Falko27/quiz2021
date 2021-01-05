import React, {useState} from 'react';
import Question from './components/question/question'

function App() {

  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
        <h2>My Quiz</h2>
        <p>Current Score {score}</p>
        <Question />
        </div>
        
      </header>
    </div>
  );
}

export default App;
