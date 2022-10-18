import './App.css';
import BtnPrimary from './components/Buttons/BtnPrimary';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='heading-primary'>Number Guessing Game</h1>
        <h3 className='heading-Secondary'>Generate a number from 1 to 10</h3>
      <div className='buttons'>
        <BtnPrimary title='Generate' titleReset='Reset' />
      </div>
      </header>
    </div>
  );
}

export default App;
