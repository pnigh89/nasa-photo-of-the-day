import React from "react"
import styled from 'styled-components'

const StyledHeader = styled.div `
    display:flex;
    flex-wrap: wrap;
    justify-content: center;

    h1 {
        color: white;
        background-color: black;
        padding: 2% 2%;
    }
`

const PhotoHeader = (props) => {
    return (
        <StyledHeader>
            
                <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" />
                <h1>NASA Photo of the Day</h1>
            
            
        </StyledHeader>
    )
}

export default PhotoHeader