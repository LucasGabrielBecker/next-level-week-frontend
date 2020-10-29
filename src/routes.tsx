import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from "./pages/Landing"
import OrphanagesMap from "./pages/OrphanagesMap"
import Orphanage from "./pages/Orphanage"
import CreateOrphanage from "./pages/CreateOrphanage"
import Loginpage from "./pages/LoginPage"
import PasswordForgoten from "./pages/PasswordForgoten"
import NotLoggedIn from "./pages/NotLogged"

import Done from "./pages/Done"
import Delete from "./pages/Delete"



function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/app" component={OrphanagesMap}/>
            <Route path="/orphanages/create" exact component={CreateOrphanage} />
            <Route path="/orphanages/:id" component={Orphanage} />
            <Route path="/login" component={Loginpage}/>
            <Route path="/retrievePassword" component={PasswordForgoten}/>
            <Route path="/pleaseLogin" component={NotLoggedIn}/>
            <Route path="/allDone" component={Done}/>
            <Route path="/delete" component={Delete}/>
        </Switch>
        </BrowserRouter>
    );
}


export default Routes;