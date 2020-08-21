/** @jsx jsx */
import { useState, useEffect } from 'react';
import { css, jsx, Global } from '@emotion/core';
import axios from 'axios';
import { Route, Link, useLocation, useHistory } from 'react-router-dom';
import colors from './styles/colors';

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
import fechar from './assets/img/fecharVerm.png';

const largeBreakPoint = '@media (max-width: 992px)';

const App = (props) => {
    // Location
    const { pathname } = useLocation();
    // History
    const history = useHistory();
    // State
    const [appState, setAppState] = useState({
        data: null,
        showPlayer: false,
        vimeoOptions: null,
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
        console.log(value);
        const vimeoOptions = {
            autoplay: true,
            controls: true,
            id: value.id,
            responsive: true,
            texttrack: langState,
        };
        setAppState({
            data: appState.data,
            showPlayer: true,
            vimeoOptions: vimeoOptions,
        });
    };

    const closePlayer = () =>
        setAppState({
            data: appState.data,
            showPlayer: false,
            vimeoOptions: appState.vimeoOptions,
        });

    // Language handler
    const setLangHandler = (lang) => {
        setLangState(lang);
        axios.post(`/api/lang/set/${lang}`);
        setMenuMobileShow(false);
    };

    // Don't allow empty video
    if (appState.vimeoOptions === null && pathname === '/video') {
        history.push('/');
    }

    // Main request
    useEffect(() => {
        axios
            .get('/api/lista-docs')
            .then((res) =>
                setAppState({
                    data: res.data,
                    showPlayer: appState.showPlayer,
                    vimeoOptions: appState.vimeoOptions,
                })
            )
            .catch((error) => console.log(error));
    }, [appState.showPlayer, appState.vimeoOptions]);

    // Default language
    useEffect(() => {
        axios.get('/api/lang/get').then((res) => {
            if (res.data === null) {
                axios.post('/api/lang/set/pt');
            } else {
                setLangState(res.data);
            }
        });
    }, []);

    // Fechar menuMobile
    useEffect(() => {
        if (menuMobileShow) setMenuMobileShow(false);
    }, [pathname]);

    if (appState.data) {
        return (
            <div className="App">
                <Global
                    styles={{
                        body: {
                            background: `linear-gradient(0deg, ${colors.vermelho}, white 50%)`,
                            backgroundAttachment: 'fixed',
                        },
                    }}
                ></Global>
                {appState.showPlayer ? (
                    <VideoPlayer
                        {...appState.vimeoOptions}
                        fechaVideo={closePlayer}
                    />
                ) : (
                    <div className="limite">
                        <nav>
                            <div
                                css={css({
                                    flex: '1 1 0',
                                })}
                            >
                                <Link to="/">
                                    <div
                                        css={css({
                                            cursor: 'pointer',
                                            backgroundImage: `url(${logo})`,
                                            backgroundRepeat: 'no-repeat',
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
                                                width:
                                                    pathname !== '/'
                                                        ? 25
                                                        : '57.6px',
                                                height:
                                                    pathname !== '/' ? 25 : 44,
                                                left: pathname !== '/' ? 7 : 0,
                                                top: 0,
                                                backgroundImage:
                                                    pathname !== '/' &&
                                                    `url(${fechar})`,
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
                                    flex: '5 1 0',
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
                                    flex: '1 1 30px',
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
                            <MenuMobile
                                isShown={menuMobileShow}
                                setLang={setLangHandler}
                                langState={langState}
                                pathname={pathname}
                            />
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
                            <Route
                                path="/sobre"
                                render={(props) => (
                                    <Sobre {...props} lang={langState} />
                                )}
                            />
                            <Route
                                path="/saibamais"
                                render={(props) => (
                                    <SaibaMais {...props} lang={langState} />
                                )}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return <div className="App"></div>;
};

export default App;
