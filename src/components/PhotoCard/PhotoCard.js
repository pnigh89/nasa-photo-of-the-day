import React from "react"
import styled from 'styled-components'
// import Explanation from '../PhotoCard/Explanation'
// import Photo from '../PhotoCard/Photo'
// import PhotoButtons from '../PhotoCard/PhotoButtons'
// import PhotoHeader from '../PhotoCard/PhotoHeader'

const PhotoStyle = styled.div`
display: flex;
align-items: center;
flex-direction: column;
/* width: 30%; */
/* margin-left: 40%;
margin-right: 44%; */

img {
    width:70%;
    border-radius: 4%;
}

span {
    width:50%;
}
`


const PhotoCard = (props) => {
    const {photoData} = props

return (
    <PhotoStyle>
       
        <img alt = 'pic of the day' src={photoData.url} />
        <br />
        <span className='comment'>{photoData.explanation}</span>
        
    </PhotoStyle>
    
    
)

}


// function PhotoCard(props) {
//     const { photoData } = props

//     return (

//         <div>
//             <img src={photoData} alt='the pic of the day'/>
            
//         </div>
//     );
// }
export default PhotoCard;