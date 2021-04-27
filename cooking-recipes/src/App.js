import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

import GlobalStyle from './global.style';
import Homepage from './pages/homepage/homepage';
import LoginPage from "./pages/login/login";
import EditRecipe from "./pages/recipe/editRecipe";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>

      <Navbar></Navbar>

      <div className="site-wrapper">
        <Switch>
          <Route exact path='/login'><LoginPage></LoginPage></Route>
          <Route exact path='/'><Homepage></Homepage></Route>
          <Route exact path='/recipe/add'><EditRecipe></EditRecipe></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
