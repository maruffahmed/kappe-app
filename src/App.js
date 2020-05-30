import React, { useState, useEffect } from 'react'
import {Container} from 'react-bootstrap' 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WorksContextProvider from "./context/WorksContext"
import Sidebar from './component/layout/navbar/Sidebar'
import Works from './component/works/Works'
import Contactinfo from './component/layout/Contactinfo'
import Sidenavtoggle from './component/layout/SidenavToogle'
import About from './component/about/About'


function App() { 
    const [SideNavActive, setSideNavActive] = useState(false)


    useEffect(() => {
        console.log(SideNavActive);
    }, [SideNavActive])


    return (
    <Container fluid className = "px-0">
        <WorksContextProvider>

            <Router>
                <Sidebar isactive={SideNavActive} sidenavtoggle = {setSideNavActive}/>
                <main>

                    <Switch>
                        <Route exact path="/">
                            <Works/>
                            <Contactinfo/>
                        </Route>

                        <Route path="/about" component={About}/>

                    </Switch>

                    <Sidenavtoggle sidenavtoggle = {setSideNavActive}/>
                </main>

            </Router>

        </WorksContextProvider>

    </Container>
    );
}

export default App;
