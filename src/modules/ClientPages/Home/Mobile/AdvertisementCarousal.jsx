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
        height: '31vh',
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
            height: '175px',
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
          bottom: 20,
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
              width: 8,
              height: 8,
              bgcolor: currentIndex === index ? '#D2B48C' : '#ccc',
              transition: 'background-color 0.s ease',
              borderRadius:"50%"
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AdvertisementCarousal;