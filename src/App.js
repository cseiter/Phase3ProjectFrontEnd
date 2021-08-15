import './App.css';
import ScoutContainer from './components/ScoutContainer/ScoutContainer';
import BadgeContainer from './components/BadgeContainer/BadgeContainer';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Scouts BSA Badge Tracker
      </header>
      <header className="scout">
        <ScoutContainer />
      </header>
      <section className="badges">
      <BadgeContainer />
      </section>
    </div>
  );
}

export default App;
