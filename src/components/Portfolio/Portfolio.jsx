import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import "./Portfolio.css"
import side from "../../img/sidebar.png"
import hoc from "../../img/hoc.png"
import musicapp from "../../img/musicapp.png"
import ecommerce from "../../img/ecommerce.png"
import "swiper/css"

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <h1>Recent project <br/> <span>Portfolio</span></h1>
        <Swiper spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="Portfolio-slider"
        >
            <SwiperSlide>
                <img src={side} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={musicapp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
