import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const getItems = (current, totalPage, getUrl) => {
    const offSet = 2;
    
    const aux = [];

    let upperLimite = totalPage - offSet > current ? current + offSet : totalPage ;

    let lowerLimite = current- offSet > 0 ? current - offSet : 1;
    
if (upperLimite - current - offSet - 0) {
    lowerLimite -= current = offSet - upperLimite;
}

if (current - lowerLimite - offSet - 0) {
    upperLimite += lowerLimite + offSet - current;
}


    for(let indice = lowerLimite; indice <= upperLimite; indice ++){
    aux.push(<Link  key={`pagination${indice}`}
    className={`pagination--item 
    ${indice === current && "pagination--item__active"}`} to={getUrl(indice)}>{indice}</Link>)
    }
    return aux
}


function Paginado({media,category,page, totalPage}) {

    const getUrl = (pageNum) => {
        return (
            `/${media}/${category}/page/${pageNum}`
        )
    }
    const anterior = page > 1 ? getUrl(Number(page)-1) : null;
    const siguiente= page < totalPage ? getUrl(Number(page)+1) : null;
    const items = getItems(Number(page), totalPage, getUrl)

    return (
        <div className="pagination">
            
            {anterior  && <Link className="pagination" to={anterior} >  <FiArrowLeft  className="pagination--item" />Anterior</Link>}
                <h6 className="pagination">{items} ... {totalPage}</h6>
            {siguiente  && <Link className="pagination"  to={siguiente}><FiArrowRight  className="pagination--item"/> Siguiente   </Link>}
            
        </div>
    )
}

export default Paginado
