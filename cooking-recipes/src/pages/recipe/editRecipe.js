import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { read, remove, update } from '../../components/requests/methods';
import * as Style from './editRecipe.style';

const EditRecipe = () => {
    let { id } = useParams();
    const history = useHistory();
    const [recipe, setRecipe] = useState({
        photos: [null,null,null],
        title: 'loading...',
        preparing_time: 'loading...',
        number_of_people: 0,
        instruction: 'loading...',
        reviews: [0,],
        likes: [0,],
        category_id: 0,
        tags: [0],
        components: [0]
    });

    useEffect(() => {
        read(`api/recipes/${id}`)
        .then(resp => setRecipe(resp.data.data));
    }, [id]);

    const deleteRecipe = (e) => {
        e.preventDefault();
        remove(`api/recipes/${id}`)
        .then(resp => {
            if (resp.status === 200) {
                history.push('/my-recipes');
            } else {
                //TODO: add error handle
            }
        });
    }

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
        update(`api/recipes/${id}`, recipe)
        .then(resp => {
            if (resp.status === 200) {
                history.push('/my-recipes');
            } else {
                //TODO: add error handle
            }
        });
    };

    return(
        <Style.RecipeWrapper>
            <Style.RecipeForm action="" onSubmit={handleSubmit}>
                <Style.DeleteButton onClick={deleteRecipe}>Delete</Style.DeleteButton>

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

                <Style.RecipeButton type="submit">Save</Style.RecipeButton>
            </Style.RecipeForm>
        </Style.RecipeWrapper>
    );
};

export default EditRecipe;