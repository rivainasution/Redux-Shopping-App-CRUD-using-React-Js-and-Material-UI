import { Box } from '@mui/material';
import React from 'react';

const Card = ({ children, sx, ...props }) => {
  return (
    <Box
      sx={[
        {
          borderRadius: '10px',
          p: '  px',
          bgcolor: 'white',
          border: 1,
          borderColor: 'rgba(147, 147, 147, 0.2)',
        },
        { ...sx },
      ]}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
