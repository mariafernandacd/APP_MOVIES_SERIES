import React from 'react'
import { useSearchInfo } from '../../../Hooks/useSearchInfo'

function Videos({media, id}) {

    const [data] = useSearchInfo(media, id, 'videos')

    if(data) {

    return (
        
        <div className="videos">
            {data.results.map(video => (
                <iframe 
                    id="player"           
                    type="text/html"           
                    width="640"           
                    height="360"           
                    src={`http://www.youtube.com/embed/${video.key}`}            
                    frameborder="0"            
                    title={video.name}
                />
                ))}
        </div>
    )
    } return null
}

export default Videos