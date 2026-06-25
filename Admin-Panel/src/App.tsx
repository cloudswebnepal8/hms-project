import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLogin from './components/Admin/AdminLogin';
import DoctorLogin from './components/DoctorLogin';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/DoctorLogin" element={<DoctorLogin />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App