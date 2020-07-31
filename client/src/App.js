import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Sobre from './components/sobre.component';
import ListaDocs from './components/lista-docs.component';

import Logo from './assets/img/logo.png';

function App() {
    return (
        <div className="App">
            <Router>
                <div className="container">
                    <nav className="navbar">
                        <img alt="Logo" src={Logo} />
                        <Link to="/">
                            <button>Docs</button>
                        </Link>
                        <Link to="/sobre">
                            <button>VB Online</button>
                        </Link>
                        <button>pt</button>
                        <button>en</button>
                    </nav>
                    <Route path="/" exact component={ListaDocs} />
                    <Route path="/sobre" component={Sobre} />
                </div>
            </Router>
        </div>
    );
}

export default App;
