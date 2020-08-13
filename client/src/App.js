/** @jsx jsx */
import { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import { Route, Link, useLocation } from 'react-router-dom';

import './App.scss';

import Sobre from './components/sobre.component';
import ListaDocs from './components/lista-docs.component';
import VideoPlayer from './components/video.component';
import Botao from './components/botao.component';

import logo from './assets/img/logo2x.png';
import hvlogo from './assets/img/hv_logo2x.png';
import SaibaMais from './components/saiba-mais.component';

const flexN = 5;

const App = (props) => {
    const { pathname } = useLocation();

    const [appState, setAppState] = useState({
        data: null,
        showPlayer: false,
        videoJsOptions: null,
    });

    const openPlayer = (value) => {
        const videoJsOptions = {
            // autoplay: true,
            controls: true,
            youtube: {
                iv_load_policy: '3',
            },
            techOrder: ['youtube'],
            sources: [
                {
                    src: `https://www.youtube.com/watch?v=${value.id}&list=${appState.data.playlist}&index=${value.order}`,
                    type: 'video/youtube',
                },
            ],
        };
        setAppState({
            data: appState.data,
            showPlayer: true,
            videoJsOptions: videoJsOptions,
        });
    };

    const closePlayer = () =>
        setAppState({
            data: appState.data,
            showPlayer: false,
            videoJsOptions: appState.videoJsOptions,
        });

    useEffect(() => {
        // console.log(pathname);
        axios
            .get('/api/lista-docs')
            .then((res) =>
                setAppState({
                    data: res.data,
                    showPlayer: appState.showPlayer,
                    videoJsOptions: appState.videoJsOptions,
                })
            )
            .catch((error) => console.log(error));
    }, [appState.showPlayer, appState.videoJsOptions, pathname]);

    if (appState.data) {
        return (
            <div className="App">
                {appState.showPlayer ? (
                    <VideoPlayer
                        {...appState.videoJsOptions}
                        fechaVideo={closePlayer}
                    />
                ) : (
                    <div>
                        <nav className="limite">
                            <div
                                css={css({
                                    flex: `1 ${flexN} 0`,
                                })}
                            >
                                <Link to="/">
                                    <div
                                        css={css({
                                            cursor: 'pointer',
                                            background: `url(${logo}) no-repeat`,
                                            backgroundSize: 'cover',
                                            width: 200,
                                            height: 153,
                                            position: 'absolute',
                                            left: -38,
                                            top: 43,
                                            'z-index': 99,
                                            '&:hover': {
                                                backgroundImage: `url(${hvlogo})`,
                                            },
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
                                    <Botao lingua active>
                                        PT
                                    </Botao>
                                    <Botao lingua>EN</Botao>
                                </div>
                            </div>
                        </nav>
                        <div className="conteudo">
                            {
                                <Route
                                    path="/"
                                    exact
                                    render={(props) => (
                                        <ListaDocs
                                            {...props}
                                            lista={appState}
                                            playVideo={openPlayer}
                                        />
                                    )}
                                />
                            }
                            <Route path="/sobre" component={Sobre} />
                            <Route path="/saibamais" component={SaibaMais} />
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return <div className="App"></div>;
};

export default App;
