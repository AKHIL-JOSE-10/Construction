import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { Box, CardMedia } from '@mui/material';

import img1 from '../../../../assets/Interior.png';
import img2 from '../../../../assets/AdIcon.png';

const imageData = [
  { img: img1 },
  { img: img2 },
  { img: img1 },
  { img: img2 },
];

const AdvertisementCarousel = () => {
  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        py: 2,
      }}
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={1.2} // shows one card and peeks
        centeredSlides
        spaceBetween={20} // gap between slides
      >
        {imageData.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: 3,
                backgroundColor: '#fff',
                aspectRatio: '18/9',
              }}
            >
              <CardMedia
                component="img"
                image={item.img}
                alt={`Slide ${index}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default AdvertisementCarousel;
