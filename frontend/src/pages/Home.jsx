import React from 'react'
import Hero from '../components/home/Hero'
import Work from '../components/home/Work'
import Nav from '../components/home/Nav'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import Contact from '../components/home/Contact'
import Aboutme from '../components/home/Aboutme'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Work />
        <Contact />
        <Aboutme />
        <Footer />
    </div>
  )
}
export default Home