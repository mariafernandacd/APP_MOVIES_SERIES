import React from 'react'
import { Link } from 'react-router-dom'

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
    aux.push(<Link to={getUrl(indice)}>{indice}</Link>)
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
        <div className="paginado">
            {anterior  && <Link to={anterior} >Anterior</Link>}
                <h6 className="items-paginado">{items}</h6>
            {siguiente  && <Link to={siguiente}>Siguiente</Link>}
        </div>
    )
}

export default Paginado
