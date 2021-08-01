import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teacher from './components/Teacher';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/teacher" component={Teacher} />
      </Switch>
    </Router>
  );
}

export default App;
