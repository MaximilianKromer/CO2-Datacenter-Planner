import React from "react";

const options = {
  method: "GET",
  headers: {
    //"X-BLOBR-KEY": "WIezX8X7VhNtDKCcXdcMRmfP838cPYoP",
  },
};

/**
 * Calculates the CO2 generated for each hour based on KW/H values
 *
 * @param {number[]} kwHArray - An array of 24 KW/H values representing the energy consumption for each hour.
 * @param {string} zone
 * @returns {Object|null} An object containing the CO2 generated for each hour and the total CO2 generated, or null if there was an error.
 */
async function calculateCO2History(kwHArray, zone) {
  try {
    const response = await fetch(
      //`https://api-access.electricitymaps.com/2w97h07rvxvuaa1g/carbon-intensity/history?zone=${zone}`,
      `https://dcplanner.duckdns.org/api/getDataByZone/${zone}`,
      options
    );
    const data = await response.json();
    const { history } = data;

    const co2Array = history.map((item, index) => {
      const carbonIntensity = item.carbonIntensity;
      const kwH = kwHArray[index];
      const co2 = carbonIntensity * kwH;
      return co2;
    });

    const totalCO2 = co2Array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    return { co2Array, totalCO2 };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default calculateCO2History;
