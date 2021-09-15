import React from "react";

function ReviewForm(props){
    return (
        <div className="mb-5">
            <form onSubmit={props.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input 
                        onChange={props.handleChange}
                        name="title"
                        type="text" 
                        className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Comment:</label>
                    <textarea 
                        onChange={props.handleChange}
                        className="form-control" 
                        name="description" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-control">Rate this Product: [{props.review.score} out of 5]</label>
                    <input 
                        type="range" 
                        min="1"
                        max="5"
                        name="score"
                        onChange={props.handleChange}
                        className="form-range"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit Review!</button>
            </form>
        </div>
    );
}

export default ReviewForm