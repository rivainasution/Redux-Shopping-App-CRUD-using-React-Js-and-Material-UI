import * as React from 'react';
import { IconButton } from '@mui/material';
import { Drawer, DrawerHeader } from '../../../configs/theme';
import { IconSideNavHide, IconSideNavShow } from '../../../assets/sideNav/icons';
import HeaderContent from './headerContent';
import MainContent from './mainContent';

const SidebarHomepage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader style={{ justifyContent: 'flex-start' }}>
        <IconButton onClick={() => setOpen(!open)}>
          {open ? <IconSideNavHide /> : <IconSideNavShow />}
        </IconButton>
      </DrawerHeader>

      <HeaderContent open={open} />

      <MainContent open={open} />
    </Drawer>
  );
};

export default SidebarHomepage;
