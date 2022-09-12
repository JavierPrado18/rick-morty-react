import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const SearchLocation = ({ setLocation,  setPag }) => {
  const [searchValue, setSearchValue] = useState("");
  const[listSuggestions,setListSuggestions]=useState([])
  useEffect(() => {
    if (searchValue !=="") {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${searchValue}`)
        .then((res) => setListSuggestions(res.data.results));
    }else{
        setListSuggestions([])
    }
  }, [searchValue]);
  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then((res) => setLocation(res.data))
      .finally(() => {
        setPag(0)
        setSearchValue("")
      });
  };

  return (
    <>
    <div className="search">
      <input
        type="text"
        placeholder="Find location by ID or name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={searchLocation}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <div className="container-suggestions">
      {listSuggestions.map((locationSuggestion)=>(
                <button className="suggestions"
                  key={locationSuggestion.name} 
                  onClick={()=>{
                    setLocation(locationSuggestion)
                    setPag(0)
                    setSearchValue("")
                    }}
                  >{locationSuggestion.name}</button>
            ))}
      </div>
    </>
  );
};

export default SearchLocation;
