import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { FaMap, FaHome, FaRocket, FaSearch } from 'react-icons/fa'
import CountryDataPage from "./pages/CountryDataPage"
import ErrorPage from "./pages/ErrorPage";
import MapPage from "./pages/MapPage";
import { icons } from "react-icons";

function App() {

  const [iconLinks, seticonLinks] = useState([
    { id: 0, colorCode: ' #0077b5', iconName: FaHome, name: 'Home', pathName: '/' },
    { id: 1, colorCode: '78cac5', iconName: FaMap, name: 'Map', pathName: '/Map' },
    { id: 2, colorCode: '78cac5', iconName: FaRocket, name: 'Portfolio', pathName: '/https://davidopoku-portfolio.netlify.app' },

  ].map(i => (
    { ...i, status: false }
  ))
  )

  const headerLinks = iconLinks.map((i) =>
    <li key={i.id} className={i.name} >
      <Link to={i.pathName}>
        <p>
          <i.iconName size={25} color={i.colorCode} />
          {i.name}
        </p>
      </Link>
    </li >
  )



  return (
    <div className="App">
      <BrowserRouter>
        <nav>

          <ul className="header-nav-ul">
            {
              headerLinks
            }
            <li className="input-group">
              <input type="search" id="search-box" placeholder="Enter County Name" />
              <FaSearch className="search-icon" onClick={''} />
            </li>

          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CountryDataPage />} />
          <Route path="/Map" element={<MapPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
