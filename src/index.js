import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Connection from './containers/Connection/Connection';
import Home from './containers/Home/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className='App'>
            <Header />
            <Route exact path='/' component={Home} />
            <Route exact path='/connection' component={Connection} />
            <Footer />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
