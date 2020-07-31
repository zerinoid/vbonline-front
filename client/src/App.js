/** @jsx jsx */
// import React from 'react';
import { css, jsx } from '@emotion/core';
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
                    <nav
                        css={css`
                            position: relative;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: end;
                            justify-content: space-between;
                            padding: 0.5rem 1rem;
                        `}
                    >
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
