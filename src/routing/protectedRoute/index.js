import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { setAuthToken } from '../../configs/axios/API';
import { DataLogin } from '../../configs/data';

const ProtectedRoute = ({page}) => {
  const [isLoading, setIsLoading] = useState(true);
  const userData = localStorage.getItem('dataLogin');

  const token = DataLogin().token;

  useEffect(() => {
    setAuthToken(token);
  }, [token]);


  useEffect(() => {
    const checkIsLogin = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    checkIsLogin();
  }, []);

  if (isLoading) {
    return (
        <Box 
            textAlign={'center'}
            my={'30px'}
        >
           <CircularProgress color="success" />
        </Box>
    )
  }

  if (!userData) {
    return <Navigate to="/users" replace />;
  }

  return page;
};

export default ProtectedRoute;