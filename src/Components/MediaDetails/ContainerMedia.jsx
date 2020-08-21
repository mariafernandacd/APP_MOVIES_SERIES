import React from 'react'
import { useParams } from 'react-router-dom';
import { useSearchInfo } from '../../Hooks/useSearchInfo';
import Nav from '../Nav';


const ContainerMedia = () => {

    const { media,id } = useParams();
   
    const [data, isLoading, isError] = useSearchInfo(media,id)
   
    return (
        <>
            <div className="poster-path">
                <div className="background-gradient"></div>
                    {data && <img className="poster-path-img"
                            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`} 
                            alt="..."/>}
            </div>
            <Nav media={media} id={id} />
        </>
    )
}

export default ContainerMedia


