import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../../assets/Interior.png';
import img2 from '../../../../assets/AdIcon.png';

import { Card, CardMedia, Box, GlobalStyles } from '@mui/material';

const imageData = [
  { img: img1 },
  { img: img2 },
];

const AdvertisementCarousal = () => {
  return (
    <>
      {/* Global CSS to fix pagination position */}
      <GlobalStyles
        styles={{
          '.ad-swiper .swiper-pagination': {
            position: 'static',
            textAlign: 'center',
          },
        }}
      />

      <Box sx={{ width: '95%', margin: 'auto', mt: 4 }}>
        <Swiper
          className="ad-swiper"
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
        >
          {imageData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ borderRadius: 2, mb: 1 }}>
                <CardMedia component="img"  image={item.img} />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default AdvertisementCarousal;
