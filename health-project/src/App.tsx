import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Home, Doctor, Footer, About, Contact, Account } from "./components";
import DoctorPageContainer from "./components/DocDetail/DoctorPageContainer";
import RelatedDoctorLink from "./components/DocDetail/RelatedDoctorLink";
import Register from "./components/Account/Register";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Doctor" element={<Doctor />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/doctor/:id" element={<DoctorPageContainer />} />
            <Route path="/doctors/:specialty" element={<RelatedDoctorLink />} />
            <Route
              path="/RelatedDoctorLink"
              element={<Navigate to="/doctors/General%20physician" replace />}
            />
            <Route
              path="/doctors"
              element={<Navigate to="/doctors/General%20physician" replace />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;