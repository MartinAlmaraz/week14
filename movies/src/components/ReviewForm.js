import React from 'react';
import Stars from './Stars';

const ReviewForm = ({submitHandler}) => {
    return (
        <div>
            <form onSubmit = {submitHandler}>
                <label>Stars:</label>
                <Stars name="stars" stars={null}/>
                <label>Comment</label>
                <textarea className='border border-dark rounded' cols="50" rows="3" name="comment"></textarea>
                <br/>
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ReviewForm;