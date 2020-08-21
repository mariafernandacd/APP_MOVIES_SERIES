import React from 'react'
import {Route, Link, useRouteMatch, Switch, NavLink} from "react-router-dom";
import Info from './MediaDetails/components/Info';
import Similar from "./MediaDetails/components/Similar";
import Reparto from "./MediaDetails/components/Reparto/Reparto";
import Episodios from './MediaDetails/components/Episodios';
import Videos from './MediaDetails/components/Videos';

const Nav = ({media, id}) => {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <div>
                <ul className="nav-list">
                    <li className="list">
                        <NavLink className="nav-links"  activeClassName="nav--links__active"  to={`${url}/info`}>INFO</NavLink>
                        </li>
                    <li className="list">
                        <NavLink activeClassName="nav--links__active" className="nav-links" to={`${url}/reparto`}>REPARTO</NavLink>
                        </li>
                    <li className="list">
                        <NavLink activeClassName="nav--links__active" className="nav-links" to={`${url}/similares`}>SIMILARES</NavLink>
                        </li>
                    {media === "movie" 
                        ? <li className="list">
                            <NavLink activeClassName="nav--links__active" className="nav-links" to={`${url}/videos`}>VIDEOS</NavLink>
                        </li> 
                        : <li className="list">
                            <NavLink activeClassName="nav--links__active" className="nav-links" to={`${url}/seasons/1`}>EPISODIOS</NavLink>
                        </li> }                
                </ul>
            </div>
            <Switch>
                <Route exact path={path}>
                </Route>
                <Route exact path={`${path}/info`}>
                    <Info media={media} id={id}/>
                </Route>
                <Route exact path={`${path}/similares`}>
                    <Similar media={media} id={id}/>
                </Route>
                <Route exact path={`${path}/reparto`}>
                    <Reparto media={media} id={id}/>
                </Route>
                <Route path={`${path}/seasons/:season`}>
                    <Episodios id={id}/>
                </Route>
                <Route exact path={`${path}/videos`}>
                    <Videos media={media} id={id}/>
                </Route>
            </Switch>
                        
        </div>
    )
}

export default Nav
