import './App.css';
import { useState, useRef} from 'react';

import { checkEmail } from './utils/checkEmail';
import { checkPassword } from './utils/checkPassword';
import { comparePasswords } from './utils/comparePasswords';

const sendFormData = (formData) => {
  console.log(formData);
};




function App() {
  const [password, setPassword] = useState('');
  const [password_repeated, setPasswordRepeated] = useState('');
  const [email, setEmail] = useState('');
  const [errMessage, setErrMessage] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const submitButtonRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    sendFormData({ email, password });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {errMessage && <div className="error-msg">{errMessage}</div>}
        <input 
            className='input-field'
            name="email"
            type="email"
            placeholder="Почта"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            onBlur={({target}) => checkEmail(target.value, setIsValid, setErrMessage)}
        />
        <input
            className='input-field'
            name="password"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            onBlur={({target}) => checkPassword(target.value, setIsValid, setErrMessage)}
        />
        <input
            className='input-field'
            name="password_repeated"
            type="password"
            placeholder="Повторно введите пароль"
            value={password_repeated}
            onChange={({ target }) => setPasswordRepeated(target.value)}
            onBlur={({ target }) => comparePasswords(target.value, password, setIsValid, setErrMessage, submitButtonRef)}
            onKeyDown={(e) => { 
              console.log(`e.key = ${e.key}`);
              if (e.key === "Enter") 
              submitButtonRef.current.focus();
              }} 
        />
        <button 
          ref={submitButtonRef}
          className="button" 
          type="submit" 
          disabled={!isValid}>Зарегистрироваться </button>
        </form>
    </div>
  );
}

export default App;
