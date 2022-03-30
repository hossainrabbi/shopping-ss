import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
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
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper"
    >
      {slidImage.map((slide) => (
        <SwiperSlide className="h-96 aspect-square" key={slide.id}>
          <img className="cover__img" src={slide?.image} alt="Slide" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
