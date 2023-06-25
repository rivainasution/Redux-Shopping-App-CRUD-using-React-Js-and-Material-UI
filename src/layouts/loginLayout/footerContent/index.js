import { Box, Typography } from "@mui/material";
import { dataLoginFooter } from "../../../data/footer";

const LoginFooter = () => {

    return (
        <Box display={'flex'} flexDirection={'column'} width={'100%'}>
            {/* --- Our Partner --- */}
            <Typography
                fontFamily={'sans-serif'}
                fontStyle={'normal'}
                fontWeight={400}
                fontSize={'12px'}
                lineHeight={'16px'}
                color={'#9e9d9d'}
                mb={'12px'}

            >Our Partner</Typography>


            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xl: 'row',
                        lg: 'row',
                        md: 'row',
                        sm: 'row',
                        xs: 'column'
                    },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* --- Logo Partner --- */}
                <Box 
                    display={'flex'} 
                    alignItems={'center'} 
                    sx={{
                        mb: {
                            xs: '10px'
                        }
                    }} 
                >
                    {
                        dataLoginFooter.map((item, idx)=>(
                            <Box display={'flex'} alignItems={'center'} key={idx} mr={'18px'}>
                                <img src={item.icon} alt={item.name} />
                            </Box>
                        ))
                    }
                </Box>
                {/* --- Footer --- */}
                <Typography
                    fontFamily={'sans-serif'}
                    fontStyle={'normal'}
                    fontWeight={400}
                    fontSize={'12px'}
                    lineHeight={'16px'}
                    color={'#9e9d9d'}
                >Powered by Danmogot 2012 - 2023</Typography>
            </Box>
        </Box>
    )
}

export default LoginFooter;