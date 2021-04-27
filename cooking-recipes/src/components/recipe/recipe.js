import * as Style from './recipe.style';
import image_mockup from '../../assets/recipe-mockup-image.jpg'

const Recipe = () => {
    return(
        <Style.RecipeWrapper>
            <Style.RecipeImage src={image_mockup} alt="recipe-alt"></Style.RecipeImage>

            <Style.InfoWrapper>
                <Style.RecipeName>This is my recipe #1</Style.RecipeName>
                <Style.RecipeDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra tortor id facilisis mattis. 
                Etiam volutpat odio eros, id pretium mauris gravida scelerisque. Nulla id quam eget felis finibus semper sit amet non lectus.
                Vestibulum a ullamcorper dui, sit amet scelerisque neque. Suspendisse eget massa eros. Etiam facilisis in orci iaculis facilisis. 
                Donec posuere et enim eget molestie. 
                </Style.RecipeDescription>
            </Style.InfoWrapper>

            <Style.ExpandButtonWrapper>
                <Style.ExpandButton>
                    <svg id="plus_svg__add-plus-button" xmlns="http://www.w3.org/2000/svg" width="15.265" height="15.265"><defs><style></style></defs><g id="plus_svg__add"><path id="plus_svg__Path_13423" fill="#fff" data-name="Path 13423" d="M15.265 8.723H8.723v6.542H6.542V8.723H0V6.542h6.542V0h2.181v6.542h6.542z"></path></g></svg>
                </Style.ExpandButton>
            </Style.ExpandButtonWrapper>
        </Style.RecipeWrapper>
    );
};

export default Recipe;