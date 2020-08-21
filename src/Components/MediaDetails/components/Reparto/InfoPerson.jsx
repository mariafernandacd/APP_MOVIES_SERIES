import React from 'react'
import { useSearchInfo } from '../../../../Hooks/useSearchInfo'
import SocialMedia from '../../../socialMedia/SocialMedia';

const InfoPerson = ({id}) => {
    const [data] = useSearchInfo("person",id);
    const [externalIds] = useSearchInfo("person", id, "external_ids");

    if(data && externalIds){
        const { facebook_id, imdb_id, instagram_id, twitter_id } = externalIds
        return (
            <div className="info-person">
                <div className="info-img">
                    <img
                    src={`https://image.tmdb.org/t/p/w342/${data.profile_path}`}
                    alt={`portada de ${data.name}`}
                    />
                    <h3 className="info-img">{data.name|| data.title}</h3>
                    <p>{data.biography}</p>
                    {externalIds && (
                    <SocialMedia 
                    linksIds={{facebook_id, 
                                imdb_id, 
                                instagram_id, 
                                twitter_id, 
                                homepage: data.homepage
                            }}
                        />
                    )}
                </div>
            </div>
        )
    }
   return null;
}

export default InfoPerson
