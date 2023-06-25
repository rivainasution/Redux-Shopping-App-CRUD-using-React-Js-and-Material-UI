import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { IconLogoMd } from "../../../assets/login/icons";

const LoginHeader = () => {
    const location = useLocation();
    const isMainRoute = location.pathname === '/users' || location.pathname === '/users/';

    return (
        <Box display={'flex'} >
            {
                isMainRoute &&
                    <Box display={'flex'} alignItems={'center'}>
                        {/* --- Logo --- */}
                        <IconLogoMd />
                        {/* --- Title --- */}
                        <Typography
                            sx={{
                                fontFamily: 'fantasy',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '20px',
                                lineHeight: '28px',
                                color: '#c4c4c4',
                                ml: '10px'
                            }}
                        >VivaShops</Typography>
                    </Box> 
                
            }
        </Box>
    );
}

export default LoginHeader;