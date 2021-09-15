import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Airline = function(props){
    let URL = "/airlines/" + props.attributes.id;
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={props.attributes.image_url} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.attributes.name}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                        </div>
                        <span className="text-muted">{props.attributes.avg_score}</span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href={URL}>VIEW PRODUCT
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Airline