import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, NotFoundPage } from '../../pages';

const LoginRouting = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default LoginRouting;
