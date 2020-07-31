/** @jsx jsx */
// import React from 'react';
import { css, jsx } from '@emotion/core';
import './App.scss';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Sobre from './components/sobre.component';
import ListaDocs from './components/lista-docs.component';

import Logo from './assets/img/logo.png';

const flexN = 4;

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
                            padding: 0.5rem 0;
                            min-height: 90px;
                            div {
                                display: flex;
                            }
                            & > div {
                                margin-top: 35px;
                            }
                        `}
                    >
                        <div
                            css={css({
                                flex: `1 ${flexN} 0`,
                            })}
                        >
                            <Link to="/">
                                <img
                                    alt="Logo"
                                    src={Logo}
                                    css={css({
                                        position: 'absolute',
                                        left: -59,
                                        top: 62,
                                        'z-index': 99,
                                    })}
                                />
                            </Link>
                        </div>
                        <div
                            css={css({
                                flex: `${flexN} 1 0`,
                            })}
                        >
                            <Link to="/">
                                <button>Docs</button>
                            </Link>
                        </div>
                        <div
                            css={css({
                                flex: `1 ${flexN} 0`,
                                justifyContent: 'space-between',
                            })}
                        >
                            <Link to="/sobre">
                                <button>VB Online</button>
                            </Link>
                            <div>
                                <button>pt</button>
                                <button>en</button>
                            </div>
                        </div>
                    </nav>
                    <Route path="/" exact component={ListaDocs} />
                    <Route path="/sobre" component={Sobre} />
                </div>
            </Router>
        </div>
    );
}

export default App;
