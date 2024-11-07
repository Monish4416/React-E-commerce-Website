import React,{useLayoutEffect, useState} from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags'
import PopularPost from '../shop/PopularPost'



const socialList = [ { iconName: 'icofont-facebook', siteLink: '#', className: 'facebook', }, { iconName: 'icofont-twitter', siteLink: '#', className: 'twitter', }, { iconName: 'icofont-linkedin', siteLink: '#', className: 'linkedin', }, { iconName: 'icofont-instagram', siteLink: '#', className: 'instagram', }, { iconName: 'icofont-pinterest', siteLink: '#', className: 'pinterest', }, ]

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const {id} = useParams()

    const results = blog.filter((b) => b.id === Number(id))

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
      })

  return (
   <>
   <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

   <div className="blog-section blog-single padding-tb section-bg">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
                <article>
                    <div className='section-wrapper'>
<div className="row row-cols-1 justify-content-center g-4">
  <div className="col">
    <div className="post-item style-2">
        <div className="post-inner">
            {
                results.map((item) => (
                    <div key={item.id}>
                        <div className="post-thumb">
                            <img src={item.imgUrl} alt="" className='w-100'/>
                        </div>
                        <div className="post-content">
                            <h3>{item.title}</h3>
                            <div className="meta-post">
                            <ul className='lab-ul'>
{
  item.metaList.map((val,i)=> (
    <li key={i}>
      <i className={val.iconName}></i>
      {val.text}
    </li>
  ))
}
  </ul>
                            </div>
                            <p>{item.desc}. For ecommerce entrepreneurs who want to make the most of their online business, high-quality content full of marketing tips, success stories, lessons learned, and the latest ecommerce trends is essential.</p>

                            <blockquote>
                                <p>Dynamically recaptiualize distributed technologies is wherease turnkey channels and onotonectally provide access to resource leveling expertise vias worldwide deliverables uolisticly extend aserser are diverse vortals.</p>
                                <cite>
                                    <a href="#">...Melissa Hunter</a>
                                </cite>
                            </blockquote>

                            <p>If you’re new to the world of ecommerce, you’re likely hustling to learn about product sourcing, inventory management, marketing automation, running ads, and customer service optimization. Thankfully, the internet is full of wisdom from seasoned experts with proven success. Let’s look at 15 top ecommerce blogs to check out on your way to running a successful online store.The blog is full of practical ecommerce guides to email marketing, conversion optimization, customer success practices, and social marketing. Their Growth Stories are about big brands with proven success — a great resource for inspiration and tips to help you grow your business.They include guides to getting customer reviews and ratings, curating campaigns that increase brand engagement, and building lasting communities for brands.</p>

                            <img src="/images/blog/single/01.jpg" alt="" />
                            <p>Nosto is an AI-powered ecommerce intelligence engine that empowers sellers with their world-class personalization platform. Targeting large merchants focused on explosive growth, Nosto’s ecommerce blog specializes in customer segmentation, data insights, advanced trigger capabilities, ecommerce tips and many other topics that use personalization to enhance both customer experience and sales.</p>

<div className="video-thumb">
<img src="/images/blog/single/02.jpg" alt="" />
<a href="https://youtu.be/6xREgTnEPmQ?feature=shared" className='video-button popup'
target='_blank'
>
<i className="icofont-ui-play"></i>
</a>
</div>

<p>For dropshippers, the Oberlo blog is one of the most credible and informative resources out there. Unlike other types of ecommerce businesses, dropshipping requires regularly updated insights on trending products, social media advertising, and conversion optimization.</p>

<div className="tags-section">
    <ul className="tags lab-ul">
        <li>
            <a href="#">Agency</a>
        </li>
        <li>
            <a href="#">Business</a>
        </li>
        <li>
            <a href="#">Personal</a>
        </li>
    </ul>
    <ul className='lab-ul social-icons'>
    {
socialList.map((val,i)=> (
<li key={i}>
    <a href="#" className={val.className}>
        <i className={val.iconName}></i>
    </a>
</li>
))
    }
    </ul>
</div>

                        </div>

                    </div>
                ))
            }
        </div>
    </div>

    <div className="navigations-part">
        <div className="left">
            <a href="#" className='prev'>
                <i className='icofont-double-left'></i> Previous Blog
            </a>
            <a href="#" className='title'>
            The E-Commerce Nation blog collaborates with seasoned industry experts to include content like infographics, webinars, live interviews, and podcasts.
            </a>
        </div>
        <div className="right">
            <a href="#" className='prev'>
                 Next Article <i className='icofont-double-right'></i>
            </a>
            <a href="#" className='title'>
            E-Commerce Nation is a collaborative community dedicated to helping ecommerce business owners on an international scale.
            </a>
        </div>
    </div>
    </div>  

</div>
                    </div>
                </article>
            </div>

            <div className="col-lg-4 col-12">
<aside>
    <Tags />
    <PopularPost />
</aside>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default SingleBlog;