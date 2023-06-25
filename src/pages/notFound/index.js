import { Box, Typography } from "@mui/material";
import { NotFound } from "../../assets/login/imgs";

const NotFoundPage = () => {
    return (
        <Box 
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                my: '30px'
            }}
        >
            <img src={NotFound} alt="Not Found" width={300} height={150} />
            <Typography
                sx={{
                    my: '20px',
                    fontFamily: 'fantasy',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '150%',
                    letterSpacing: '1px',
                    color: 'rgb(105 105 105)'
                }}
            >Page Not Found</Typography>
        </Box>
    )
}

export default NotFoundPage;