import React from 'react'
import { useRouteMatch, useParams, Link, Switch, Route, NavLink } from 'react-router-dom';
import Creditos from '../Components/MediaDetails/components/Reparto/Creditos';
import InfoPerson from '../Components/MediaDetails/components/Reparto/InfoPerson';


function Person() {

    let { path, url } = useRouteMatch();
    const { id } = useParams();
    
    return (
        <div>
            <div>
            <ul className="nav-list">
                <li>
                    <NavLink  className="nav-links"  activeClassName="nav--links__active"  to={`${url}/info`}>INFORMACION
                </NavLink></li>
                <li><NavLink  className="nav-links"  activeClassName="nav--links__active"  to={`${url}/credits`}>CREDITOS
                </NavLink></li>
            </ul>
            </div>

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
