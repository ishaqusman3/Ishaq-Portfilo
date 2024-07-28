import React from 'react'
import { Link } from 'react-router-dom'
import Pic from '../Components/Pic'
import './pages.css'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='home'>
        <div className="name-container">
            <h1>Hi... <br /> I'm <br />Ishaq Usman</h1>
            <h3>&lt;Full stack developer / <br /> MERN stack developer&gt;</h3>
            <h4>Ready for remote jobs </h4>
          <h3>Contact me <Link id='link-class' to='/Contact'>< FaArrowAltCircleRight/></Link></h3>
        </div>
        <Pic />
    </div>
  )
}

export default Home