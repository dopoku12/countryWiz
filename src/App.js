import * as React from 'react';
import { useDebounce } from './hooks/useThrottle';
// import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"
// import { FaGithub, FaLinkedin, FaEnvelope, FaMap, FaHome, FaRocket, FaSearch, FaBookmark, FaListUl } from 'react-icons/fa'
// import { useState } from "react";
// import Home from "./pages/Home";
// import Nav from "./components/Nav";
// import ErrorPage from "./pages/ErrorPage";
// import MapPage from "./pages/MapPage";

const codestyle = { fontFamily: 'monospace' };

const App = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [debouncedValue, debouncedTime] = useDebounce(inputValue);

  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        minHeight: '50vh',
        gap: '1em',
      }}
    >
      <label style={{ display: 'flex', flexDirection: 'column' }}>
        <span>Enter value</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
      </label>
      <div>
        <p style={codestyle}># Debounced Results</p>
        <p style={codestyle}>Value: {JSON.stringify(debouncedValue)}</p>
        <p style={codestyle}>Time: {JSON.stringify(debouncedTime)}</p>
      </div>
    </div>
  );
};

// function App() {
//   const [status, setStatus] = useState(false)

//   const iconLinks = [
//     {
//       id: 0, colorCode: ' #0077b5', iconName: FaHome,
//       name: 'Home', pathName: '/'
//     },
//     {
//       id: 1, colorCode: '8cac5', iconName: FaMap,
//       name: 'Map', pathName: '/Map'
//     },

//     {
//       id: 3, colorCode: '8cac5', iconName: FaRocket,
//       name: 'Portfolio', pathName: ''
//     },

//     {
//       id: 4, colorCode: 'black', iconName: FaGithub,
//       name: 'Github', pathName: '/https://github.com/dopoku12'
//     },
//     {
//       id: 5, colorCode: ' #0077b5', iconName: FaLinkedin,
//       name: 'Linkedin', pathName: '/https://www.linkedin.com/in/david-opoku-7008721b7'
//     },
//     {
//       id: 6, colorCode: '78cac5', iconName: FaEnvelope,
//       name: 'Email', pathName: '/'
//     }]

//   function menuHandler() {
//     const changeStatus = true
//     status === false ?
//       setStatus(changeStatus) :
//       setStatus(status)
//   }
//   const windowPathName = window.location.pathname

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <nav className="header-nav">
//           <FaListUl size={25} color='F47D2F' onClick={menuHandler} />
//           {
//             status &&
//             <Nav RouterLinks={Link}
//               SearchIcon={FaSearch}
//               BookMark={FaBookmark}
//               navIcons={iconLinks.filter((i) => i.id <= 2)}
//             />
//           }
//         </nav>

//         <Routes>
//           <Route path="/" element={
//             <Home SearchIcon={FaSearch}
//               BookMark={FaBookmark}
//               footerIcons={iconLinks.filter((i) => i.id >= 3)}
//             />
//           } />

//           <Route path="/Map" element={<MapPage />} />
//           <Route path="/https://davidopoku-portfolio.netlify.app" />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>

//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
