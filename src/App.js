import React from "react";
import { useState } from "react";
import Home from "./pages/Home";
import useDebounce from "./hooks/usedebounce";
import useFetchApi from "./hooks/usefetchapi";
import Content from "./components/Content";
function App() {
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

  return (
    <div className="text-white min-h-screen bg-slate-800">
      {

        switchComp ?
          <Home
            region={region}
            setRegion={setRegion}
            name={name}
            setName={setName}
            data={data}
            pending={pending}
            setSwitchComp={setSwitchComp} />
          :
          <Content data={data.slice(0, 1)}
            pending={pending}
            setName={setName}
            setSwitchComp={setSwitchComp}
          />
      }


    </div>
  );
}

export default App;
