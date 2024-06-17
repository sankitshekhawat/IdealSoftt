import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbBrandYoutube } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";



const BlogSection = () => {
  return (
    <>
        <section class="blog-wrapper news-wrapper section-padding border-bottom">
    <div class="container">
      <div class="news-area">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="blog-posts">
              <div class="single-blog-post">
                <div class="post-featured-thumb bg-cover" style={{backgroundImage: `url('../img/news/post-1.jpg')`}}>
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span><FaRegCalendarAlt/>35 Comments</span>
                    <span><BiComment/>24th March
                      2024</span>
                  </div>
                  <h2>
                    <a href="news-details.html" className='teamblog text-black'>
                      Curabitur at fermentum purus. Interdum et malesuada
                      fames ac ante ipsum
                    </a>
                  </h2>
                  <a href="news-details.html" class="theme-btn mt-4">READ MORE</a>
                </div>
              </div>
              <div class="single-blog-post">
                <div class="post-featured-thumb bg-cover" style={{backgroundImage: `url('../img/news/post-2.jpg')`}}>
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span><FaRegCalendarAlt/>35 Comments</span>
                    <span><BiComment/>24th March
                      2024</span>
                  </div>
                  <h2>
                    <a href="news-details.html" className='teamblog text-black'>
                      Industrial, or professional endeavors. These entities
                      are typically organized
                    </a>
                  </h2>
                  <a href="news-details.html" class="theme-btn mt-4">READ MORE</a>
                </div>
              </div>
              <div class="single-blog-post">
                <div class="post-featured-thumb bg-cover" style={{backgroundImage: `url('../img/news/post-3.jpg')`}}>
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span><FaRegCalendarAlt/>35 Comments</span>
                    <span><BiComment/>24th March
                      2024</span>
                  </div>
                  <h2>
                    <a href="news-details.html" className='teamblog text-black'>
                      The concept of smart devices and the <br/>
                      Internet of Things (IoT)
                    </a>
                  </h2>
                  <a href="news-details.html" class="theme-btn mt-4">READ MORE</a>
                </div>
              </div>
              <div class="single-blog-post quote-post format-quote">
                <div class="post-content text-white bg-cover">
                  <div class="quote-content">
                    <div class="icon">
                      <FaQuoteLeft/>
                    </div>
                    <div class="quote-text">
                      <h2>
                        Excepteur sint occaecat cupida tat non proident, sunt in.
                      </h2>
                      <div class="post-meta">
                        <span><BiComment/>35 Comments</span>
                        <span><FaRegCalendarAlt/>24th March
                          2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="page-nav-wrap mt-5 text-center">
              <ul>
                <li>
                  <a class="page-numbers" href="#"><FaArrowLeftLong/></a>
                </li>
                <li><a class="page-numbers" href="#">01</a></li>
                <li><a class="page-numbers" href="#">02</a></li>
                <li><a class="page-numbers" href="#">..</a></li>
                <li><a class="page-numbers" href="#">10</a></li>
                <li><a class="page-numbers" href="#">11</a></li>
                <li>
                  <a class="page-numbers" href="#"><FaArrowRightLong/></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="main-sidebar">
              <div class="single-sidebar-widget">
                <div class="wid-title">
                  <h3>Search</h3>
                </div>
                <div class="search_widget">
                  <form action="#">
                    <input type="text" placeholder="Keywords here...."/>
                    <button type="submit">
                    <FaSearch/>
                    </button>
                  </form>
                </div>
              </div>
              <div class="single-sidebar-widget">
                <div class="wid-title">
                  <h3>Popular Feeds</h3>
                </div>
                <div class="popular-posts">
                  <div class="single-post-item">
                    <div class="thumb bg-cover" style={{backgroundImage: `url('../img/news/pp1.jpg')`}}></div>
                    <div class="post-content">
                      <h5>
                        <a href="news-details.html" className='teamblog text-black'>Keep your business safe and ensure high</a>
                      </h5>
                      <div class="post-date">
                      <FaRegCalendarAlt/>24th March 2024
                      </div>
                    </div>
                  </div>
                  <div class="single-post-item">
                    <div class="thumb bg-cover" style={{backgroundImage: `url('../img/news/pp2.jpg')`}}></div>
                    <div class="post-content">
                      <h5>
                        <a href="news-details.html" className='teamblog text-black'>We’ve been a strategy thought leader for nearly</a>
                      </h5>
                      <div class="post-date">
                      <FaRegCalendarAlt/>25th March 2024
                      </div>
                    </div>
                  </div>
                  <div class="single-post-item">
                    <div class="thumb bg-cover" style={{backgroundImage: `url('../img/news/pp3.jpg')`}}></div>
                    <div class="post-content">
                      <h5>
                        <a href="news-details.html" className='teamblog text-black'>This week’s top stories and about It</a>
                      </h5>
                      <div class="post-date">
                      <FaRegCalendarAlt/>26th March 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-sidebar-widget">
                <div class="wid-title">
                  <h3>Categories</h3>
                </div>
                <div class="widget_categories">
                  <ul>
                    <li>
                      <a href="news.html" className='teamblog text-black'>Cloud Service <span>23</span></a>
                    </li>
                    <li>
                      <a href="news.html" className='teamblog text-black'>Web Development <span>24</span></a>
                    </li>
                    <li>
                      <a href="news.html" className='teamblog text-black'>Ui/Ux Designing <span>11</span></a>
                    </li>
                    <li>
                      <a href="news.html" className='teamblog text-black'>IT Management <span>05</span></a>
                    </li>
                    <li>
                      <a href="news.html" className='teamblog text-black'>Data Visualization <span>06</span></a>
                    </li>
                    <li>
                      <a href="news.html" className='teamblog text-black'>Security System <span>10</span></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="single-sidebar-widget">
                <div class="wid-title">
                  <h3>Never Miss News</h3>
                </div>
                <div class="social-link">
                  <a href="#"><FaFacebook/></a>
                  <a href="#"><FaTwitter/></a>
                  <a href="#"><BsInstagram/></a>
                  <a href="#"><FaLinkedin/></a>
                  <a href="#"><TbBrandYoutube/></a>
                </div>
              </div>
              <div class="single-sidebar-widget">
                <div class="wid-title">
                  <h3>Popular Tags</h3>
                </div>
                <div class="tagcloud">
                  <a href="news.html" className='teamblog text-black'>IT Technology</a>
                  <a href="news-details.html" className='teamblog text-black'>Software</a>
                  <a href="news-details.html" className='teamblog text-black'>Design</a>
                  <a href="news-details.html" className='teamblog text-black'>Service</a>
                  <a href="news-details.html" className='teamblog text-black'>Development</a>
                  <a href="news-details.html" className='teamblog text-black'>Digital</a>
                  <a href="news-details.html" className='teamblog text-black'>Cyber</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default BlogSection