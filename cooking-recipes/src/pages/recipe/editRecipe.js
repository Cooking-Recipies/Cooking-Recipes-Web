import { useState } from 'react';
import * as Style from './editRecipe.style';

const EditRecipe = () => {
    const [recipe, setRecipe] = useState({});

    return(
        <Style.RecipeWrapper>
            <Style.RecipeLabel>Name</Style.RecipeLabel>
            <Style.RecipeInput value={recipe.name} type="text"></Style.RecipeInput>

            <Style.RecipeLabel>Description</Style.RecipeLabel>
            <Style.RecipeTextarea value={recipe.description} type="text"></Style.RecipeTextarea>

            <Style.RecipeLabel>Image</Style.RecipeLabel>
            <Style.ImageInput value={recipe.image} type="file"></Style.ImageInput>

            <Style.RecipeButton>🐳</Style.RecipeButton>
        </Style.RecipeWrapper>
    );
};

export default EditRecipe;