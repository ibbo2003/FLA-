import MovieCard from "./MovieCard";
import on from "../assets/on.jpg"
import type { MovieCardprops } from "../types/movie";
function MovieCardList(){

    const MovieList : MovieCardprops [] =[
        {
            title : "Avatar the way of life",
            poster : on,
            rating : 9.5,
            overview : "The most expensive cgi ever used in a movie",
        },
        {
            title : "Avatar the way of life",
            poster : on,
            rating : 9.5,
            overview : "The most expensive cgi ever used in a movie",
        },
        {
            title : "Avatar the way of life",
            poster : on,
            rating : 9.5,
            overview : "The most expensive cgi ever used in a movie",
        },
        {
            title : "Avatar the way of life",
            poster : on,
            rating : 9.5,
            overview : "The most expensive cgi ever used in a movie",
        }
    ]


    return(
        <div className="container bg-dark text-light ">

            <h1>
                Movies 
            </h1>
            <div className="card-container">
                {MovieList.map((movie)=>(
                    <MovieCard 
                        title={movie.title}
                        poster={movie.poster}
                        rating={movie.rating}
                        overview={movie.overview}
                    />
                ))}
            </div>

        </div>
    );

}
export default MovieCardList;