import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaEnvelope, FaMap, FaHome, FaRocket, FaSearch } from 'react-icons/fa'
import CountryDataPage from "./pages/CountryDataPage"
import ErrorPage from "./pages/ErrorPage";
import MapPage from "./pages/MapPage";

function App() {
  const iconLinks = [
    {
      id: 0, colorCode: ' #0077b5', iconName: FaHome,
      name: 'Home', pathName: '/'
    },
    {
      id: 1, colorCode: '8cac5', iconName: FaMap,
      name: 'Map', pathName: '/Map'
    },

    {
      id: 2, colorCode: '8cac5', iconName: FaRocket,
      name: 'Portfolio', pathName: ''
    },
    // {
    //   id: 3, colorCode: '8cac5', iconName: FaSearch,
    //   name: 'search', pathName: ''
    // },
    {
      id: 4, colorCode: 'black', iconName: FaGithub,
      name: 'Github', pathName: '/https://github.com/dopoku12'
    },
    {
      id: 5, colorCode: ' #0077b5', iconName: FaLinkedin,
      name: 'Linkedin', pathName: '/https://www.linkedin.com/in/david-opoku-7008721b7'
    },
    {
      id: 6, colorCode: '78cac5', iconName: FaEnvelope,
      name: 'Email', pathName: '/'
    }]
  const navIcons = iconLinks.filter((i) => i.id <= 2)

  function searchHandler() {
    console.log(window.location.href)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul className="header-nav-ul">
            {
              navIcons.map((i) =>
                <li key={i.id} className={i.name} >
                  <Link to={i.pathName}>
                    <p>
                      <i.iconName size={25} color={i.colorCode} />
                      {i.name}
                    </p>
                  </Link>
                </li>
              )
            }
            <li className="input-group">
              <input type="search" id="search-box" placeholder="Enter County Name" />
              {
                <FaSearch className="search-icon" onClick={searchHandler} />
              }
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CountryDataPage />} />
          <Route path="/Map" element={<MapPage />} />
          <Route path="/https://davidopoku-portfolio.netlify.app" />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <CountryDataPage footerIcons={iconLinks.filter((i) => i.id > 3)} />
    </div>
  );
}

export default App;
