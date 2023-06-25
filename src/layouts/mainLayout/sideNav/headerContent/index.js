import { Box, Typography } from '@mui/material';
import { IconLogoMd } from '../../../../assets/login/icons';

const HeaderContent = ({ open }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1.2,
        my: '20px',
      }}
    >
      <IconLogoMd />
      {open && (
        <Typography
          sx={{
            fontFamily: 'fantasy',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '150%',
            color: '#c4c4c4',
            opacity: open ? 1 : 0
          }}
        >
          VivaShops
        </Typography>
      )}
    </Box>
  );
};

export default HeaderContent;
