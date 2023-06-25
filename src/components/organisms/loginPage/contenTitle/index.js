import { Box, IconButton, Typography } from "@mui/material"
import { IconEmoji, IconLogoLg } from "../../../../assets/login/icons"

const LoginContentTitle = () => {
    return (
        <Box 
            display={'flex'} 
            flexDirection={'column'}
            alignItems={'center'} 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '467px',
            }}
        >
            {/* --- Logo --- */}
            <IconLogoLg />
            <Box       
                mt={'20px'}
            >
                {/* --- Welcome --- */}
                <Box 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb:'6px',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'fantasy',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '24px',
                            lineHeight: '32px',
                            letterSpacing: '0.02em',
                            color: '#171717'
                        }}
                    >Hai Selamat Datang</Typography>
                    <IconButton sx={{padding: '0px', mx: '12px'}}>
                        <IconEmoji />
                    </IconButton>
                    <IconButton sx={{padding: '0px'}}>
                        <IconEmoji />       
                    </IconButton>
                </Box>
                {/* --- Description --- */}
                <Typography
                    sx={{
                        fontFamily: 'fantasy',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '20px',
                        letterSpacing: '0.02em',
                        color: '#c4c4c4',
                        textAlign: 'center'
                    }}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
            </Box>
        </Box>
    )
}

export default LoginContentTitle