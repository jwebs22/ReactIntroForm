import React from "react";
import { Link } from "react-router-dom";

//add navbar
const HomePage = () => {

    return (

        <div>
            <h1>Movie List Home Page</h1>

            <p>
            <Link to="/MovieList">See Movie List</Link>
            </p>
        </div>
    );
}

export default HomePage;