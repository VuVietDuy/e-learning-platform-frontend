import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import './index.scss';
import 'swiper/css';


const Layout2 = () => {
  const listImg = [
    {
      src: "/images/layout2-1.jpg"
    },
    {
      src: "/images/layout2.png"
    },
    {
      src: "/images/layout2-1.jpg"
    },
    {
      src: "/images/layout2.png"
    },
  ]
  return (
    <Swiper
      modules={[Navigation, Autoplay, A11y]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
      loop
      className='swiper-layout2'
    >
      {listImg.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Layout2;
