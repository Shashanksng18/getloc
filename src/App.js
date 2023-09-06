import React, { useEffect } from "react";

const App = () => {

  useEffect(() => {
     const getLocation = () => {
       navigator.geolocation.getCurrentPosition(async (position) => {
         const {latitude, longitude} = position.coords;
         const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
         const currentLocation = await response.json();
         console.log(`You are from ${currentLocation.address.city}`)
       })
     }
     getLocation();
  }, [])
  return(
    <>
     <h1>Get Your Location</h1>
    </>
  )
}

export default App;