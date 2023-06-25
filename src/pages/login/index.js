import { Box } from "@mui/material"
import { LoginContentFormLogin, LoginContentTitle } from "../../components/organisms/loginPage"

const LoginPage = () => {

    return (
        <Box 
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'center'}
            flexDirection={'column'}
        >
            <LoginContentTitle />
            <LoginContentFormLogin />   
        </Box>
    )
}

export default LoginPage