import './Components.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets//IMG-20240430-WA0012(1).jpg'
import { useState } from 'react'



export const Header = () => {
  const [activeLink, setActiveLink] = useState('')
  const handleClick = (pathname)=>{
    setActiveLink(pathname)
    // console.log(pathname)
    // console.log(activeLink)
  }
  return (
    <header>
        {/* <img src= {logo} alt="profile" className='logo'/> */}
        <nav>
            <ul  className='nav-container'>
                <li><NavLink to= '/' id='link-class'className={({isActive})=> isActive || activeLink === '/' ? 'underline' : ''} onClick={() =>handleClick('/')}>Home</NavLink></li>
                {/* <li><NavLink to= '/' id='link-class'className={'underline'}>Home</NavLink></li> */}
                <li><NavLink to= '/Projects'id='link-class'className={({isActive})=> isActive || activeLink === '/Projects' ? 'underline' : ''} onClick={() =>handleClick('/Projects')}>Projects</NavLink></li>
                <li><NavLink to= '/Contact'id='link-class'className={({isActive})=> isActive || activeLink === '/Contact' ? 'underline' : ''} onClick={() =>handleClick('/Contact')}>Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
