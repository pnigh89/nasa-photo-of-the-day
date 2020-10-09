import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { API_KEY, BASE_URL } from '../src/constant/index'
import Header from '../src/components/Header/Header'
import PhotoCard from '../src/components/PhotoCard/PhotoCard'
import styled from 'styled-components'

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

 const newDate = () => {
 
  if (!date ) return setDate(null)
  setDate(`${changeDate}`)

}
console.log(newDate)

const StyledBody = styled.div`
background-image: url('https://thewallpaper.co//wp-content/uploads/2017/10preview/space-landscapes-space-view-planets-spaceshipsart-outer-space-stars-high-resolution-background.jpg');

p {
  display: flex;
  justify-content: center;
  background-color: peachpuff;
  width: 30%;
  margin-left: 40%;
  margin-right: 45%;
} 

button {
  display: flex;
  justify-content: center;
  margin-left: 45%;
  margin-bottom: 3%;
  background-color: peachpuff;
  
}
`

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


function refreshPage() {
  window.location.reload(false);
}

  return (
    <StyledBody>
      <Header />
      <PhotoCard photoData={photoData} />
      <p>Photo of the day for {changeDate} </p> 
      {/* <img src ={photoData.url} /> */}
      <br />
      <button onClick={refreshPage}>Click for New Pic!</button>
      <br />
    </StyledBody>
  );
}

export default App;
