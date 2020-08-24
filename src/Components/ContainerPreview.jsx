import React from 'react'
import {RiArrowRightLine} from "react-icons/ri";
import { Link} from 'react-router-dom';
import { useSearch } from '../Hooks/useSearch';
import { useTitle } from '../Hooks/useTitle';
import CardContainer from './CardContainer';

const ContainerPreview = ({media, category}) => {
    const [data, isLoading, isError] = useSearch(media,category);
    const title = useTitle(media,category)
    if (isError) return <div>Error...</div>    

    return (
        <div className="containerPreview">
            
            <Link to={`/${media}/${category}/page/1`}> 
                <h2 className="title-tendencias">{title}<RiArrowRightLine color={'#5194e0'} /></h2>
            </Link>
            {
                isLoading && <div>Cargando...</div> 
            }
            {data &&
                <CardContainer media={media} cards={data.results.slice(0,5)}></CardContainer>
            }
        </div>

    )
}

export default ContainerPreview
