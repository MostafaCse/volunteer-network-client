import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import AddEvent from './Components/AddEvent/AddEvent';
import Register from './Components/Register/Register';
import { createContext, useState } from 'react';
import HomeBody from './Components/Home/HomeBody/HomeBody';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

export const volunteerNetwork = createContext();
function App() {
  const [logInUser, setLogInUser] = useState([]);
  return (
    <volunteerNetwork.Provider value={[logInUser, setLogInUser]}>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/HomeBody">
            <HomeBody></HomeBody>
          </Route>
          <Route path="/AddEvent">
            <AddEvent></AddEvent>
          </Route>
          <Route path="/Dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/RegisterIndirect">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/Register/:eventTitle">
            <Register></Register>
          </PrivateRoute>
        </Switch>
      </Router>
    </volunteerNetwork.Provider>

  );
}

export default App;
