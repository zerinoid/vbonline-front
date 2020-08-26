import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import Player from '@vimeo/player';
import 'flexboxgrid';

import closeButton from '../assets/img/v_assets/vFechar.png';
import fullScreenButton from '../assets/img/v_assets/vFullscreen.png';
import infoButton from '../assets/img/v_assets/vMais.png';
import playlistButton from '../assets/img/v_assets/vFila.png';
import nextButton from '../assets/img/v_assets/vNext.png';

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

    let nextVideo = props.data.videos.filter(
        (video) => video.order == +vimeoOptions.current_video.order + 1
    );

    nextVideo = nextVideo.length > 0 ? nextVideo[0] : firstVideo[0];

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
    }, [vimeoState, playerState]);

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
            // Close player on video end
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
                <div className="row">
                    <div className="col-xs-6"></div>
                    <div className="col-xs-6">
                        <div className="row video-buttons">
                            <div className="col-xs-2 col-xs-offset-1">
                                <img
                                    src={infoButton}
                                    onClick={toggleInfoBox}
                                    className="bt-player"
                                />
                            </div>
                            <div className="col-xs-2">
                                <img
                                    src={playlistButton}
                                    onClick={togglePlaylistBox}
                                    className="bt-player"
                                />
                            </div>
                            <div className="col-xs-2">
                                <img
                                    src={nextButton}
                                    onClick={goToNextVideo}
                                    className="bt-player"
                                />
                            </div>
                            <div className="col-xs-2">
                                <img
                                    src={fullScreenButton}
                                    onClick={enterFullScreen}
                                    className="bt-player"
                                />
                            </div>
                            <div className="col-xs-2">
                                <img
                                    src={closeButton}
                                    onClick={closePlayer}
                                    className="bt-player"
                                />
                            </div>
                        </div>
                        <div className="row video-boxes">
                            <div className="info-box col-xs-2 col-xs-offset-1">
                                <div
                                    className="info-box-container"
                                    style={{ display: infoBoxState }}
                                >
                                    <p className="info-box-title">
                                        {vimeoState.current_video[lang].title}
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
                                    className="info-box-container"
                                    style={{ display: playlistBoxState }}
                                >
                                    bbb
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
