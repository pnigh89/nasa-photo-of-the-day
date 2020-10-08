import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY, BASE_URL } from '../src/constant/index'
import Header from '../src/components/Header/Header'
import PhotoCard from '../src/components/PhotoCard/PhotoCard'

function App() {

  const [photoData, setPhotoData] = useState('')
  const [date, setDate] = useState('')

  useEffect(()=>{
    const fetchPhoto = () => 
    {axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${changeDate}`)
      .then(res =>{
        setPhotoData(res.data)
        
      })
      .catch(error =>{
      })
      }
      fetchPhoto()
  }, [])


function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
  
}
 let changeDate = randomDate(new Date(1995, 6, 15), new Date())
 console.log(changeDate)


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
      <Header />
      <PhotoCard photoData={photoData} />
      <span>Photo of the day for {changeDate} </span> 
      {/* <img src ={photoData.url} /> */}
      
    </div>
  );
}

export default App;
