
import Logo from "../../assets/logo.svg"
import Shoppingcart from "../../assets/shopping-cart.svg"
import Sun from "../../assets/icons/sun.svg"
import Moon from "../../assets/icons/moon.svg"
import Ring from "../../assets/ring.svg"
import { useContext, useState } from "react"
import { MovieContext, ThemContext } from "../../context/Context"
import CardAddHeader from "../addCard/CardAddHeader"


const Header = () => {

		const {state} = useContext(MovieContext)
		const {darkMode, setDarkMode} = useContext(ThemContext)
		
		const [showCard, setShowCard] = useState(false)

		const handleCardShow = () =>{
			setShowCard(!showCard)
		}

  return (
    <>
	{showCard && <CardAddHeader onClose={()=> setShowCard(!showCard)}/>}
	
    <header>
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<a href="index.html">
				<img src={Logo} width="139" height="26" alt="" />
			</a>

			<ul className="flex items-center space-x-5">
				<li>
					<a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={Ring} width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a onClick={()=> setDarkMode((darkMode)=> !darkMode)} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={darkMode ? Sun : Moon} width="24" height="24" alt="" />
					</a>
				</li>
				<li>
					<a onClick={handleCardShow} className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
						<img src={Shoppingcart} width="24" height="24" alt="" />
						{state.cartData.length > 0 && (
							<span className="absolute top-[-10px] left-[25px] bg-yellow-600 w-[25px] h-[25px] rounded-full text-center">{state.cartData.length}</span>
						)}
					</a>
				</li>
			</ul>
		</nav>
	</header>
    </>
  )
}

export default Header
