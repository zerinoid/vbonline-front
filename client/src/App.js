/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
import { css, jsx, Global } from '@emotion/core';
import axios from 'axios';
import { Route, Link, useLocation, useHistory } from 'react-router-dom';
import HoverImage from 'react-hover-image';
import colors from './styles/colors';

import './App.scss';

import Sobre from './components/sobre.component';
import ListaDocs from './components/lista-docs.component';
import Botao from './components/botao.component';
import SaibaMais from './components/saiba-mais.component';
import MenuMobile from './components/menu-mobile.component';

// logo
import logo from './assets/img/logo.png';
import logoMob from './assets/img/logo_mb.png';

// botões nav
import botaoMais from './assets/img/cruz.png';
import botaoMaisApertado from './assets/img/cruzVerm.png';
import fechar from './assets/img/fecharVerm.png';

// vinheta
import vinhetaMp4 from './assets/video/vb_crf25.mp4';
import vinhetaWebM from './assets/video/vb.webm';

// botões idioma
import idiomaPt from './assets/img/PT.png';
import idiomaPtHover from './assets/img/PThv.png';
import idiomaPtActive from './assets/img/PTact.png';
import idiomaEn from './assets/img/EN.png';
import idiomaEnHover from './assets/img/ENhv.png';
import idiomaEnActive from './assets/img/ENact.png';

const largeBreakPoint = '@media (max-width: 992px)';

const App = (props) => {
    // Location
    const { pathname } = useLocation();
    // History
    const history = useHistory();
    // Dimensions
    const currentWidth = window.innerWidth;

    // State
    const [appState, setAppState] = useState({
        data: null,
        vimeoOptions: null,
    });

    const [langState, setLangState] = useState('pt');
    const [menuMobileShow, setMenuMobileShow] = useState(false);
    const [vinhetaState, setVinhetaState] = useState(true);

    const vinhetaRef = useRef(null);

    //const showVinheta = process.env.NODE_ENV.substring(0, 3) !== "dev"
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
            vimeoOptions: vimeoOptions,
        });
    };

    const closePlayer = () =>
        setAppState({
            data: appState.data,
            vimeoOptions: appState.vimeoOptions,
        });

    // Language handler
    const setLangHandler = (lang) => {
        setLangState(lang);
        axios.post(`/api/lang/set/${lang}`);
        setMenuMobileShow(false);
    };

    // Don't allow empty video
    // if (appState.vimeoOptions === null && pathname === '/video') {
    //     history.push('/');
    // }

    // Main request
    useEffect(() => {
        axios
            .get('/api/lista-docs')
            .then((res) =>
                setAppState({
                    data: res.data,
                    vimeoOptions: appState.vimeoOptions,
                })
            )
            .catch((error) => console.log(error));
    }, [appState.vimeoOptions]);

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

    const idiomaButtonStyle = { height: '1.57vw' };

    if (appState.data) {
        if (vinhetaState && showVinheta && currentWidth > 992) {
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
                                    `linear-gradient(0deg, ${colors.vermelho}, white 50%) fixed`,
                                [largeBreakPoint]: {
                                    background:
                                        pathname === '/' &&
                                        `linear-gradient(0deg, ${colors.vermelho} 53%, white 77%) scroll`,
                                },
                            },
                        }}
                    ></Global>
                    {<div className="limite">
                            <nav>
                                <div
                                    css={{
                                        flex: '4 1 0',
                                        alignItems: 'center',
                                        [largeBreakPoint]: {
                                            height: 'unset',
                                            width: 'unset',
                                            position: 'unset',
                                            left: 'unset',
                                        },
                                    }}
                                >
                                    <Link to="/">
                                        <img
                                            alt=""
                                            src={logo}
                                            css={{
                                                width: '12.8vw',
                                                [largeBreakPoint]: {
                                                    display: 'none',
                                                },
                                            }}
                                        />
                                        <img
                                            alt=""
                                            src={
                                                pathname !== '/'
                                                    ? fechar
                                                    : logoMob
                                            }
                                            css={{
                                                width:
                                                    pathname !== '/'
                                                        ? 25
                                                        : 60.2,
                                                display: 'none',
                                                [largeBreakPoint]: {
                                                    display: 'block',
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
                                        flex: '1 1 0.6%',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        [largeBreakPoint]: {
                                            display: 'none',
                                        },
                                    })}
                                >
                                    {/* Sobre */}
                                    <Link to="/sobre">
                                        <Botao active={pathname === '/sobre'}>
                                            {langState === 'pt'
                                                ? 'Sobre'
                                                : 'About'}
                                        </Botao>
                                    </Link>
                                    <div
                                        css={css`
                                            justify-content: space-between;
                                            min-width: 3.5vw;
                                        `}
                                    >
                                        {/* Idiomas PT */}
                                        {langState === 'pt' ? (
                                            <img
                                                alt=""
                                                src={idiomaPtActive}
                                                style={idiomaButtonStyle}
                                            />
                                        ) : (
                                            <HoverImage
                                                src={idiomaPt}
                                                hoverSrc={idiomaPtHover}
                                                onClick={setLangHandler.bind(
                                                    this,
                                                    'pt'
                                                )}
                                                style={idiomaButtonStyle}
                                            ></HoverImage>
                                        )}
                                        {/* Idiomta EN */}
                                        {langState === 'en' ? (
                                            <img
                                                alt=""
                                                src={idiomaEnActive}
                                                style={idiomaButtonStyle}
                                            />
                                        ) : (
                                            <HoverImage
                                                src={idiomaEn}
                                                hoverSrc={idiomaEnHover}
                                                onClick={setLangHandler.bind(
                                                    this,
                                                    'en'
                                                )}
                                                style={idiomaButtonStyle}
                                            ></HoverImage>
                                        )}{' '}
                                    </div>
                                </div>
                            </nav>
                            <div className="conteudo">
                                <MenuMobile
                                    isShown={menuMobileShow}
                                    setLang={setLangHandler}
                                    lang={langState}
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
                    }
                </div>
            );
        }
    }

    return <div className="App"></div>;
};

export default App;
