import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teacher from './components/Teacher';
import Student from './components/Student';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/teacher" component={Teacher} />
        <Route path="/student" component={Student} />
      </Switch>
    </Router>
  );
}

export default App;
