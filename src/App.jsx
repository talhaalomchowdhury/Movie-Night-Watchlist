import { useState } from 'react'
import './App.css'
import MovieCard from './MovieCard.jsx'



const initialMovies = [
  { id: 1, title: "The Matrix",                         genre: "Sci-Fi",    year: 1999, watched: false },
  { id: 2, title: "Parasite",                           genre: "Thriller",  year: 2019, watched: false },
  { id: 3, title: "Everything Everywhere All at Once",  genre: "Sci-Fi",    year: 2022, watched: true  },
  { id: 4, title: "Knives Out",                         genre: "Mystery",   year: 2019, watched: false },
  { id: 5, title: "Coco",                               genre: "Animation", year: 2017, watched: true  },
  { id: 6, title: "Get Out",                            genre: "Horror",    year: 2017, watched: false },
]



// main
export default function App() {







  // state, initial value
  const [movies, setMovies] = useState(initialMovies);

  const toggleWatched = (id) => {
  const updatedMovies = movies.map((movie) => {
    
      if(movie.id === id) {
        //make new object and store value
        return {...movie, watched: !movie.watched};
      }
      return movie;
    });

    //change movie
    setMovies(updatedMovies)
  }





const totalMovies = movies.length
const totalWatched = movies.filter(movie => {
  return movie.watched === true
})
const notWatched = movies.filter(movie=> {
   return movie.watched === false
   })




  return (
    <div>

      <h1> Movie Night</h1>
      <p> Total Movies: {totalMovies} </p>
      <p> Total Movies Watched: {totalWatched.length} </p>
      <p> Total Movies Unwatched: {notWatched.length}</p>

      {movies.map((movie) => (


        //reference from moviecard.jsx function
        <MovieCard
        key= {movie.id} 
        movie ={movie}
        onToggle= {toggleWatched}
        />
      ))}
  
        </div>
  )
}




