import { Box } from '@mui/material';
import MainRouting from '../../routing/mainRouting';
import SidebarHomepage from './sideNav';
import TopbarHomepage from './topNav';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SidebarHomepage />
      <Box component="main" sx={{ flexGrow: 1, position: 'relative' }}>
        <TopbarHomepage />
        <Box sx={{ p: 2, bgcolor: '#F9F9F9', minHeight: '100vh' }}>
          <MainRouting />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
