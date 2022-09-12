import React from "react";

const ResidentInformation = ({ specie, origin, episode }) => {
  return (
    <div className="container-information">
      <p>RACE</p>
      <h4>{specie}</h4>
      <p>ORIGIN</p>
      <h4>{origin}</h4>
      <p>APPEARANCE IN EPISODES</p>
      <h4>{episode}</h4>
    </div>
  );
};

export default ResidentInformation;