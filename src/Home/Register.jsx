import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'




const subTitle = "Save The Day";
const title = (
    <h2 className='title'>Join on Day Long Free workshop for <b>Advance <span style={{color:"yellow"}}>Mastering</span></b> on Sales</h2>
)
const desc = "Limited Time Offer! Hurry Up";
const Register = () => {
    useEffect(()=>{
        AOS.init();
    },[])
  return (
    <>
    <div className="register-section padding-tb pb-0">
        <div className="container">
            <div className="row g-4 row-cols-lg-2 row-cols-1 align-item-center">
                <div className="col" data-aos="fade-right" data-aos-duration="1000">
                    <div className="section-header">
                        <span className='subtitle'>{subTitle}</span>
                        {title}
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="col"  data-aos="fade-left" data-aos-duration="1000">
                    <div className="section-wrapper">
                        <h4>Register Now</h4>
                        <form className='register-form'>
                            <input type="text" name="name" placeholder='Username' className='reg-input' />
                            <input type="email" name="name" placeholder='Email' className='reg-input' />
                            <input type="number" name="name" placeholder='Phone' className='reg-input' />
                            <button type="submit" className='lab-btn'>
                                Register Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register;