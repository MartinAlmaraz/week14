import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const Movie = ({movie, addReview}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addReview(movie.id, e.target.rating.value, e.target.comment.value)
    }

    return (
        <div className='movie-container'>
            <div>
                <div className='card m-5 w-50 mx-auto bg-dark bg-opacity-10'>
                    <img className='m-4 rounded mx-auto' src={movie.img}></img>
                <div className='card-body rounded mb-2 w-50 mx-auto bg-light'>
                    <h5 className='card-title'>{movie.title}</h5>
                    <p className='card-text'>{movie.text}</p>
                    <div></div>
                </div>
                  <ReviewList reviews={movie.reviews}/>
                  <h5>Write a Review</h5>
                  <ReviewForm submitHandler={handleSubmit}/>
                </div>
                <br/>
            </div>
        </div>
    );
}
export default Movie;