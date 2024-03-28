import React from 'react'
import MovieCard from './MovieCard'
import { getAllDataMovie } from '../../data/MovieData'

const MovieList = () => {
  const data = getAllDataMovie()  
  return (
    <>
    {
      data?.map((movie)=> <MovieCard key={movie.id} movie={movie}/>)
    }
      
    </>
  )
}

export default MovieList
