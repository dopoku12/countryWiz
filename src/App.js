import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import CountryDataPage from "./pages/CountryDataPage"
import ErrorPage from "./pages/ErrorPage";
import MapPage from "./pages/MapPage";

function App({ navIcons, search }) {


  const headerLinks = navIcons.map((i) =>
    <li key={i.id} className={i.name} >
      <Link to={i.pathName}>
        <p>
          <i.iconName size={25} color={i.colorCode} />
          {i.name}
        </p>
      </Link>

    </li >
  )

  console.log(window.location.href)


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
              <search className="search-icon" onClick={''} />
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CountryDataPage />} />
          <Route path="/Map" element={<MapPage />} />
          <Route path="/https://davidopoku-portfolio.netlify.app"
            element={() => {
              window.location.href = '/https://davidopoku-portfolio.netlify.app';
              return null
            }}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
