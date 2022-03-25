import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const slidImage = [
  {
    id: 1,
    image: '/images/banner1.jpg',
  },
  {
    id: 2,
    image: '/images/banner2.jpg',
  },
  {
    id: 3,
    image: '/images/banner3.jpg',
  },
  {
    id: 4,
    image: '/images/banner4.jpg',
  },
];

export default function Slider() {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {slidImage.map((slide) => (
        <SwiperSlide className="h-96" key={slide.id}>
          <img
            className="h-full w-full object-cover"
            src={slide?.image}
            alt="Slide"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
