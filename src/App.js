import './App.css';
import ScoutContainer from './components/ScoutContainer/ScoutContainer';
import BadgeContainer from './components/BadgeContainer/BadgeContainer';
import CreateBadge from './components/BadgeContainer/CreateBadge';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Scouts BSA Badge Tracker
      </header>
      <header className="scout">
        <ScoutContainer />
      </header>
      <section className="create_badges">
        <CreateBadge />
      </section>
      <section className="badges">
      <BadgeContainer fluid />
      </section>
    </div>
  );
}

export default App;
