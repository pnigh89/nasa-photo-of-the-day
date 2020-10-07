import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY, BASE_URL } from '../src/constant/index'
// import Header from '../src/components/Header'
// import PhotoCard from '../src/components/PhotoCard'

function App() {

  const [photoData, setPhotoData] = useState()

  useEffect(()=>{
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res =>{
        setPhotoData(res.data)
      })
      .catch(error =>{
      })
  }, [])


  return (
    <div className="App">
      {/* <Header />
      <PhotoCard photoData={photoData} /> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
