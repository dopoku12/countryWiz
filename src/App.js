import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMap, FaHome, FaRocket, FaSearch, } from 'react-icons/fa'
import Home from "./pages/Home";
function App() {
  // const [status, setStatus] = useState(false)
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
      id: 3, colorCode: '8cac5', iconName: FaRocket,
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

  return (
    <div className="App">

      <Home SearchIcon={FaSearch}
        footerIcons={iconLinks.filter((i) => i.id >= 3)} />
    </div>
  );
}

export default App;
