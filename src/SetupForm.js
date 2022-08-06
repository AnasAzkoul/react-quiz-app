import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const {handleChange, handleSubmit, quiz, error} = useGlobalContext(); 
  const { amount, category, difficulty } = quiz;
  return (
    <main>
      <section className='quiz'>
        <h2>Setup Quiz</h2>
        <form className='setup-form'>
          <div className='form-control'>
            {/* {amount} */}
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'>Category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={category}
              onChange={handleChange}
            >
              <option value='sports'>Sports</option>
              <option value='history'>History</option>
              <option value='politics'>politics</option>
            </select>
          </div>
          {/* difficulty */}
          <div className='form-control'>
            <label htmlFor='difficulty'>difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>

          {error && (
            <p className='error'>
              cen't generate questions, please try different options
            </p>
          )}

          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
