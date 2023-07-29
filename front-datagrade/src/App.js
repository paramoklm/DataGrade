import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-4xl font-bold">Hello, Tailwind CSS!</h1>
        <p className="text-lg">This is a sample React app with Tailwind CSS included.</p>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
