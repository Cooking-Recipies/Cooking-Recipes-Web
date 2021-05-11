import { useState } from 'react';
import { useHistory } from 'react-router';
import { create } from '../../components/requests/methods';
import * as Style from './editRecipe.style';

const CreateRecipe = () => {
    const history = useHistory();
    const [recipe, setRecipe] = useState({
        id: 0,
        user_id: 0,
        photos: [],
        title: 'my mockup recipe',
        preparing_time: '00:30',
        number_of_people: 2,
        instruction: 'my mockup instruction',
        reviews: [0,],
        likes: [0,],
        category_id: 1,
        tags: ['tag'],
        components: [{name: 'component', quantity: '1'}],
        created_at: '',
        updated_at: '',
    });

    const handleUpdate = (e) => {
        const tmp = recipe;
        tmp[e.target.name] = e.target.value;
        setRecipe({...tmp});
    }; 

    const handleImageUpdate = (e) => {
        let files = e.target.files
        //TODO: Add file type checking
        if (files.length <= 3) {
            setRecipe({...recipe, photos: files});
        }
        //TODO: display error message
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        create('api/recipes', recipe)
        .then(resp => {
            if (resp.status === 200) {
                history.push('/');
            } else {
                //TODO: Make proper error
            }
        });
    };

    return(
        <Style.RecipeWrapper>
            <Style.RecipeForm action="" onSubmit={handleSubmit}>
                <Style.RecipeLabel>Name</Style.RecipeLabel>
                <Style.RecipeInput name="title" value={recipe.title} type="text" onChange={handleUpdate} required></Style.RecipeInput>

                <Style.RecipeLabel>Description</Style.RecipeLabel>
                <Style.RecipeTextarea name="instruction" value={recipe.instruction} type="text" onChange={handleUpdate} required></Style.RecipeTextarea>

                <Style.RecipeLabel>Preparing time</Style.RecipeLabel>
                <Style.RecipeInput name="preparing_time" value={recipe.preparing_time} type="text" onChange={handleUpdate} required></Style.RecipeInput>

                <Style.RecipeLabel>Number of people</Style.RecipeLabel>
                <Style.RecipeInput name="number_of_people" value={recipe.number_of_people} type="number" onChange={handleUpdate} required></Style.RecipeInput>

                <Style.RecipeLabel>Image</Style.RecipeLabel>
                <Style.ImageInput multiple name="images" type="file" onChange={handleImageUpdate}></Style.ImageInput>

                <Style.RecipeButton type="submit">Create</Style.RecipeButton>
            </Style.RecipeForm>
        </Style.RecipeWrapper>
    );
};

export default CreateRecipe;