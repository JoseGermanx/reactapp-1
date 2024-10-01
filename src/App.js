import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

function App() {

  console.log("Hola mundo desde APP")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
        <Button />
      </header>
    </div>
  );
}

export default App;
