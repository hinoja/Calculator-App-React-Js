
import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const handleClick = function (event) {
    setResult(result.concat(event.target.value));
  };
  const clearDisplay= function(){
    setResult('');
  };
  const calculate= function(){
    setResult(eval(result))
  };

  return (
    <div className='main'>
      <h1 className='title'>Calculator  app</h1>
      <div className='calc'>
        <input type='text' placeholder='0' id='answer' value={result} />
        <input type='button' className='button' onClick={handleClick} value='9' />
        <input type='button' className='button' onClick={handleClick} value='8' />
        <input type='button' className='button' onClick={handleClick} value='7' />
        <input type='button' className='button' onClick={handleClick} value='6' />
        <input type='button' className='button' onClick={handleClick} value='5' />
        <input type='button' className='button' onClick={handleClick} value='4' />
        <input type='button' className='button' onClick={handleClick} value='3' />
        <input type='button' className='button' onClick={handleClick} value='2' />
        <input type='button' className='button' onClick={handleClick} value='1' />

        <input type='button' className='button' onClick={handleClick} value='0' />
        <input type='button' className='button' onClick={handleClick} value='+' />
        <input type='button' className='button' onClick={handleClick} value='-' />
        <input type='button' className='button' onClick={handleClick} value='/' />
        <input type='button' className='button' onClick={handleClick} value='%' />
        <input type='button' className='button' onClick={handleClick} value='*' />
        <input type='button' className='button' onClick={handleClick} value='.' />
        <input type='button' className='button button2' onClick={clearDisplay} value='clear' />
        <input type='button' className='button button2' onClick={calculate} value='=' />

      </div>
    </div>
  );

}

export default App;
