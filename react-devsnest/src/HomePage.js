import React from 'react'
import {Link} from 'react-router-dom'
import './homepage.css'
function ThaCard(props){
    return(
        <div className="thacard">
            <h1>{props.title}</h1>
        </div>
    )
}

function HomePage() {
    return (
        <div className="container">
            <Link to="/tha15"><ThaCard title="THA 15"/></Link>
            <Link to="/tha16a"><ThaCard title="THA 16 A"/></Link>
            <Link to="/tha16b"><ThaCard title="THA 16 B"/></Link>
            <Link to="/tha17"><ThaCard title="THA 17"/></Link>
        </div>
    )
}

export default HomePage;
