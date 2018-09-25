import React from 'react'
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'

import Main from './../route1/Main'
import Main2 from './../route2/Main'
import About from './../route1/about'
import Topics from './../route1/topic'
import Home from './Home'
export default class IRouter extends React.Component{

    render(){
        return(
       
                  <Router>
                  <Home>
                    
                        <Route path="/main" render={()=>
                            <Main>
                                <Route path="/mian/a" component={About}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                  
                </Home>
                  </Router>
           
        );
    }
}