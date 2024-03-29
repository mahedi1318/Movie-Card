
import { getAllImgurl } from '../../utils/MovieUrl'
import Rating from './Rating'
import Tags from "../../assets/tag.svg"
import { useContext, useState } from 'react'
import MovieDetails from '../movie-Details/MovieDetails'
import { MovieContext } from '../../context/Context'

const MovieCard = ({movie}) => {
	const [detailsShowModal, setDetailsShowModal] = useState(false)
	const [selectedMovie, setSelectedMovie] = useState(null)

	const {state, dispatch} = useContext(MovieContext)
	

	const handleMovieDetailsFun = (singleMovie)=>{
		setDetailsShowModal(!detailsShowModal)
		setSelectedMovie(singleMovie)
	}
	
	const handleAddToCard = (e, catchMovie)=>{
		e.stopPropagation()		

		const checkout = state.cartData.find(
			(item) => item.id === catchMovie.id
		)

		if(!checkout){
			dispatch({type: "add_to_card", payload: {
				...catchMovie
			}})
		}
	}

  return (
    <>
	{detailsShowModal && <MovieDetails selectedMovie={selectedMovie} onClose={()=> setDetailsShowModal(!detailsShowModal)}/> }
		
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
			<a onClick={()=>handleMovieDetailsFun(movie)} href="#">
		    <img className="w-full h-[400px] object-cover" src={getAllImgurl(movie.cover)} alt="" />
		    <figcaption className="pt-4">
			    <h3 className="text-xl mb-1">{movie.title}</h3>
			    <p className="text-[#575A6E] text-sm mb-2">{movie.descreption}</p>
			    <Rating rating={movie.rating}/>
			    <button onClick={(e)=> handleAddToCard(e, movie)} className="bg-primary w-full rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
				    href="#">
				    <img src={Tags} alt="" />
				    <span>${movie.price} | Add to Cart</span>
			    </button>
		    </figcaption>
			</a>
	    </figure>
    </>
  )
}

export default MovieCard
