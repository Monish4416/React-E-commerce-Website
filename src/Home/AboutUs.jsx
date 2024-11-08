import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'



const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
    {
        iconName: 'icofont-users-alt-4',
        count: '12600',
        text: 'Marchant Enrolled',
    },
    {
        iconName: 'icofont-graduate-alt',
        count: '30',
        text: 'Certified Courses',
    },
    {
        iconName: 'icofont-notification',
        count: '100',
        text: 'Rewards and GitCards',
    },
]
const AboutUs = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <>
            <div className="instructor-section style-2 padding-tb section-bg-ash">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row g-4 justfiy-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3" style={{margin:"0 auto"}}>
                            <div className="col" data-aos="fade-right" data-aos-duration="1000">

                                {
                                    countList.map((val,i)=>(
                                        <div key={i} className='count-item'>
                                            <div className="count-inner">
                                                <div className="count-icon">
                                                    <i className={val.iconName}></i>
                                                </div>
                                                <div className="count-content">
                                                    <h2>
                                                        <span className='count'><CountUp end={val.count}/></span>
                                                        <span>+</span>
                                                    </h2>
                                                    <p>{val.text}</p>
                                                </div>
                                                </div>    
                                        </div>
                                    ))    
                                }

                            </div>
                            <div className="col" data-aos="fade-left" data-aos-duration="1000" >
                                <div className="instructor-content">
                                    <p className='subtitle'>{subTitle}</p>
                                    <h2 className='title'>{title}</h2>
                                    <p>{desc}</p>
                                    <Link to={"/sign-up"} className='lab-btn'>{btnText}</Link>
                                </div>
                            </div>
                            <div className="col" style={{margin:"0 auto"}}  data-aos="zoom-in" data-aos-duration="1000">
                                <div className="instructor-thumb">
                                    <img src="images/instructor/01.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;