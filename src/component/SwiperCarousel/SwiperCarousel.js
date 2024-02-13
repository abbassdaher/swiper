import React, { Children } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./swiper.css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function SwiperCarousel({children, data}) {
    const child = data.map((el)=>{
        return React.cloneElement(children, {
            item: el,
            key: el.id,
        })
    })
    return (

        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}

            >
                <SwiperSlide>{child}</SwiperSlide>

            </Swiper>
        </div>

    )
}

export default SwiperCarousel