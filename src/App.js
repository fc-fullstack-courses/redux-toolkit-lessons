import './App.css';
import { Switch, Route } from 'react-router-dom';
import CounterPage from 'pages/CounterPage';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage';
import UsersPage from 'pages/UsersPage';
import RegistrationPage from 'pages/RegistrationPage';
import PrivateRoute from 'components/PrivateRoute';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/registration" component={RegistrationPage} />
      <PrivateRoute path="/counter" component={CounterPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
