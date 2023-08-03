import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/products/:id' element={<Detail />} />
            <Route  path='/cart' element={<Cart />} />
            <Route  path='/products/:search' element={<Search />} />
          </Routes>
        </Router>
      </PageContainer>
    </>
  )
}

export default App;