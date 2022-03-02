import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Appointment/Login/Login';
import Register from './Pages/Appointment/Login/Register';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Switch>
        <Route path="/appointment">
       <Appointment></Appointment>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="*">
          <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
