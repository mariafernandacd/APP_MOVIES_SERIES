import React from 'react'
import ContainerPreview from "../Components/ContainerPreview"

const Home = () => {

    return (
        <div className="Home">
            <ContainerPreview media="movie" category="trending" />
            <ContainerPreview media="tv" category="trending" />
        </div>

    )
}

export default Home;
