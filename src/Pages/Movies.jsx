import React from 'react'
import ContainerPreview from "../Components/ContainerPreview"

const Movies = () => {
    return (
        
            <div className="Home" >
            <ContainerPreview media="movie" category="popular" />
            <ContainerPreview media="movie" category="top_rated" />
            <ContainerPreview media="movie" category="upcoming" />
            <ContainerPreview media="movie" category="now_playing" />
            </div>
    )
}

export default Movies
