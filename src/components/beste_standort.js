import React, { useState, useEffect } from "react";

const BestZoneCard = () => {
  const [bestZone, setBestZone] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:3000/getBestZone/day")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        setBestZone(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log("bestZone:", bestZone);

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">
          Today's Greenest Country by Carbon Intensity
        </h5>
      </div>
      <div className="card-body">
        {bestZone ? (
          <div>
            <h6 className="card-subtitle mb-2 text-muted">{bestZone.zone}</h6>
            <img
              src={`https://flagsapi.com/${bestZone.zone}/shiny/64.png`}
              alt={bestZone.zone}
            />
            <p>Average Carbon Intensity: {bestZone.avgCarbonIntensity}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BestZoneCard;
