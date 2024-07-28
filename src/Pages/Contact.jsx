import React from 'react'
// import ishaq from '../assets/ishaq.jpg'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'



export const Contact = () => {
  return (
    <div>
      <div className="contact">
        <img className='pic-logo'src="https://i.ibb.co/Hxfq5qz/ishaq.jpg" alt="" />
        <p className="name">Ishaq Usman</p>
        <p className='address '>ishaquusmanu3@gmail.com || +2348129471676 <br />Department of Software Engineering, <br />Faculty of Computing, <br /> Bayero University Kano.</p>
        <div className="icons">
          <a href='http://wa.me/+2348129471676' target='blank' ><FaWhatsapp className="icon" /></a>
          <a href='http://www.facebook.com/BiinUthmaan' target='blank' ><FaFacebook className="icon" /></a>
          <a href="http://hithub.com/ishaquusmanu3"target='blank'><BsGithub className="icon"/></a>
          <a href="http://x.com/N_Ghostz?s=09"target='blank'><BsTwitterX className="icon"/></a>
          <a href="http://instagram.com/ishaqibnuthman"target='blank'><BsInstagram className="icon"/></a>
          <a href="https://www.linkedin.com/in/%20ishaq-usman-4b0487293"target='blank'><BsLinkedin className="icon"/></a>
        </div>
      </div>
    </div>
  )
}
