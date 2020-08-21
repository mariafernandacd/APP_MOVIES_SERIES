import React from 'react'
import ContainerPreview from "../Components/ContainerPreview"

function Series() {
    return (
        <div className="Home">
            <ContainerPreview media="tv" category="popular" />
            <ContainerPreview media="tv" category="top_rated" />
            <ContainerPreview media="tv" category="on_the_air" />
        </div>
    )
}

export default Series
