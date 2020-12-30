import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City";

const weatherKey = `TODO`; // Your API Key here

function Home() {
  // TODO
  return (
    <div className="flex flex-col h-screen bg-purple-500 text-6xl">
      
      <City cityName={"Tokyo"} temp={"10"} color={"bg-yellow-500"}/>
      
      <City cityName={"Jakarta"} temp={"29"} color={"bg-red-500"}/>

      <City cityName={"Bandung"} temp={"17"} color={"bg-blue-500"}/>
    </div>
  );
}

export default Home;
