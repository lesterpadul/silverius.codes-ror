import React from "react";

function Review (props) { 
    return (
        <div>
            <div className="card bg-primary text-white shadow mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">{props.review.title}</div>
                        <div className="col-6 d-flex justify-content-end">
                            <div className="d-flex justify-content-right">
                                <div className={`${props.review.score >= 1 ? "bi-star-fill" : ""}`}></div>
                                <div className={`${props.review.score >= 2 ? "bi-star-fill" : ""}`}></div>
                                <div className={`${props.review.score >= 3 ? "bi-star-fill" : ""}`}></div>
                                <div className={`${props.review.score >= 4 ? "bi-star-fill" : ""}`}></div>
                                <div className={`${props.review.score >= 5 ? "bi-star-fill" : ""}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white-50 small"> {props.review.description } </div>
                </div>
            </div>
        </div>
    );
}

export default Review