import * as Style from './recipe.style';
import image_mockup from '../../assets/recipe-mockup-image.jpg'
import { Link } from 'react-router-dom';

const getRecipePhoto = (photos) => {
    if (photos && photos.length !== 0) {
        return photos[0];
    }
    return image_mockup;
}

const Recipe = ({recipe, editable}) => {
    return(
        <Style.RecipeWrapper>
            <Style.RecipeImage src={getRecipePhoto(recipe.photos)} alt="recipe-alt"></Style.RecipeImage>

            <Style.InfoWrapper>
                <Style.RecipeName>{recipe.title}</Style.RecipeName>
                <Style.RecipeDescription>{recipe.instruction}</Style.RecipeDescription>
            </Style.InfoWrapper>

            <Style.ExpandButtonWrapper>
                <Style.ExpandButton>
                    {editable
                    ? <Link to={`/recipe/edit/${recipe.recipe_id}`}>⚙️</Link>
                    : <Link to={`/recipe/view/${recipe.recipe_id}`}><svg id="plus_svg__add-plus-button" xmlns="http://www.w3.org/2000/svg" width="15.265" height="15.265"><defs><style></style></defs><g id="plus_svg__add"><path id="plus_svg__Path_13423" fill="#fff" data-name="Path 13423" d="M15.265 8.723H8.723v6.542H6.542V8.723H0V6.542h6.542V0h2.181v6.542h6.542z"></path></g></svg></Link>
                    }
                </Style.ExpandButton>
            </Style.ExpandButtonWrapper>
        </Style.RecipeWrapper>
    );
};

export default Recipe;