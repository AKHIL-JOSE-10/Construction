import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

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
        pt: 2,
        maxWidth: 1000,
      }}
    >
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
        style={{ paddingBottom: '10px' }}
      >
        {imageData.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              className="slide-box"
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                backgroundColor: '#fff',
                aspectRatio: '18/9',
                transform: 'scale(0.85)',
                transition: 'transform 0.4s ease-in-out',
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
