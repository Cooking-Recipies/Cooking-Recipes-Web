import { useState } from 'react';
import { useHistory } from 'react-router';
import { create } from '../requests/methods';
import * as Style from './review.style';

const Review = ({recipe_id}) => {
    const history = useHistory();
    const [review, setReview] = useState({
        rate: 1,
        comment: ''
    });

    const updateComment = (e) => {
        setReview({...review, comment: e.target.value});
    }

    const updateRate = (e) => {
        setReview({...review, rate: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        create(`/api/recipe/${recipe_id}/rates`)
        .then(resp => {
            if (resp.status === 200) {
                history.push('/');
            } else {
                //TODO: handle error
            }
        });
    } 

    return(
        <Style.ReviewWrapper action="" onSubmit={handleSubmit}>
            <h3>Add review</h3>
            <Style.ReviewTextarea value={review.comment} placeholder={'Your review'} onChange={updateComment}></Style.ReviewTextarea>
            <Style.ReviewSelect onChange={updateRate}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </Style.ReviewSelect>
            <Style.ReviewButton type="submit">🐳</Style.ReviewButton>
        </Style.ReviewWrapper>
    );
}

export default Review;