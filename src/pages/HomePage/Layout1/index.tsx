import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, A11y, Navigation} from 'swiper/modules'
import "swiper/scss";

import './index.scss';
import Card from '../../../components/Card';
import CardHorizontal from '../../../components/CardHorizontal';



const Layout1 = () => {

  const listCard = [
    {
        src:"/images/card.png",
        time:"1h 20p",
        title:"Photoshop Advance: Retouching with Master of Photoshop (2023) ...",
        instructor:"Duy Vu",
        star:"4/5",
        currentPrice:"80$",
        defaultPrice:"100$",
        viewer:"(1,000,000)",
    },
    {
        src:"/images/card1.png",
        time:"1h 20p",
        title:"Photoshop Advance: Retouching with Master of Photoshop (2023) with Master of Photoshop (2023)",
        instructor:"Duy Vu",
        star:"4/5",
        currentPrice:"80$",
        defaultPrice:"100$",
        viewer:"(1,000,000)",
    },
    {
        src:"/images/card2.png",
        time:"1h 20p",
        title:"Photoshop Advance: Retouching with Master of Photoshop (2023) ...",
        instructor:"Duy Vu",
        star:"4/5",
        currentPrice:"80$",
        defaultPrice:"130$",
        viewer:"(150,000)",
    },
    {
        src:"/images/card.png",
        time:"1h 20p",
        title:"Photoshop Advance: Retouching with Master of Photoshop (2023) ...",
        instructor:"Jacod Andree",
        star:"4/5",
        currentPrice:"50$",
        defaultPrice:"120$",
        viewer:"(1,000,000)",
    },
    {
      src:"/images/card.png",
      time:"1h 10p",
      title:"Photoshop Advance: Retouching with Master of Photoshop (2023) ...",
      instructor:"Jacod Andree",
      star:"4/5",
      currentPrice:"50$",
      defaultPrice:"120$",
      viewer:"(1,000,000)",
  },
  {
    src:"/images/card.png",
    time:"1h 40p",
    title:"Photoshop Advance: Retouching with Master of Photoshop (2023) ...",
    instructor:"Jacod Andree",
    star:"4/5",
    currentPrice:"50$",
    defaultPrice:"120$",
    viewer:"(1,000,000)",
}
]
  return (
    <div className='layout1-container'>
        <p className='title'>Welcome back Mickey Mouse, ready for your next lesson?</p>
        <CardHorizontal
          src='/images/card.png'
          lession="Lession 1"
          time="1h20m"
          title="Rigid bode"
          instructor="Auther"
        ></CardHorizontal>
        <Swiper
        modules={[Navigation,Autoplay, A11y]}
        slidesPerView={4}
        spaceBetween={20}
        loop
        className='swiper-layout1'
        >
        {listCard.map((card, index) => (
            <SwiperSlide>
            <Card
            src={card.src}
            time={card.time}
            title={card.title}
            instructor={card.instructor}
            star={card.star}
            currentPrice={card.currentPrice}
            defaultPrice={card.defaultPrice}
            viewer={card.viewer}
            key={index}
            ></Card>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default Layout1;
