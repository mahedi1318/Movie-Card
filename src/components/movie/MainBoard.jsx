import React from 'react'
import MovieList from './MovieList'

const MainBoard = () => {
  return (
    <>
      <div className="content">
				<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
					<MovieList/>					
				</div>
			</div>
    </>
  )
}

export default MainBoard
