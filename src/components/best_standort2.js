import React, { useState, useEffect } from "react";

function YourComponent() {
  const [isCardVisible, setCardVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bestZone, setBestZone] = useState(null);
  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);
  };

  useEffect(() => {
    fetch(`https://dcplanner.duckdns.org/api/getBestZone/day`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data);
        setBestZone(data);
      })
      .catch((error) => console.error(error));

    const handleResize = () => {
      setIsMobile(window.innerWidth < 520);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={toggleCardVisibility}
        >
          Show Card
        </button>
      ) : (
        isCardVisible && (
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">
                Today's Greenest Zone by Carbon Intensity
              </h5>
            </div>
            <div className="card-body">
              {bestZone ? (
                <div>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {bestZone.zone}
                  </h6>
                  <img
                    src={`https://flagsapi.com/${bestZone.zone.substring(
                      0,
                      2
                    )}/shiny/64.png`}
                    alt={bestZone.zone}
                  />
                  <p>Average Carbon Intensity: {bestZone.avgCarbonIntensity}</p>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default YourComponent;
