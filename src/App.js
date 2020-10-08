import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY, BASE_URL } from '../src/constant/index'
// import Header from '../src/components/Header'
import PhotoCard from '../src/components/PhotoCard/PhotoCard'

function App() {

  const [photoData, setPhotoData] = useState('')

  useEffect(()=>{
    const fetchPhoto = () => 
    {axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res =>{
        setPhotoData(res.data)
        
      })
      .catch(error =>{
      })
      }
      fetchPhoto()
  }, [])

// function App() {


//   const [photoData, setPhotoData] = useState(null)
  
//   useEffect(() => {
//     function getData() {
//       axios.get(`${BASE_URL}?api_key=${API_KEY}`)
//         .then(res => {
         
//           setPhotoData(res.data)
//         })
//         .catch(err => {
        
//         })
//     }
//     getData()
//   }, [])


  return (
    <div className="App">
      {/* <Header /> */}
      <PhotoCard photoData={photoData} />
      {/* <img src ={photoData.url} /> */}
      
    </div>
  );
}

export default App;
