/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.scss';

import Sobre from './components/sobre.component';
import ListaDocs from './components/lista-docs.component';
import VideoPlayer from './components/video.component';

import Logo from './assets/img/logo2x.png';

const flexN = 5;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            showPlayer: false,
        };
    }

    togglePlayerHandler = (value) => {
        const doesShow = this.state.showPlayer;
        this.setState({ showPlayer: !doesShow });
        console.log(value);
        return this.RenderPlayer(
            value.id,
            this.state.data.playlist,
            value.order
        );
    };

    RenderPlayer(id, playlist, order) {
        const videoJsOptions = {
            autoplay: true,
            controls: true,
            youtube: {
                iv_load_policy: '3',
            },
            techOrder: ['youtube'],
            sources: [
                {
                    src: `https://www.youtube.com/watch?v=${id}&list=${playlist}&index=${order}`,
                    type: 'video/youtube',
                },
            ],
        };
        return <VideoPlayer {...videoJsOptions} />;
    }

    componentDidMount() {
        axios
            .get('/api/lista-docs')
            .then((res) => this.setState({ data: res.data }))
            .catch((error) => console.log(error));
    }

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
                        {this.state.data ? (
                            <Route
                                path="/"
                                exact
                                render={(props) => (
                                    <ListaDocs
                                        {...props}
                                        lista={this.state}
                                        playVideo={this.togglePlayerHandler}
                                    />
                                )}
                            />
                        ) : (
                            <div>ERRO</div>
                        )}
                        <Route path="/sobre" component={Sobre} />
                    </div>
                </Router>
            </div>
        );
    }
}
