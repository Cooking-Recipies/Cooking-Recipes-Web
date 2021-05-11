import * as Style from './recipe.style';
import image_mockup from '../../assets/recipe-mockup-image.jpg'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { read } from '../requests/methods';
import Review from '../review/review';

const getRecipePhoto = (photos) => {
    if (photos && photos.length !== 0) {
        return photos[0];
    }
    return image_mockup;
}

const RecipeDetails = () => {
    let { id } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        read(`api/recipes/${id}`)
        .then(resp => {
            if (resp.status === 200) {
                setRecipe(resp.data.data);
            } else {
                //TODO: error handle
            }
        });
    }, [])

    return(
        <div>
            <Style.RecipeWrapper>
                <Style.RecipeImage src={getRecipePhoto(recipe.photos)} alt="recipe-alt"></Style.RecipeImage>

                <Style.InfoWrapper>
                    <Style.RecipeName>{recipe.title}</Style.RecipeName>
                    <Style.RecipeDescription>{recipe.instruction}</Style.RecipeDescription>
                </Style.InfoWrapper>
            </Style.RecipeWrapper>

            <Review recipe_id={id}></Review>
        </div>
    );
};

export default RecipeDetails;