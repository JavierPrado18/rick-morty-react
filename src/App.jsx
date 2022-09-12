import { useState } from "react";

import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Location from "./components/Location";
import ResidentItem from "./components/ResidentItem";
import Pagination from "./components/Pagination";
import SearchLocation from "./components/SearchLocation";

function App() {
  
  const [location, setLocation] = useState({});
  const [pag, setPag] = useState(0);
  
  const newArray = location.residents?.slice(pag, pag + 8);


  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setLocation(res.data))
      
  }, []);
  return (
    <div className="App">
      <a href="#header" className="btn-top">
        <i className="fa-solid fa-angle-up"></i>
      </a>
      <header id="header">
        <img
          src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
          alt=""
        />

      <SearchLocation setLocation={setLocation}  setPag={setPag}/>  
     
      
      </header>
      <Location location={location} />

      <div className="container-cards">
        {newArray?.map((resident) => (
          <ResidentItem resident={resident} key={resident} />
        ))}
      </div>
      <div className="container-btn">
        <Pagination
          pag={pag}
          setPag={setPag}
          amount={location.residents?.length}
        />
      </div>
    </div>
  );
}

export default App;
