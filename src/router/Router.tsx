import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { InitPage } from '../pages/InitPage';

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<InitPage/>} />
    </Routes>
  </BrowserRouter>
  )
}
