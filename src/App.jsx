import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />

          </Routes>
        </Router>
      </PageContainer>
    </>
  )
}

export default App;