import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Nameslip from '../HomepageChild/Nameslip'
import Herohome from '../HomepageChild/Herohome'
import HomeGrid from '../HomepageChild/HomeGrid'

function HomePage() {
  return (
    <div>
        <NavBar/>
        <Nameslip/>
        <Herohome/>
        <HomeGrid/>
        <Footer/>
      
    </div>
  )
}

export default HomePage
