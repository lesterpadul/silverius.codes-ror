import React, {useState, useEffect, Fragment} from "react";
import { useParams } from "react-router";
import axios from "axios";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

const Airline = function(){
    // - declare variables
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [reviews, setReviews] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [name, setName] = useState("Lester")
    
    // - parameters
    let params = useParams()
    
    // - this function will get all the airlines
    useEffect(()=>{
        // - if has airline, do nothing
        if (Object.keys(airline).length > 0) {
            return false;
        }
        
        // - else get information
        axios
        .get('/api/v1/airlines/' + params['slug'])
        .then(resp => {
            // - set current airline
            setAirline(resp.data)

            // - set loaded to true
            setLoaded(true)

            // - set reviews
            setReviews(resp.data.included)

        })
        .catch(resp => {})
        
    }, [airline])

    // - this function is triggered when the reviews
    useEffect(()=>{
        console.warn('length was updated')
    }, [reviews])
    
    // - handle changes in any of the input fields
    function handleChange(e){
        e.preventDefault()
        review[e.target.name] = e.target.value

        // - set render elements
        setReview(review)
        setName("lester " + Math.random())
    }

    // - handle submit
    function handleSubmit(e){
        e.preventDefault()
        
        // - set airline id
        review['airline_id'] = airline.data.attributes.id
        
        // - else get information
        axios
        .post(
            '/api/v1/reviews/',
            review
        )
        .then(resp => {
            reviews.unshift(resp.data.data)
            setReviews(reviews)
            setName("lester " + Math.random())
        })
        .catch(resp => {})
    }
    
    // - declare empty reviews
    var reviewPartial = "";

    // - if loaded
    if (loaded) {
        reviewPartial = reviews.map(function(item, index){
            return (
                <Review
                    key={item.attributes.id}
                    review={item.attributes} />
            )
        });
    }
    
    // - return template
    return (
        <div> 
            {
                loaded &&
                <Fragment>
                    <div className="row">
                        <div className="col-7">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <ReviewForm 
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                        attributes={airline.data.attributes}
                                        review={review}
                                    />
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    {reviewPartial}
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="card h-100">
                                <Header 
                                    attributes={airline.data.attributes}
                                    reviews={airline.included}/>
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