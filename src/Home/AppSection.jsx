import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

const btnText = "Sign Up for Free";
const title = "Shop Anytime, Anywhere";
const desc = "Take shop on your any device with our app & learn all time what you want, Just download & install & start to learn"

const AppSection = () => {
    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <>
    <div className="app-section padding-tb">
        <div className="container">
            <div className="section-header text-center" >
                <Link to={"/sign-up"} className='lab-btn mb-4'>{btnText}</Link>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>

            </div>
            <div className="section-wrapper">
                <ul className="lab-ul">
                    <li data-aos="fade-right" data-aos-duration="1000"><a href="#"><img src="images/app/01.jpg" alt="" /></a></li>
                    <li data-aos="fade-left" data-aos-duration="1000"><a href="#"><img src="images/app/02.jpg" alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default AppSection;