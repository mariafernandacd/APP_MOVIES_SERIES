import React from 'react'
import { useSearchInfo } from '../../../Hooks/useSearchInfo'
import { useParams, useHistory } from 'react-router-dom';
import EpisodeCard from '../../EpisodeCard';

const Episodios = ({id}) => {

    const { season } = useParams();
    const [data] = useSearchInfo("tv", id, "", "es-ES");
    const [seasonData] =useSearchInfo("tv", id,`season/${season}`, "es,-ES");
    const history = useHistory()

    const handleSeasonChange = (event) => {
        history.push(`/tv/${id}/seasons/${event.target.value}`)
    }

    if (data && seasonData){
    const { episodes = [] } = seasonData;
    
    return (
        <div>
            <select onChange={handleSeasonChange}>
            {data.seasons.map((dataSeason) => (
                <option key={dataSeason.id} 
                        value={dataSeason.season_number}>
                            Temporada: {dataSeason.season_number}
                </option>
            ))}
            </select>
                <div>
                    {episodes.map((episode) => (
                        <EpisodeCard 
                            key={episode.id} 
                            img={episode.still_path}
                            title={episode.name}
                            overview={episode.overview}
                            episodeNumber={episode.episode_number}
                        />
                    ))}
                </div>
            </div>

        )
    }
    return null
};

export default Episodios