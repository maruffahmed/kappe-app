import React, { useState, useEffect } from 'react'
import {Container} from 'react-bootstrap' 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WorksContextProvider from "./context/WorksContext"
import Sidebar from './component/layout/navbar/Sidebar'
import Works from './component/works/Works'
import Contactinfo from './component/layout/Contactinfo'
import Sidenavtoggle from './component/layout/SidenavToogle'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Singlework from './component/works/Singlework'


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
                        <Route path="/contact" component={Contact}/>
                        <Route path="/work/:id" component={Singlework}/>
                        <Route component={Works}/>

                    </Switch>

                    <Sidenavtoggle sidenavtoggle = {setSideNavActive}/>
                </main>

            </Router>

        </WorksContextProvider>

    </Container>
    );
}

export default App;
