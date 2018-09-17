import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Contact from "./Contact";
import Home from './Home';
import ChosenDiagnosis from './ChosenDiagnosis';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' component={Home}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/home/:id' component={ChosenDiagnosis}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
