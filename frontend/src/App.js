import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teacher from './components/Teacher';
import Student from './components/Student';
import Home from './pages/Home';
import Create from './pages/Create';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route path="/teacher" component={Teacher} />
        <Route path="/student" component={Student} />
      </Switch>
    </Router>
  );
}

export default App;
