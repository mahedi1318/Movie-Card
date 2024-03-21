import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LeftSidebar from './LeftSidebar'

const HomePage = () => {
  return (
    <>
      <Header/>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <LeftSidebar/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage
