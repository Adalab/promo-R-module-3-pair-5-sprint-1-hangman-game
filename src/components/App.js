import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';


function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  //guarda la última letra que hayamos metido por input
  const [lastLetter, setLastLetter] = useState('');
  //guarda la palabra que tenemos que adivinar
  const [word, setWord] = useState('');
  //guarda todas las letras que introduzca la usuaria
  const [userLetters, setUserLetters] = useState([]);


  useEffect(()=>{
    callToApi().then((data)=>{
      setWord(data);
    });
  }, []);

  function handleInput(ev) {
    ev.preventDefault();
    const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]/g;
    //queremos que antes de guardar el input en lastLetter, compruebe que es válido
    //por eso queremos comprobar el input, no lastLetter
    const result = ev.target.value.match(regex);
    setLastLetter(ev.target.value);
    if (result) {
      setUserLetters([...userLetters, ev.target.value]);
    }
    paintError();
  }

  function handleClick(event) {
    event.preventDefault();
    if (numberOfErrors < 13) {
      const result = numberOfErrors + 1;
      setNumberOfErrors(result);
    }
  }

  function renderSolutionLetters() {
    const wordLetters = word.split('');
    let keyLetter = 0;

    return wordLetters.map((letter) => (
      <li className="letter" key={keyLetter++}>
        {userLetters.find((element) => element === letter) ? letter : ''}
      </li>
    ));
  }

  function renderErrorLetters(){
    const ErrorLetters =  userLetters.filter(userLetters => !(word.includes(userLetters)))
    let keyLetter = 0

    return ErrorLetters.map((letter) => (
   <li className="letter" key={keyLetter++}>{letter}</li>
    ));
   }

   function paintError(){
    if (numberOfErrors < 13) {
    const ErrorLetters =  userLetters.filter(userLetters => !(word.includes(userLetters)))
      setNumberOfErrors(ErrorLetters.length);}

   }

  return (
    <div>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
          <button onClick={handleClick}>Incrementar</button>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">{renderSolutionLetters()}</ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2> 
              <ul className="letters">
                {renderErrorLetters()}
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onInput={handleInput}
                value={lastLetter}
                // si dejamos el value así, hace cosas raras, preguntar mañana
              />
            </form>
          </section>
          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
