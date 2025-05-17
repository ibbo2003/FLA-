import type { MovieCardprops } from "../types/movie";

function MovieCard(props:MovieCardprops){

    return(
        <div className="card  mb-4 d-flex flex-column border border-warning" style={{width: '18rem'}}>
            <img src={props.poster} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4>{props.title}</h4>
                    <p className="card-text">
                        <span className="text-warning">rating : {props.rating}/10</span><br />
                        <span>overview : {props.overview}</span>
                    </p>
            </div>
        </div>   
    );
}
export default MovieCard;