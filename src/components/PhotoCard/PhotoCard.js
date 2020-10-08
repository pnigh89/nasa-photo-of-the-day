import React from "react"
// import Explanation from '../PhotoCard/Explanation'
// import Photo from '../PhotoCard/Photo'
// import PhotoButtons from '../PhotoCard/PhotoButtons'
// import PhotoHeader from '../PhotoCard/PhotoHeader'


const PhotoCard = (props) => {
    const {photoData} = props

return (
    <div className='photo-wrapper'>
        <img alt = 'pic of the day' src={photoData.url} />
        
    </div>
    
    
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