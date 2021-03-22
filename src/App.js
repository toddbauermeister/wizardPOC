import logo from './logo.svg';
import './App.css';
import IntroWizard from './IntroWizard/IntroWizard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IntroWizard/>
      </header>
    </div>
  );
}

export default App;
