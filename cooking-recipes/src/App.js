import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import RecipeDetails from "./components/recipe/recipeDetails";

import GlobalStyle from './global.style';
import Homepage from './pages/homepage/homepage';
import UserRecipes from "./pages/homepage/userRecipes";
import LoginPage from "./pages/login/login";
import RegisterPage from "./pages/login/register";
import CreateRecipe from "./pages/recipe/createRecipe";
import EditRecipe from "./pages/recipe/editRecipe";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>

      <Navbar></Navbar>

      <div className="site-wrapper">
        <Switch>
          <Route exact path='/login'><LoginPage></LoginPage></Route>
          <Route exact path='/register'><RegisterPage></RegisterPage></Route>

          <Route exact path='/'><Homepage></Homepage></Route>
          <Route exact path='/my-recipes'><UserRecipes></UserRecipes></Route>
          <Route exact path='/recipe/view/:id'><RecipeDetails></RecipeDetails></Route>
          <Route exact path='/recipe/add'><CreateRecipe></CreateRecipe></Route>
          <Route exact path='/recipe/edit/:id'><EditRecipe></EditRecipe></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
