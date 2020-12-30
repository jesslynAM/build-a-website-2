import React, { useState, useEffect, useMemo } from "react";
import cooching from "../Assets/cooching.png";

function Details() {
  // TODO
  return (
    // Container
    <div className="flex flex-col items-center h-screen bg-purple-200 font">
      <img src={cooching} width="20%" height="20%" />

      <div className="p-8 text-2xl font-bold">Weather in CityName</div>

      <div className="flex flex-col p-8 m-4 border-2 rounded-md border-gray-700 items-center">
        <div>haze</div>
        <div>Current Temperature : 26</div>
      </div>

      <div>High Temperature : 26</div>
      <div>Cloudiness : 20%</div>
      <div>Low Temperature : 18</div>
      <div>Humidity : 83%</div>
      <div>Wind Speed : 3.1 mph</div>
    </div>
  );
}

export default Details;
