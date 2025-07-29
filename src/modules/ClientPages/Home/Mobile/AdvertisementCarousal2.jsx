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

const AdvertisementCarousal2 = () => {
  return (
    <Box sx={{ width: '100%', py: 1, pb: 2 }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={1} // 
        centeredSlides={false}
        spaceBetween={10}
      >
        {imageData.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                transition: 'all 0.4s ease',
                transform: 'scale(0.95)',
                height: 'auto',
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: 1,
                backgroundColor: '#f5f5f5',
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

export default AdvertisementCarousal2;
