/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
import { css, jsx, Global } from '@emotion/core';
import axios from 'axios';
import { Route, Link, useLocation } from 'react-router-dom';
import HoverImage from 'react-hover-image';
import colors from './styles/colors';
import BP from './styles/breakpoints';

import './App.scss';

import Sobre from './components/sobre.component';
import ListaDocs from './components/video-list.component';
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

const App = (props) => {
    // Location
    const { pathname } = useLocation();
    // Dimensions
    const currentWidth = window.innerWidth;

    // State
    const [appState, setAppState] = useState({
        data: null,
    });

    const [langState, setLangState] = useState('pt');
    const [menuMobileShow, setMenuMobileShow] = useState(false);
    const [vinhetaState, setVinhetaState] = useState(true);

    const vinhetaRef = useRef(null);

    //const showVinheta = process.env.NODE_ENV.substring(0, 3) !== 'dev';
    const showVinheta = true;

    // Handler menu mobile
    const menuMobileToggle = () => {
        let menuMobileStatus = menuMobileShow;
        setMenuMobileShow(!menuMobileStatus);
    };

    // Player
    const openPlayer = () => {
        setAppState({
            data: appState.data,
        });
    };

    // Language handler
    const setLangHandler = (lang) => {
        setLangState(lang);
        axios.post(`/api/lang/set/${lang}`);
        setMenuMobileShow(false);
    };

    // Main request
    useEffect(() => {
        axios
            .get('/api/video-list')
            .then((res) =>
                setAppState({
                    data: res.data,
                })
            )
            .catch((error) => console.log(error));
    }, []);

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

    // Vinheta session
    useEffect(() => {
        axios.get('/api/vinheta/get').then((res) => {
            if (res.data === null) {
                axios.post('/api/vinheta/set');
            } else {
                setVinhetaState(false);
            }
        });
    });

    // Close vinheta once it completes
    useEffect(() => {
        if (appState.data && vinhetaRef.current != null) {
            vinhetaRef.current.onended = function () {
                setVinhetaState(false);
            };
        }
    });

    // Close mobile menu
    useEffect(() => {
        if (menuMobileShow) setMenuMobileShow(false);
    }, [pathname]);

    // Close vinheta on click
    const vinhetaHandler = () => {
        setVinhetaState(false);
    };

    const idiomaButtonStyle = { height: '1.57vw' };

    if (appState.data) {

        // background image
        const hasBg = (!!appState.data.bg_img_desktop || !!appState.data.bg_img_mobile);
        const noMobileBg = !!appState.data.bg_img_desktop && !appState.data.bg_img_mobile;
        const bgColor = appState.data.bg_color || '';

        const bg_desktop = hasBg 
            ? `${bgColor} url(${appState.data.bg_img_desktop}) center/cover no-repeat fixed` 
            : `linear-gradient(0deg, ${colors.vermelho}, white 50%) fixed`
        const bg_mobile = hasBg 
            ? (noMobileBg ? bg_desktop : `${bgColor} url(${appState.data.bg_img_mobile}) center/cover no-repeat fixed`)
            : `linear-gradient(0deg, ${colors.vermelho} 5%, white 59%) scroll`

        if (vinhetaState && showVinheta && currentWidth > 992) {
            return (
                <div
                    onClick={vinhetaHandler}
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
                                    `${bg_desktop}`,
                                [BP.small]: {
                                    background:
                                        pathname === '/' &&
                                        `${bg_mobile}`,
                                },
                            },
                        }}
                    ></Global>
                    {
                        <div className="limite">
                            <nav>
                                <div
                                    css={{
                                        flex: '4 1 0',
                                        alignItems: 'center',
                                        [BP.small]: {
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
                                                [BP.small]: {
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
                                                [BP.small]: {
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
                                        <Botao active={true}>
                                            {appState !== null &&
                                            typeof appState !== 'undefined'
                                                ? appState.data.season[
                                                      langState
                                                  ].type
                                                : 'docs'}
                                        </Botao>
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
                                            [BP.small]: {
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
                                        [BP.small]: {
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
                                                setMenuMobileShow={
                                                    setMenuMobileShow
                                                }
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
