import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';


import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />


      
            <Switch>
              <Route path="/" exact component={Home} ></Route>
              <Route path="/signin" component={Login} ></Route>
              <Route path="/register" component={Register} ></Route>
            </Switch>

      
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
