/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import './App.scss';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Sobre from './components/sobre.component';
import ListaDocs from './components/lista-docs.component';

import Logo from './assets/img/logo2x.png';

const flexN = 5;

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <nav>
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
                                        left: -38,
                                        top: 43,
                                        'z-index': 99,
                                        width: 200,
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
                                flex: `1 ${flexN} 30px`,
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

                    <div className="conteudo">
                        <Route path="/" exact component={ListaDocs} />
                        <Route path="/sobre" component={Sobre} />
                    </div>
                </Router>
            </div>
        );
    }
}
