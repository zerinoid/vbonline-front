/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.scss';

import Sobre from './components/sobre.component';
import ListaDocs from './components/lista-docs.component';
import VideoPlayer from './components/video.component';
import Botao from './components/botao.component';

import Logo from './assets/img/logo2x.png';

const flexN = 5;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            showPlayer: false,
            currentVideo: null,
        };
    }

    togglePlayerHandler = async (value) => {
        await this.setState({
            currentVideo: value,
            showPlayer: !this.state.showPlayer,
        });
        // const doesShow = this.state.showPlayer;
        // console.log(`value ${value}`);
        console.log(this.state.currentVideo);
        // console.log(`showplayer ${this.state.showPlayer}`);

        const url = `https:www.youtube.com/watch?v=${this.state.currentVideo.id}&list=${this.state.data.playlist}&index=${this.state.currentVideo.order}`;

        console.log(url);

        this.videoJsOptions = {
            // autoplay: true,
            controls: true,
            youtube: {
                iv_load_policy: '3',
            },
            techOrder: ['youtube'],
            sources: [
                {
                    // src: '',
                    src: url,
                    type: 'video/youtube',
                },
            ],
        };
    };

    componentDidMount() {
        axios
            .get('/api/lista-docs')
            .then((res) => this.setState({ data: res.data }))
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="App">
                {this.state.showPlayer ? (
                    <VideoPlayer
                        {...this.videoJsOptions}
                        fechaVideo={this.togglePlayerHandler}
                    />
                ) : (
                    <Router>
                        <nav className="limite">
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
                                    <Botao active>Docs</Botao>
                                </Link>
                            </div>
                            <div
                                css={css({
                                    flex: `1 ${flexN} 30px`,
                                    justifyContent: 'space-between',
                                })}
                            >
                                <Link to="/sobre">
                                    <Botao>VB Online</Botao>
                                </Link>
                                <div
                                    css={css`
                                        justify-content: space-between;
                                        min-width: 58px;
                                    `}
                                >
                                    <Botao lang active>
                                        PT
                                    </Botao>
                                    <Botao lang>EN</Botao>
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
                )}
            </div>
        );
    }
}
