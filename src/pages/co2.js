import React, { useEffect, useState } from "react";
import calculateCO2History from "../utils/array-to-co2";

function CO2HistoryComponent() {
  const [co2Array, setCO2Array] = useState([]);
  const [totalCO2, setTotalCO2] = useState(0);

  useEffect(() => {
    const kwHArray = [
      10, 12, 15, 13, 14, 16, 18, 20, 22, 25, 24, 23, 21, 19, 17, 16, 15, 14,
      12, 11, 10, 9, 8, 7,
    ];

    const zone = "DE"; // Replace with your desired zone

    calculateCO2History(kwHArray, zone)
      .then((result) => {
        if (result) {
          setCO2Array(result.co2Array);
          setTotalCO2(result.totalCO2);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>CO2 History</h2>
      <ul>
        {co2Array.map((co2, index) => (
          <li key={index}>
            Hour {index + 1}: {co2}
          </li>
        ))}
      </ul>
      <p>Total CO2: {totalCO2}</p>
    </div>
  );
}

export default CO2HistoryComponent;
