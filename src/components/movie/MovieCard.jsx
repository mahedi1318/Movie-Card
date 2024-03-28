
import { getAllImgurl } from '../../utils/MovieUrl'
import Rating from './Rating'
import Tags from "../../assets/tag.svg"

const MovieCard = ({movie}) => {
  return (
    <div>
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
		    <img className="w-full object-cover" src={getAllImgurl(movie.cover)} alt="" />
		    <figcaption className="pt-4">
			    <h3 className="text-xl mb-1">{movie.title}</h3>
			    <p className="text-[#575A6E] text-sm mb-2">{movie.descreption}</p>
			    <Rating rating={movie.rating}/>
			    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
				    href="#">
				    <img src={Tags} alt="" />
				    <span>${movie.price} | Add to Cart</span>
			    </a>
		    </figcaption>
	    </figure>
    </div>
  )
}

export default MovieCard
