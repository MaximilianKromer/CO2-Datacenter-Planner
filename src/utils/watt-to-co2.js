import * as React from "react";

const options = {
  method: "GET",
  headers: {
    "X-BLOBR-KEY": "WIezX8X7VhNtDKCcXdcMRmfP838cPYoP",
  },
};
async function getCarbonIntensity(zone) {
  try {
    const response = await fetch(
      `https://api-access.electricitymaps.com/2w97h07rvxvuaa1g/carbon-intensity/latest?zone=${zone}`,
      options
    );
    const data = await response.json();
    console.log(data);

    return data.carbonIntensity;
  } catch (error) {
    console.error(error);
  }
}

/**
 * convert AKTUELLE Kw/H to CO2 in gram
 * @param  {Number} kwH kilowatt pro stunde
 * @param  {String} zone
 * @return {Number}      CO2 in gram
 */

async function KwHToCO2(kwH, zone) {
  try {
    const carbonIntensity = await getCarbonIntensity(zone);
    return carbonIntensity * kwH;
  } catch (error) {
    console.error(error);
  }
}

export default KwHToCO2;
