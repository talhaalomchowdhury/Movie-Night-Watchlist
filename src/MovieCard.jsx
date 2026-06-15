import { createElement } from "react";


export default function MovieCard({ movie }) {
    let status = ""
    if(movie.watched) {
        status = "Watched"
    } else {
        status = "Not watched yet"
    }


    return (
     <div key= {movie.id}>
        <h3>{movie.title}</h3>
        <p> {movie.genre} {movie.year}</p>
        <p> Status: {status} </p>
    </div>
    )
}




