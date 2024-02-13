import React, { Children } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./swiper.css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function SwiperCarousel({ children, data }) {
    const child = data.map((el) => {return(<SwiperSlide>{React.cloneElement(children, {
            item: el,
            key: el.id,
        })}</SwiperSlide>)
        

    })
    return (

        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                // navigation
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
                // pagination={{ clickable: true }}
            >
                {child}
            </Swiper>
        </div>

    )
}

export default SwiperCarousel