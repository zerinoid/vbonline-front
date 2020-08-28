import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import Player from '@vimeo/player';
import 'flexboxgrid';
import HoverImage from "react-hover-image";

import closeButton from '../assets/img/v_assets/new/botao_fechar_normal.png';
import closeButtonActive from '../assets/img/v_assets/new/botao_fechar_hover.png';
import fullScreenButton from '../assets/img/v_assets/new/botao_fullscreen_normal.png';
import fullScreenButtonActive from '../assets/img/v_assets/new/botao_fullscreen_hover.png';
import infoButton from '../assets/img/v_assets/new/botao_info_normal.png';
import infoButtonActive from '../assets/img/v_assets/new/botao_info_hover.png';
import playlistButton from '../assets/img/v_assets/new/botao_lista_normal.png';
import playlistButtonActive from '../assets/img/v_assets/new/botao_lista_hover.png';
import nextButton from '../assets/img/v_assets/new/botao_proximo_normal.png';
import nextButtonActive from '../assets/img/v_assets/new/botao_proximo_hover.png';

const VideoPlayer = (props) => {
    // Hooks
    const history = useHistory();
    const { pathname } = useLocation();
    const playerRef = useRef(null);

    // Constants
    const lang = props.lang;
    const vimeoOptions = props.vimeoOptions;

    // State
    const [infoBoxState, setInfoBoxState] = useState('none');
    const [playlistBoxState, setPlaylistBoxState] = useState('none');
    const [vimeoState, setVimeoState] = useState(vimeoOptions);
    const [playerState, setPlayerState] = useState(null);

    // Initial order and next video
    let firstVideo = props.data.videos.filter((video) => video.order == 1);
    // Next video
    let nextVideo = props.data.videos.filter(
        (video) => video.order == +vimeoState.current_video.order + 1
    );
    nextVideo = nextVideo.length > 0 ? nextVideo[0] : firstVideo[0];
    // Current video
    let currentVideo = props.data.videos.filter(
        (video) => video.order == +vimeoState.current_video.order
    )[0];
    // All videos except current
    let remainingVideos = props.data.videos.filter(
        (video) => video.order != +vimeoState.current_video.order
    );

    const pVideos = [];

    

    pVideos.push(props.data.videos.map((value, index) => {
        let video = value;
        let active = +vimeoState.current_video.order == video.order ? "active" : "";

        return (
            <div className={`row ${active}`} key={index}>
                <div className="col-xs-6">
                    <div className="thumb-container" style={{backgroundImage: `url(${video[lang].thumb})`}}></div>
                </div>
                <div className="col-xs-6">
                    <p className="playlist-title">{video[lang].title}</p>
                    <p className="playlist-category">{video[lang].category}</p>
                </div>
            </div>
        );
    }));

    /*
     *  Methods
     */

    // insert html from backend (used in info boxes)
    const createMarkup = (markup) => {
        return { __html: markup };
    };

    // close player and return to home
    const closePlayer = () => {
        props.fechaVideo();
        if (playerState != null) playerState.destroy();
        history.push('/');
    };

    // enter fullscreen
    const enterFullScreen = () => {
        if (!document.fullscreenElement) {
            closeBoxes();
            playerRef.current.requestFullscreen();
        }
    };

    // close all info boxes
    const closeBoxes = () => {
        setInfoBoxState('none');
        setPlaylistBoxState('none');
    };

    // toggle info box
    const toggleInfoBox = () => {
        if (infoBoxState == 'none') {
            closeBoxes();
            setInfoBoxState('block');
        } else {
            setInfoBoxState('none');
        }
    };

    // toggle playlist box
    const togglePlaylistBox = () => {
        if (playlistBoxState == 'none') {
            closeBoxes();
            setPlaylistBoxState('block');
        } else {
            setPlaylistBoxState('none');
        }
    };

    // set vimeo state with next video
    const goToNextVideo = () => {
        closeBoxes();
        setVimeoState({
            autoplay: true,
            controls: true,
            id: nextVideo.id,
            current_video: nextVideo,
            texttrack: lang,
        });
    };

    /*
     *  Lifecycle
     */

    // 1) instantiate a new player on first load or if vimeo data changes
    useEffect(() => {
        if (playerState != null) playerState.destroy();
        setPlayerState(new Player('vimeo-player', vimeoState));
    }, [vimeoState]);

    // 2) if player changes, increment "nextVideo" by 1
    useEffect(() => {
        let order = +vimeoState.current_video.order;
        order += 1;
        nextVideo = props.data.videos.filter((video) => video.order == order);
        nextVideo = nextVideo.length > 0 ? nextVideo[0] : firstVideo[0];
    }, [playerState]);

    // 3) vimeo player events
    useEffect(() => {
        if (playerState != null) {
            // Player loaded
            playerState.on('loaded', () => {
                // Minimum volume
                playerState.getVolume().then((vol) => {
                    if (vol < 0.5) {
                        playerState.setVolume(0.5);
                    }
                });
            });
            // Go to next video once current video ends
            playerState.on('ended', () => {
                goToNextVideo();
            });
        }
    });

    // 4) Close player on route change
    useEffect(() => {
        if (pathname !== '/video') {
            closePlayer();
        }
    });

    return (
        <div id="video-outter">
            <div id="video-container">
                <div id="vimeo-player" ref={playerRef} />
            </div>
            <div id="video-info">
                <div className="row" style={{position: 'relative'}}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: '0.4vh'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'table',
                            zIndex: '-1'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                verticalAlign: 'middle',
                                display: 'table-cell',
                                textAlign: 'center',
                                zIndex: '-1',
                                color: 'white',
                                fontFamily: 'FedraMono',
                            }}>
                                <span style={{
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold'
                                }}>{vimeoState.current_video[lang].title}</span> 
                                <span style={{
                                    marginLeft: '0.7vw'
                                }}>{vimeoState.current_video[lang].subtitle}</span>
                            </div>
                        </div>



                        
                    </div>
                    <div className="col-xs-8"></div>
                    <div className="col-xs-4" style={{ zIndex: '1' }}>
                        <div className="row video-buttons">
                            <div className="col-xs-2 first-button">
                                <HoverImage 
                                    src={infoButton} 
                                    hoverSrc={infoButtonActive}
                                    onClick={toggleInfoBox}
                                    className="bt-player" />
                            </div>
                            <div className="col-xs-2">
                                <HoverImage 
                                    src={playlistButton} 
                                    hoverSrc={playlistButtonActive}
                                    onClick={togglePlaylistBox}
                                    className="bt-player" />
                            </div>
                            <div className="col-xs-2">
                                <HoverImage 
                                    src={nextButton} 
                                    hoverSrc={nextButtonActive}
                                    onClick={goToNextVideo}
                                    className="bt-player" />
                            </div>
                            <div className="col-xs-2">
                                <HoverImage 
                                    src={fullScreenButton} 
                                    hoverSrc={fullScreenButtonActive}
                                    onClick={enterFullScreen}
                                    className="bt-player" />
                            </div>
                            <div className="col-xs-2">
                                <HoverImage 
                                    src={closeButton} 
                                    hoverSrc={closeButtonActive}
                                    onClick={closePlayer}
                                    className="bt-player" />
                            </div>
                        </div>
                        <div className="row video-boxes">
                            <div className="info-box col-xs-2 first-button">
                                <div
                                    className="info-box-container"
                                    style={{ display: infoBoxState }}
                                >
                                    <p className="info-box-title" dangerouslySetInnerHTML={
                                        createMarkup(
                                            vimeoState.current_video[lang].title_box ? 
                                            vimeoState.current_video[lang].title_box :
                                            vimeoState.current_video[lang].title
                                        )
                                    }>
                                    </p>
                                    <div
                                        className="info-box-caption"
                                        dangerouslySetInnerHTML={createMarkup(
                                            vimeoState.current_video[lang]
                                                .caption
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="info-box col-xs-2">
                                <div
                                    className="info-box-container playlist"
                                    style={{ display: playlistBoxState }}
                                >
                                    {pVideos}
                                </div>
                            </div>
                            <div className="col-xs-2"></div>
                            <div className="col-xs-2"></div>
                            <div className="col-xs-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
