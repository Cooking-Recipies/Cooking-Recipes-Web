import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Recipe from '../../components/recipe/recipe';
import { read } from '../../components/requests/methods';
import { isLoggedIn } from '../../components/requests/request';
import * as Style from './homepage.style';

const UserRecipes = () => {
    const history = useHistory();
    const [recipes, setRecipes] = useState([]);
    const [sorter, setSorter] = useState(null);
    const [filter, setFilter] = useState(null);
    const [page, setPage] = useState({
        maxPages: 1,
        currentPage: 1,
    });

    const sortingOptions = [
        {id: 0, name: 'preperation time [DSC]'},
        {id: 1, name: 'preperation time [ASC]'},
    ];
    const filteringOptions = [
        {id: 0, name: 'everything'},
        {id: 1, name: 'fast'},
        {id: 2, name: 'vege'},
    ];

    useEffect(() => {
        if (!isLoggedIn()) {
            history.push('/login');
        }

        read('api/users/me/recipes?page=1')
        .then(resp => {
            if (resp.status === 200) {
                setPage({
                    maxPages: resp.data.pagination.total,
                    currentPage: resp.data.pagination.current_page
                });
                setRecipes(resp.data.data);
            } else {
                //TODO: make error handle
            }
        });
    }, []);

    const movePages = (amount) => {
        if (page.currentPage + amount > 0 && page.currentPage + amount <= page.maxPages) {
            setPage({...page, currentPage: page.currentPage + amount});
            read(`api/users/me/recipes?page=${page.currentPage + amount}`)
            .then(resp => setRecipes(resp.data.data));
        }
    }

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

            {Object.values(recipes).map(r => typeof r === 'object' ? <Recipe recipe={r} key={r.recipe_id} editable></Recipe> : null)}

            <Style.Pagination>
                <Style.PageIndicator onClick={() => movePages(-1)}>prev</Style.PageIndicator>
                <Style.PageIndicator>{page.currentPage}</Style.PageIndicator>
                <Style.PageIndicator onClick={() => movePages(1)}>next</Style.PageIndicator>
            </Style.Pagination>
        </Style.ContentBox>
    );
};

export default UserRecipes;