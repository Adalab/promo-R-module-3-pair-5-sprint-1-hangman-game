import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  //guarda la última letra que hayamos metido por input
  const [lastLetter, setLastLetter] = useState('');
  //variable de estado boolean que indique si el input es válido o no
  //boolean es un tipo de dato que solo puede tener dos valores, true o false
  // const [isValidInput, setIsValidInput] = useState(false);

  function handleInput(ev){
    const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]/g;
    //queremos que antes de guardar el input en lastLetter, compruebe que es válido
    //por eso queremos comprobar el input, no lastLetter
   const result = ev.target.value.match(regex);
   if (result){
    setLastLetter(ev.target.value);
   }
   
  }

  function handleClick(event) {
    event.preventDefault();
    if (numberOfErrors < 13) {
      const result = numberOfErrors + 1;
      setNumberOfErrors(result);
    }
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
              <ul className="letters">
                <li className="letter">k</li>
                <li className="letter">a</li>
                <li className="letter"></li>
                <li className="letter">a</li>
                <li className="letter">k</li>
                <li className="letter">r</li>
                <li className="letter"></li>
                <li className="letter">k</li>
                <li className="letter">e</li>
                <li className="letter">r</li>
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li>
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
