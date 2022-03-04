import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Signin from '../src/components/Signin';
import {MoralisProvider} from 'react-moralis'
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateRoutes';





const Routes = () => {

    return (
        <MoralisProvider appId="mjSQM2VyDucibO5Qj4SqPo93D0BkgUJ3EGOmKL6r" serverUrl="https://5aunmir6tmtl.usemoralis.com:2053/server">
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={App} />
                <Route path="/login" exact component={Signin} />
                <Route path="/register" exact component={Signup} />
            </Switch>
        </BrowserRouter>
        </MoralisProvider>
    )
};

export default Routes;
