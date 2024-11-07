import React, { useState } from 'react'
import Ratting from "../components/Ratting"

const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

const Review = () => {
    const [reviewShow,setReviewShow] = useState(true);
  return (
    <>
    <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
       <li className='desc' onClick={()=> setReviewShow(!reviewShow)}>Description</li> 
       <li className='rev' onClick={()=> setReviewShow(!reviewShow)}>Reviews 4</li> 
    </ul>

    <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>

        <div className="review-showing">
            <ul className="content lab-ul">
                {
                    ReviewList.map((review,i)=> (
                        <li key={i}>
                            <div className='post-thumb'>
                                <img src={review.imgUrl} alt="" />
                            </div>
                            <div className="post-content">
                                <div className="entry-meta">
                                    <div className="posted-on">
                                        <a href="#">{review.name}</a>
                                        <p>{review.date}</p>
                                    </div>
                                </div>
                                <div className="entry-content">
                                    <p>{review.desc}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="client-review">
                <div className="review-form">
                    <div className="review-title">
                        <h5>{reviwtitle}</h5>
                    </div>

                    <form action="action" className='row'>
                        <div className="col-md-4 col-12">
                            <input type="text" name='name' id='name' placeholder='Your name *' />
                        </div>
                        <div className="col-md-4 col-12">
                            <input type="email" name='email' id='email' placeholder='Your email *' />
                        </div>
                        <div className="col-md-4 col-12">
                            <div className='rating'>
                                <span className='me-2'>Your Rating</span>
                                <Ratting />
                            </div>
                        </div>
                        <div className="col-md-12 col-12">
                            <textarea name="message" id="message" rows={"8"} placeholder="TypeHereReview...." ></textarea>
                        </div>
                        <div className="col-12">
                            <button type='submit' className='default-button'>
                                <span>Submit Review</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cupiditate quae, quidem, eos dicta consectetur qui praesentium cum, natus consequatur aspernatur corrupti alias minus. Quibusdam vel suscipit debitis nam aliquid tempora ipsa expedita reprehenderit corrupti. Culpa, exercitationem nesciunt non, qui aut fugiat blanditiis voluptatum neque, voluptates ipsum eos odit. Ipsum enim similique eveniet dolores ratione odio, perspiciatis quod, optio inventore consectetur sunt minus consequatur qui aliquam sit dolorem voluptatum perferendis rerum nostrum nemo ullam. Velit repudiandae voluptatibus nemo doloribus reiciendis impedit tenetur, nesciunt corporis vel, officiis error reprehenderit labore est fugit? Eum beatae, facilis enim fugit aperiam libero nesciunt qui!</p>

            <div className="post-item">
                <div className="post-thumb">
                    <img src="/images/shop/01.jpg" alt="" />
                </div>
                <div className="post-content">
                    <ul className="lab-ul">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quae!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quae!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quae!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quae!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quae!</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quae!</li>
                    </ul>
                </div>
            </div>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum cupiditate, obcaecati iste minima perferendis illo tempore! Necessitatibus voluptatem illo itaque error. Cupiditate suscipit expedita natus hic facilis ducimus labore perspiciatis culpa, possimus architecto consectetur! Voluptates sapiente, fuga ut reiciendis magni ex nesciunt ducimus dolorem officia corporis laborum minima ipsum voluptate dolor accusamus! Alias nemo et ipsam excepturi sequi eum non!</p>
        </div>

    </div>
    </>
  )
}

export default Review;