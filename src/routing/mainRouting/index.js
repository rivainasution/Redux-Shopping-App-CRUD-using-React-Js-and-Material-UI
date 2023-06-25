import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage, NotFoundPage } from '../../pages';
import ProtectedRoute from '../protectedRoute';

const MainRouting = () => {
  return (
    <Routes>
      <Route index element={<ProtectedRoute page={<Homepage />} />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute page={<Homepage />} />}
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouting;
