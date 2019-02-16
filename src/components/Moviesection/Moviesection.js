import React from "react";
import "./Moviesection.css"
import "../Search/Movies/Movies.css"
import Moviesquare from "../Moviesquare/Moviesquare";
import {Link} from "react-router-dom";


const Moviesection = ({movies, title}) => {
    if(!movies){
        return(
            <h2>loading</h2>
        )
    }else{
    const listOfMovies = movies.map((val, idx) => {
        return (
        <Link to={`movie/${val.id}`}>
        <Moviesquare key={val.id}image={val.poster_path} rating={val.vote_average}/>
        </Link>
        )
    })
    return(

        <section>
            <h2>{title}</h2>
                <div className="movie_container">
                    <div className="slider">
                        {listOfMovies}
                    </div>
                </div>
        </section>
        )
    }
}

export default Moviesection;
