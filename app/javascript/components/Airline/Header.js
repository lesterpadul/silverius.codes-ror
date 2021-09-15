import React from "react";

const Header = function(props){
    let header = props.attributes 
    let avgScore = header.avg_score 
    return (
        <div> 
            <img className="card-img-top" src={ header.image_url } alt="..." />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{ header.name }</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className={`${avgScore >= 1 ? "bi-star-fill" : ""}`}></div>
                        <div className={`${avgScore >= 2 ? "bi-star-fill" : ""}`}></div>
                        <div className={`${avgScore >= 3 ? "bi-star-fill" : ""}`}></div>
                        <div className={`${avgScore >= 4 ? "bi-star-fill" : ""}`}></div>
                        <div className={`${avgScore >= 5 ? "bi-star-fill" : ""}`}></div>
                    </div>
                    <div>{ header.avg_score || 0 } out of 5</div>
                    <div>Total reviews: {props.reviews.length}</div>
                </div>
            </div>
        </div>
    )
}

export default Header