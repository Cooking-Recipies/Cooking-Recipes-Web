import { useState } from 'react';
import Recipe from '../../components/recipe/recipe';
import * as Style from './homepage.style';

const Homepage = () => {
    const [sorter, useSorter] = useState(null);
    const [filter, useFilter] = useState(null);

    const sortingOptions = [
        {id: 0, name: 'preperation time [DSC]'},
        {id: 1, name: 'preperation time [ASC]'},
    ];
    const filteringOptions = [
        {id: 0, name: 'everything'},
        {id: 1, name: 'fast'},
        {id: 2, name: 'vege'},
    ];

    const handleSorting = () => {

    };

    const handleFitering = () => {

    };

    return(
        <Style.ContentBox>
            <Style.FiltersWrapper>
                <Style.FilterSelect onChange={handleFitering}>
                    {filteringOptions.map(o => <option value={o.id} key={o.id}>{o.name}</option>)}
                </Style.FilterSelect>
                <Style.FilterSelect onChange={handleSorting}>
                    {sortingOptions.map(o => <option value={o.id} key={o.id}>{o.name}</option>)}
                </Style.FilterSelect>

                <Style.AddRecipe to='/recipe/add'>Add your recipe</Style.AddRecipe>
            </Style.FiltersWrapper>

            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
        </Style.ContentBox>
    );
};

export default Homepage;