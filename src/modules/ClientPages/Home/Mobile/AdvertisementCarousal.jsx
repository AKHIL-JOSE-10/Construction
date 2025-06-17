import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import img1 from '../../../../assets/AdIcon.png';
import img2 from '../../../../assets/AdIcon.png';
import img3 from '../../../../assets/AdIcon.png';

const AdvertisementCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        height: '170px',
        overflow: 'hidden',
        position: 'relative',
        bgcolor: 'white',
        mx:1
      }}
    >
      {/* Image display */}
      {images.map((img, index) => (
        <Box
          key={index}
          component="img"
          src={img}
          alt={`slide-${index}`}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}

      {/* Circle indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              bgcolor: currentIndex === index ? '#1976d2' : '#ccc',
              transition: 'background-color 0.s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AdvertisementCarousal;