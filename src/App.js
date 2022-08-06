import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';


function App () {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    handleNextQuestion, 
    checkAnswer, 
    closeModal
  } = useGlobalContext();
  
  
  if (waiting) {
    return <SetupForm />
  }
  
  if (loading) {
    return <Loading />
  }
  

  const {question, incorrect_answers, correct_answer} = questions[index]; 
  let answers = [...incorrect_answers]; 
  
  const tempIndex = Math.floor(Math.random() * 4); 
  
  if (tempIndex === 3) {
    answers.push(correct_answer); 
  } else {
    answers.push(answers[tempIndex]); 
    answers[tempIndex] = correct_answer; 
  }
  
  
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers {correct} / {index}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => checkAnswer(correct_answer === answer)}
                  className='answer-btn'
                  key={index}
                />
              );
            })}
          </div>
        </article>
        <button className='next-question' onClick={handleNextQuestion}>
          Next Question
        </button>
      </section>
    </main>
  );
}

export default App;
