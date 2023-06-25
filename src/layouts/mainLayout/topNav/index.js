import { AppBar, Box } from '@mui/material';
import NavigationTopbar from './navigation';

const TopbarHomepage = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'white',
        shadow: 'none',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <Box
        p= {'21px 17px'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >

          {/* --- Navigation --- */}
          <NavigationTopbar />
      </Box>
    </AppBar>
  );
};

export default TopbarHomepage;
