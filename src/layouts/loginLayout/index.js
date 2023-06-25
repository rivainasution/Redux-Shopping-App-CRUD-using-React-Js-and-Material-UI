import { Box, Grid } from "@mui/material";
import { LoginBackground } from "../../assets/login/imgs";
import LoginRouting from "../../routing/loginRouting";
import LoginHeader from "./headerContent";

const LoginLayout = () => {
  
    return (
      <Box
        sx={{
          backgroundImage: `linear-gradient(to top, rgba(81, 177, 92, 0.2), rgba(81, 177, 92, 0.2)), url(${LoginBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <Grid container columns={2}>
          <Grid 
            item xl={1} 
            lg={1} 
            md={2} 
            sm={2} 
            xs={2} 
            bgcolor={'#fff'} 
            sx={{
              height: '100vh',
              p: '20px 30px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <LoginHeader />
              <LoginRouting />
              
              {/* <LoginFooter /> */}
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default LoginLayout;