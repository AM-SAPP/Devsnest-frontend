import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './HomePage';
import Tha15 from './THA/Tha15'
import Tha16a from './THA/16/Card';
import Tha16b from './THA/16/Tha16b';
import Tha17 from './THA/17/Tha17';

const Card = ()=>{
  return (
    <Tha16a src="https://source.unsplash.com/random"/>
  )
}

function Main() {
    return (
        <div>
        <nav>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/tha15" component={Tha15}/>
            <Route path="/tha16a" component={Card}/>
            <Route path="/tha16b" component={Tha16b}/>
            <Route path="/tha17" component={Tha17}/>
          </Switch>
        </nav>
        </div>
    )
}

export default Main;