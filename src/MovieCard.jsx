



export default function MovieCard({ movie, onToggle }) {
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

        {/*movie.id ->   */}
        <button onClick= {() => onToggle(movie.id)}> 
            Click me
        </button>








    </div>
    )
}




