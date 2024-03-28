import Stars from "../../assets/star.svg"

const Rating = ({rating}) => {   

    const star = (Array(rating).fill(Stars))
    
  return (
    <>
    <div className="flex items-center space-x-1 mb-5">
        {star?.map((star, index)=> <img key={index} src={Stars} width="14" height="14" alt="" />	)}
			
	</div>
    </>
  )
}

export default Rating
