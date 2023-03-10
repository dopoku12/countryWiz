import React from "react";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import useDebounce from "./hooks/usedebounce";
import useFetchApi from "./hooks/usefetchapi";
import Content from "./components/Content";
import Nav from "./components/Nav";
import {
  FaGithub, FaLinkedin,
  FaEnvelope, FaRocket,
  FaSearch, FaArrowLeft, FaSun, FaMoon
}
  from 'react-icons/fa'
function App() {
  //external links
  const links = [
    {
      id: 3, colorCode: '8cac5', iconName: FaRocket,
      name: 'Portfolio', pathName: 'https://davidopoku-portfolio.netlify.app/'
    },

    {
      id: 4, colorCode: 'black', iconName: FaGithub,
      name: 'Github', pathName: 'https://github.com/dopoku12'
    },
    {
      id: 5, colorCode: ' #0077b5', iconName: FaLinkedin,
      name: 'Linkedin', pathName: 'https://www.linkedin.com/in/david-opoku-7008721b7'
    },
    {
      id: 6, colorCode: '78cac5', iconName: FaEnvelope,
      name: 'Email', pathName: ''
    }]

  //sets Default region value is passed as a prop for Options
  const [region, setRegion] = useState('Africa')
  //Switch component
  const [switchComp, setSwitchComp] = useState(true)
  //Default value before anything is entered in Input component
  let [name, setName] = useState('');
  //Debounces usr input
  let { debounceValue } = useDebounce(name)
  //takes debounced value&region value returns api data
  const { data, pending } = useFetchApi(debounceValue, region)

  //dark mode&light mode toggle
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    theme === 'dark' ?
      document.documentElement.classList.add('dark')
      :
      document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <div className=" bg-slate-100 
    dark:bg-slate-900 
    dark:text-white
    min-h-screen">
      <header className=" 
      dark:bg-slate-800
      flex justify-between shadow-2xl 
      shadow-black-50 p-4" >
        <h1 className="font-bold text-2xl ">
          Where in the World?
        </h1>
        <Nav links={links} />
        {
          theme === 'dark' ?
            <FaSun size={35} onClick={() => setTheme('light')} />
            : <FaMoon size={35} onClick={() => setTheme('dark')} />
        }
      </header>

      {
        switchComp ?
          <Home
            region={region}
            setRegion={setRegion}
            name={name}
            setName={setName}
            data={data}
            pending={pending}
            setSwitchComp={setSwitchComp}
            FaSearch={FaSearch}
          />
          :
          <Content data={data.slice(0, 1)}
            pending={pending}
            setName={setName}
            setSwitchComp={setSwitchComp}
            FaArrowLeft={FaArrowLeft}
          />
      }
    </div>
  );
}

export default App;
