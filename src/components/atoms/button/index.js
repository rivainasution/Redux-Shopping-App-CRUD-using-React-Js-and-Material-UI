import { Button } from '@mui/material';

const Buttons = ({ children, isLoading, sx, ...props }) => {
  return (
    <Button
      disabled={isLoading}
      sx={[{ ...sx }]}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Buttons;
