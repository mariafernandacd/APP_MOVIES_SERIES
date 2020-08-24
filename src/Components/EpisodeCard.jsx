import React from 'react'

const EpisodeCard = ({img, title, overview, episodeNumber}) => {
   
    return (
        <div className="styleEpisodio">
            <img src={`https://image.tmdb.org/t/p/w400/${img}`} 
                alt={`title imagen`}
            />
            <p className="titleEpisodio">
                EP{episodeNumber} - 
            </p> <span className="title">{title}</span>
            <p className="overviewEpisode">{overview}</p>
        </div>
    )
}

export default EpisodeCard
