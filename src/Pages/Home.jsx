import React from 'react'
import { Link } from 'react-router-dom'
import Pic from '../Components/Pic'
import './pages.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="name-container">
            <h1>Ishaq Usman</h1>
            <h3>&lt;Full stack Developer&gt;</h3>
        </div>
        <Pic />
    </div>
  )
}

export default Home