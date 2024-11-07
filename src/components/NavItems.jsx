import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"
import { AuthContext } from '../contexts/AuthProvider';
import "../assets/css/Navitems.css"





const Navitems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);


    // authinfo 
    const { user,logOut } = useContext(AuthContext);


    window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    })

    const navigate = useNavigate();



    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`} >
{
    user
     ?
     <>
     </>
     :
     <>
     
     <div className={`header-top d-md-none ${socialToggle ? "open" : ""} `}>

<div className='container'>
    <div className="header-top-area">
        <Link to={"/signup"} className='lab-btn me-3'> <span>Create Account</span> </Link>
        <Link to={"/login"}> <span>Log in</span> </Link>
    </div>
</div>
</div>
     </>
}

            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-search-acte">
                            <div className="logo">
                                <Link to={"/"}>
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>

                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/shop"}>Shop</Link></li>
                                    <li><Link to={"/blog"}>Blog</Link></li>
                                    <li><Link to={"/about"}>About</Link></li>
                                    <li><Link to={"/contact"}>Contact</Link></li>
                                </ul>
                            </div>

                            {
                                user
                                    ?
                                    <>

                                        <label class="popup" >
                                            <input type="checkbox" />
                                            <div tabindex="0" class="burger">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="black"
                                                    height="20"
                                                    width="20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <nav class="popup-window">
                                                <legend>{user.email}</legend>
                                                <ul>
                                                   <li>
                                                   <Link to={"/cart-page"} style={{width:"100%"}} >
                                                        <button>
                                                            <span>Cart <i className='icofont-cart'></i></span>
                                                        </button>
                                                    </Link>
                                                    </li>
                                                    <li>
                                                        <button onClick={()=> {logOut().then(()=> {navigate("/login")})}}>
                                                            <span>Log Out</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                   <Link to={"/admin"} style={{width:"100%"}} >
                                                        <button>
                                                            <span>Admin Dashboard <i className='icofont-user'></i></span>
                                                        </button>
                                                    </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </label>

                                    </>
                                    :
                                    <>
                                        <Link to="sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                                        <Link to={"/login"} className='d-none d-md-block'>Log In</Link>
                                    </>
                            }

                            <div onClick={() => { setMenuToggle(!menuToggle) }} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className='ellepsis-bar d-md-none'
                                onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Navitems;