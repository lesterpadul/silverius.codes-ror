import React, {useState, useEffect, Fragment} from "react";
import { useParams } from "react-router";
import axios from "axios";
import Header from "./Header";
import ReviewForm from "./ReviewForm";

const Airline = function(){
    // - declare variables
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)
    
    // - parameters
    let params = useParams()
    
    // - this function will get all the airlines
    useEffect(()=>{
        // - if has airline, do nothing
        if (Object.keys(airline).length > 0) {
            return console.warn("nothing to fetch")
        }
        
        // - else get information
        axios
        .get('/api/v1/airlines/' + params['slug'])
        .then(resp => {
            // - set current airline
            setAirline(resp.data.data)

            // - set loaded to true
            setLoaded(true)
            
            // - set review id
            review['airline_id'] = airline.attributes.id
            setReview(review)
            
        })
        .catch(resp => {})
        
    }, [airline])
    
    function handleChange(e){
        e.preventDefault()
        review[e.target.name] = e.target.value
        setReview(review)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.warn("form was submitted")
    }
    
    return (
        <div> 
            {
                loaded &&
                <Fragment>
                    <div className="row">
                        <div className="col-7 mb-4">
                            <ReviewForm 
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                attributes={airline.attributes}
                                review={review}
                            />
                        </div>
                        <div className="col-5 mb-4">
                            <div className="card h-100">
                                <Header 
                                    attributes={airline.attributes}
                                    reviews={airline.relationships.reviews}/>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
            {
                !loaded &&
                <Fragment>
                    <div className="row">
                        <div className="col-12 mb-4">
                            Loading Assets
                        </div>
                    </div>
                </Fragment>
            }
        </div>
    )
};

export default Airline;