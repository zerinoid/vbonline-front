/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
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

import logo from './assets/img/logo.png';
import logoMob from './assets/img/logo_mb.png';
// import hvlogo from './assets/img/hv_logo2x.png';
import botaoMais from './assets/img/cruz.png';
import botaoMaisApertado from './assets/img/cruzVerm.png';
import fechar from './assets/img/fecharVerm.png';
import vinhetaMp4 from './assets/video/vb_crf25.mp4';
import vinhetaWebM from './assets/video/vb.webm';

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
    const [vinhetaState, setVinhetaState] = useState(true);

    const vinhetaRef = useRef(null);

    // const showVinheta = process.env.NODE_ENV.substring(0, 3) !== "dev"
    const showVinheta = false;

    // Handler menu mobile
    const menuMobileToggle = () => {
        let menuMobileStatus = menuMobileShow;
        setMenuMobileShow(!menuMobileStatus);
    };

    // Player
    const openPlayer = (value) => {
        const vimeoOptions = {
            autoplay: true,
            controls: true,
            id: value.id,
            current_video: value,
            // responsive: true,
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

    useEffect(() => {
        if (appState.data && vinhetaRef.current != null) {
            vinhetaRef.current.onended = function () {
                setVinhetaState(false);
            };
        }
    });

    // Fechar menuMobile
    useEffect(() => {
        if (menuMobileShow) setMenuMobileShow(false);
    }, [pathname]);

    if (appState.data) {
        if (vinhetaState && showVinheta) {
            return (
                <div
                    css={{
                        background: colors.vermelho,
                        height: '100vh',
                    }}
                >
                    <video
                        id="vinheta"
                        ref={vinhetaRef}
                        autoPlay={true}
                        muted="muted"
                    >
                        <source src={vinhetaWebM} type="video/webm" />
                        <source src={vinhetaMp4} type="video/mp4" />
                    </video>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <Global
                        styles={{
                            body: {
                                background:
                                    pathname === '/' &&
                                    `linear-gradient(0deg, ${colors.vermelho}, white 50%)`,
                                backgroundAttachment: 'fixed',
                            },
                        }}
                    ></Global>
                    {appState.showPlayer ? (
                        <VideoPlayer
                            {...appState}
                            fechaVideo={closePlayer}
                            lang={langState}
                        />
                    ) : (
                        <div className="limite">
                            <nav>
                                <div
                                    css={{
                                        flex: '4 1 0',
                                        position: 'relative',
                                        [largeBreakPoint]: {
                                            height: 'unset',
                                            width: 'unset',
                                            position: 'unset',
                                            left: 'unset',
                                        },
                                    }}
                                >
                                    <Link
                                        to="/"
                                        css={{
                                            height: '1.57vw',
                                            width: '10.3vw',
                                            position: 'absolute',
                                            bottom: 0,
                                            [largeBreakPoint]: {
                                                height: 'unset',
                                                position: 'unset',
                                            },
                                        }}
                                    >
                                        <div
                                            css={{
                                                cursor: 'pointer',
                                                backgroundImage: `url(${logo})`,
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                                width: '100%',
                                                height: '100%',
                                                /* '&:hover': { */
                                                /*     backgroundImage: `url(${hvlogo})`, */
                                                /* }, */
                                                [largeBreakPoint]: {
                                                    position: 'relative',
                                                    width:
                                                        pathname !== '/'
                                                            ? 25
                                                            : '57.6px',
                                                    height:
                                                        pathname !== '/'
                                                            ? 25
                                                            : 44,
                                                    left: 0,
                                                    top: 0,
                                                    backgroundImage:
                                                        pathname !== '/'
                                                            ? `url(${fechar})`
                                                            : `url(${logoMob})`,
                                                    /* '&:hover': { */
                                                    /*     backgroundImage: */
                                                    /*         pathname !== '/' */
                                                    /*             ? `url(${fechar})` */
                                                    /*             : `url(${logoMob})`, */
                                                    /* }, */
                                                },
                                            }}
                                        />
                                    </Link>
                                </div>
                                <div
                                    css={css({
                                        flex: '4 1 0',
                                        justifyContent: 'flex-end',
                                        paddingRight: '0.4vw',
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
                                        flex: '1 1 1.5%',
                                        justifyContent: 'space-between',
                                        alignItems: 'baseline',
                                        [largeBreakPoint]: {
                                            display: 'none',
                                        },
                                    })}
                                >
                                    <Link to="/sobre">
                                        <Botao active={pathname === '/sobre'}>
                                            Sobre
                                        </Botao>
                                    </Link>
                                    <div
                                        css={css`
                                            justify-content: space-between;
                                            min-width: 3.7vw;
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
                                        <SaibaMais
                                            {...props}
                                            lang={langState}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    )}
                </div>
            );
        }
    }

    return <div className="App"></div>;
};

export default App;
