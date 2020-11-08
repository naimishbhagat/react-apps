import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(data);
  
  return (
    <main>
      <div className="container">
        <h2>Questions and answers about login</h2>
        <section className="info">
          {questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;