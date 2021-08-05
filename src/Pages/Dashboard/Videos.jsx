import React,{Fragment} from "react"
import VideoCard from "./Card/VideoCard"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Trendings = ()=>{

	return(
      <Fragment>
        <h2 className="text--white mx-2">Videos</h2>
         <div className="cards carousel-cards">
		        <Swiper
                spaceBetween={10} 
                // slidesPerView={2}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                className="cards carousel-cards "
                breakpoints={{
                // when window width is >= 640px
                640: {
                width: 640,
                slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                width: 768,
                slidesPerView: 2,
                },
            }}
          >
            <SwiperSlide><VideoCard/></SwiperSlide>
            <SwiperSlide><VideoCard/></SwiperSlide>
            <SwiperSlide><VideoCard/></SwiperSlide>
            <SwiperSlide><VideoCard/></SwiperSlide>
    </Swiper>  
	       </div>
	 
      </Fragment>
	)
}

export default Trendings