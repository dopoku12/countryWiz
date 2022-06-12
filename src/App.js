import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom"
import { FaGithub, FaLinkedin, FaEnvelope, FaMap, FaHome, FaRocket, FaSearch, FaBookmark } from 'react-icons/fa'
import Home from "./pages/Home";
import Nav from "./components/Nav";
import CountryDataPage from "./pages/CountryDataPage"
import ErrorPage from "./pages/ErrorPage";
import MapPage from "./pages/MapPage";

function App() {
  const navigate = useNavigate;
  const location = useLocation;

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

  function sHandler() {
    console.log(window.location.href)
  }

  function HomesHandler() {
    navigate('/Country')
  }



  return (
    <div className="App">
      <BrowserRouter>
        {

          <Nav RouterLinks={Link}
            SearchIcon={FaSearch}
            navIcons={iconLinks.filter((i) => i.id <= 2)}
            searchHandler={sHandler}
          />
        }
        <Routes>
          <Route path="/" element={<Home SearchIcon={FaSearch} BookMark={FaBookmark} searchHandler={HomesHandler} />} />
          <Route path="/County" element={<CountryDataPage footerIcons={iconLinks.filter((i) => i.id > 3)} />} />
          <Route path="/Map" element={<MapPage />} />
          <Route path="/https://davidopoku-portfolio.netlify.app" />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
