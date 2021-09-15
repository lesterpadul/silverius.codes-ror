// - this is the react library, along with the scopes we want to use
// - think of this as $scope, $rootScope and etc in angularjs
import React, { useState, useEffect, Fragment } from "react";

// - this is the component for ajax calls
import axios from "axios";

// - this is the component we call Airline
import Airline from "./Airline";

// - airline function
function Airlines(){
    // - declare variables
    const [airlines, setAirlines] = useState([])
    const [name, setName] = useState("")

    // - this function will get all the airlines
    useEffect(()=>{
        // - if has elements, do not render again
        if (airlines.length > 0) {
            return false;
        }
        
        // - update
        axios
            .get('/api/v1/airlines.json')
            .then(resp => {
                setAirlines(resp.data.data)
            })
            .catch(resp => {})
    
    // - this line tell reactjs which variable to look out for.
    // - if you have other variables that you want to look out for, make another useEffect.
    }, [airlines])
    
    // - this function will be triggered when the name is updated.
    useEffect(()=>{
        console.warn('name was changed, bitch')
    }, [name])

    // - create list data
    const grid = airlines.map(function(item, index){
        return (<Airline key={ index } attributes={ item.attributes } />)
    })

    // - trigger change name
    function changeName(){
        setName('Lester')
    }

    // - return rendered view
    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">Shop in style, {name}</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                    </div>
                </div>
            </header>
            <div className="container px-4 px-lg-5 mt-5">
                <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                    {grid}
                </div>
            </div>
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p>
                </div>
            </footer>
        </div>
    )
};

// - export
export default Airlines;