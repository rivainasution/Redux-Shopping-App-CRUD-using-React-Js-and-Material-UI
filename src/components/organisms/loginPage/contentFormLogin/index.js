import {
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  IconEmail,
  IconHide,
  IconPassword,
  IconShow,
} from '../../../../assets/login/icons';
import { FetchLogin } from '../../../../configs/axios/apiPath';
import { EncryptedAES } from '../../../../utils/crypto';
import { Buttons } from '../../../atoms';


const LoginContentFormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassowrd, setIsFocusPassword] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  // --- Err Message ---
  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  // --- Handle Submit ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    try {
      const response = await FetchLogin(data);

      const dataResponse = response?.data;
      if (dataResponse.meta?.success) {
        // --- Encrypt data login ---
        const encrypt = EncryptedAES(dataResponse);
        // --- Save to local storage ---
        localStorage.setItem('dataLogin', encrypt);

        navigate('/');
      } else {
        const errorMessage = response?.data?.meta?.message;
        setErrMsg(errorMessage);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ mt: '30px' }}>
      {/* --- Message --- */}
      {!isLoading ? (
        <p
          style={{ textAlign: 'center', color: 'red' }}
          className={errMsg ? 'errmsg' : 'offscreen'}
          aria-live="assertive"
        >
          {errMsg}
        </p>
      ) : (
        <Box textAlign={'center'} my={'10px'}>
          <CircularProgress color="secondary" />
        </Box>
      )}

      {/* --- Input Email --- */}
      <Box
        display={'flex'}
        flexDirection={'column'}
        sx={{
          width: {
            xl: '489px',
            lg: '489px',
            md: '489px',
            sm: '489px',
            xs: '306px',
          },
        }}
        mb={'16px'}
      >
        <InputLabel
          style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '22px',
            letterSpacing: '0.02em',
            color: '#171717',
            marginBottom: '10px',
          }}
        >
          Email
        </InputLabel>
        <TextField
          variant="outlined"
          type={'email'}
          size={'medium'}
          fullWidth
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onFocus={() => setIsFocusEmail(true)}
          onBlur={() => setIsFocusEmail(false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {!isFocusEmail && email === '' ? <IconEmail /> : ''}
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              background: '#f9f9f9',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
            },
          }}
        />
      </Box>

      {/* --- Input Password --- */}
      <Box
        display={'flex'}
        flexDirection={'column'}
        sx={{
          width: {
            xl: '489px',
            lg: '489px',
            md: '489px',
            sm: '489px',
            xs: '306px',
          },
        }}
      >
        <InputLabel
          style={{
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '22px',
            letterSpacing: '0.02em',
            color: '#171717',
            marginBottom: '10px',
          }}
        >
          Password
        </InputLabel>
        <TextField
          variant="outlined"
          type={isShow ? 'text' : 'password'}
          size={'medium'}
          fullWidth
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setIsFocusPassword(true)}
          onBlur={() => setIsFocusPassword(false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {!isFocusPassowrd && password === '' ? <IconPassword /> : ''}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {isShow ? (
                  <IconButton
                    sx={{ p: '0px' }}
                    onClick={() => setIsShow(false)}
                  >
                    <IconHide />
                  </IconButton>
                ) : (
                  <IconButton sx={{ p: '0px' }} onClick={() => setIsShow(true)}>
                    <IconShow />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              background: '#f9f9f9',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
              },
            },
          }}
        />
      </Box>

      {/* --- Forget Password --- */}
      <Link
        to="/users/forget-password"
        style={{
          display: 'flex',
          justifyContent: 'end',
          marginBottom: '35px',
        }}
      >
        <Typography
          fontFamily={'sans-serif'}
          fontStyle={'normal'}
          fontWeight={600}
          fontSize={'16px'}
          lineHeight={'22px'}
          letterSpacing={'0.02em'}
          color={'#51B15C'}
        >
          Forget Password ?
        </Typography>
      </Link>

      {/* --- Login Button --- */}
      <Buttons
        color="primary"
        variant="contained"
        type="submit"
        sx={{
          borderRadius: '20px',
          width: '100%',
        }}
        isLoading={isLoading}
      >
        <Typography
          fontFamily={'sans-serif'}
          fontStyle={'normal'}
          fontWeight={700}
          fontSize={'12px'}
          lineHeight={'25px'}
          color={'#fff'}
          textTransform={'none'}
        >
          Login
        </Typography>
      </Buttons>
    </form>
  );
};

export default LoginContentFormLogin;
