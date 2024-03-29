import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import LeftSidebar from './LeftSidebar'
import MainBoard from '../movie/MainBoard'
import { ThemContext } from '../../context/Context'

const HomePage = () => {
  const {darkMode} = useContext(ThemContext)
  return (
    <>
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header/>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <LeftSidebar/>
            <MainBoard/>
        </div>
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default HomePage
