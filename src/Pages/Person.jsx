import React from 'react'
import { useRouteMatch, useParams, Link, Switch, Route } from 'react-router-dom';
import Creditos from '../Components/MediaDetails/components/Reparto/Creditos';
import InfoPerson from '../Components/MediaDetails/components/Reparto/InfoPerson';


function Person() {

    let { path, url } = useRouteMatch();
    const { id } = useParams();
    
    return (
        <div>
            <ul className="nav-list">
                <li className="list">
                    <Link to={`${url}/info`}>INFORMACION
                </Link></li>
                <li className="list"><Link to={`${url}/credits`}>CREDITOS
                </Link></li>
            </ul>

            <Switch>
                <Route path={`${path}/info`}>
                    <InfoPerson id={id} />
                </Route>
                <Route path={`${path}/credits`}>
                    <Creditos id={id}/>
                </Route>

            </Switch>

            
        </div>
    )
}

export default Person
