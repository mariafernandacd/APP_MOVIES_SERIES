import React from 'react'

import { PropagateLoader } from 'react-spinners';
import CardContainer from '../../../CardContainer';
import { useSearchInfo } from '../../../../Hooks/useSearchInfo';

const Reparto = ({media, id}) => {

    const [data, isLoading, isError] = useSearchInfo(media,id,'credits')
    
    if(isError) return <div>Error...</div>
    
    if (!data || isLoading) return <PropagateLoader />

    if(data){

    return (
        <div className="container-cards">
            {data && <CardContainer media="person" cards={data.cast}/>}
        </div>
    )
    }

}

export default Reparto
