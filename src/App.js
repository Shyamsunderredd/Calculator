
import { useState } from 'react';
import './App.css';
//import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  const [result,setresult]=useState("");
  const handleClick=(e)=>{
    setresult(result.concat(e.target.name));

  }
  const clear=()=>{
    setresult('');

  }
  const backspace=()=>{
    setresult(result.slice(0,result.length-1));

  }
  const Calculate=()=>{
    try {
      setresult(eval(result).toString());
      
    } catch (error) {
      setresult("error");
      
    }
    
  }
  return (
   <>
   <h1 className='heading'>CALCULATOR  APP</h1>
   <div className='container'>
    <form>
      <input type='text' value={result}></input>
    </form>
    <div className='keypad'>
      <button onClick={clear} className='highlight' id='clear'>Clear</button>
      <button onClick={backspace}  className='highlight' id='backspace'>C</button>
      <button onClick={handleClick} className='highlight'  name='/'>&divide;</button>
      <button onClick={handleClick} name='7'>7</button>
      <button onClick={handleClick} name='8'>8</button>
      <button onClick={handleClick} name='9'>9</button>
      <button onClick={handleClick}  className='highlight' name='*'>&times;</button>
      <button onClick={handleClick} name='6'>6</button>
      <button onClick={handleClick} name='5'>5</button>
      <button onClick={handleClick} name='4'>4</button>
      <button onClick={handleClick}  className='highlight' name='-'>&ndash;</button>
      <button onClick={handleClick} name='3'>3</button>
      <button onClick={handleClick} name='2'>2</button>
      <button onClick={handleClick} name='1'>1</button>
      <button onClick={handleClick} className='highlight'  name='+'>+</button>
      <button onClick={handleClick} name='0'>0</button>
      <button onClick={handleClick} name='.'>.</button>
      <button onClick={Calculate} id='result' className='highlight' name='='>=</button>
    </div>
   </div>
   </>
  );
}

export default App;
