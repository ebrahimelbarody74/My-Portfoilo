import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import img1 from "../../img/profile1.jpg"
import img2 from "../../img/profile2.jpg"
import img3 from "../../img/profile3.jpg"
import img4 from "../../img/profile4.jpg"
import img5 from "../../img/profile5.jpg"
import img6 from "../../img/profile6.jpg"
import "./Testimonials.css"
// import "./swiper/css/pagination"
import "swiper/css"
import "swiper/css/pagination"

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <h2>Clients always get <span>Expectional Work</span> from me....</h2>
        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}>
          <SwiperSlide>
            <div className="box">
              <img src={img1} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi velit, natus quod nesciunt accusamus, nisi laudantium ipsam officia magnam debitis commodi ab eos modi inventore totam eius, perferendis dicta?</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src={img2} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi velit, natus quod nesciunt accusamus, nisi laudantium ipsam officia magnam debitis commodi ab eos modi inventore totam eius, perferendis dicta?</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src={img3} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi velit, natus quod nesciunt accusamus, nisi laudantium ipsam officia magnam debitis commodi ab eos modi inventore totam eius, perferendis dicta?</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src={img4} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi velit, natus quod nesciunt accusamus, nisi laudantium ipsam officia magnam debitis commodi ab eos modi inventore totam eius, perferendis dicta?</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src={img5} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi velit, natus quod nesciunt accusamus, nisi laudantium ipsam officia magnam debitis commodi ab eos modi inventore totam eius, perferendis dicta?</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src={img6} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi velit, natus quod nesciunt accusamus, nisi laudantium ipsam officia magnam debitis commodi ab eos modi inventore totam eius, perferendis dicta?</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="blur" style={{background:"#c1f5ff",top:"5rem",
        width:"21rem",
        height:"11rem",
        left:"10rem"
        }}></div>
    </div>
  )
}

export default Testimonials
