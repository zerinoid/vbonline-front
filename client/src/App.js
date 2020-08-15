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
import SaibaMais from './components/saiba-mais.component';
import MenuMobile from './components/menu-mobile.component';

import logo from './assets/img/logo2x.png';
import hvlogo from './assets/img/hv_logo2x.png';
import botaoMais from './assets/img/cruz.png';
import botaoMaisApertado from './assets/img/cruzVerm.png';

const flexN = 5;

const largeBreakPoint = '@media (max-width: 992px)';

const App = (props) => {
    // Location
    const { pathname } = useLocation();

    // State
    const [appState, setAppState] = useState({
        data: null,
        showPlayer: false,
        videoJsOptions: null,
    });

    const [langState, setLangState] = useState('pt');

    const [menuMobileShow, setMenuMobileShow] = useState(false);

    // Handler menu mobile
    const menuMobileToggle = () => {
        let menuMobileStatus = menuMobileShow;
        setMenuMobileShow(!menuMobileStatus);
    };

    // Player
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

    // Language handler
    const setLangHandler = (lang) => {
        setLangState(lang);
        axios.post(`/api/lang/set/${lang}`);
    };

    // Main request
    useEffect(() => {
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
    }, [appState.showPlayer, appState.videoJsOptions]);

    // Default language
    useEffect(() => {
        axios.get('/api/lang/get').then((res) => {
            if(res.data === null){
                axios.post('/api/lang/set/pt');
            } else {
                setLangState(res.data);
            }
        });
    }, []);

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
                                            [largeBreakPoint]: {
                                                position: 'relative',
                                                width: 90,
                                                height: 69,
                                                left: 0,
                                                top: 0,
                                                '&:hover': {
                                                    backgroundImage: `url(${logo})`,
                                                },
                                            },
                                        })}
                                    />
                                </Link>
                            </div>
                            <div
                                css={css({
                                    flex: `${flexN} 1 0`,
                                    [largeBreakPoint]: {
                                        justifyContent: 'flex-end',
                                    },
                                })}
                            >
                                <Link to="/">
                                    <Botao active={true}>Docs</Botao>
                                </Link>
                                <div
                                    css={css({
                                        display: 'none',
                                        background: menuMobileShow
                                            ? `url(${botaoMaisApertado})`
                                            : `url(${botaoMais})`,
                                        backgroundSize: '25px',
                                        width: 25,
                                        height: 25,
                                        marginLeft: 10,
                                        cursor: 'pointer',
                                        [largeBreakPoint]: {
                                            display: 'block',
                                        },
                                    })}
                                    onClick={menuMobileToggle}
                                />
                            </div>
                            <div
                                css={css({
                                    flex: `1 ${flexN} 30px`,
                                    justifyContent: 'space-between',
                                    [largeBreakPoint]: {
                                        display: 'none',
                                    },
                                })}
                            >
                                <Link to="/sobre">
                                    <Botao active={pathname === '/sobre'}>
                                        VB Online
                                    </Botao>
                                </Link>
                                <div
                                    css={css`
                                        justify-content: space-between;
                                        min-width: 58px;
                                    `}
                                >
                                    <Botao
                                        onClick={setLangHandler.bind(
                                            this,
                                            'pt'
                                        )}
                                        lingua
                                        active={langState === 'pt'}
                                    >
                                        PT
                                    </Botao>
                                    <Botao
                                        onClick={setLangHandler.bind(
                                            this,
                                            'en'
                                        )}
                                        lingua
                                        active={langState === 'en'}
                                    >
                                        EN
                                    </Botao>
                                </div>
                            </div>
                        </nav>
                        <div className="conteudo">
                            <MenuMobile isShown={menuMobileShow} />
                            {
                                <Route
                                    path="/"
                                    exact
                                    render={(props) => (
                                        <ListaDocs
                                            {...props}
                                            lista={appState}
                                            lang={langState}
                                            playVideo={openPlayer}
                                        />
                                    )}
                                />
                            }
                            <Route path="/sobre" render={(props) => (
                                <Sobre 
                                    {...props} 
                                    lang={langState} />
                            )} />
                            <Route path="/saibamais" render={(props) => (
                                <SaibaMais 
                                    {...props} 
                                    lang={langState} />
                            )} />
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return <div className="App"></div>;
};

export default App;
