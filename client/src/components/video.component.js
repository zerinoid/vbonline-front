/** @jsx jsx */
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { jsx } from '@emotion/core';
import Player from '@vimeo/player';
import 'flexboxgrid';
import HoverImage from 'react-hover-image';
import screenfull from 'screenfull';
import BP from '../styles/breakpoints';

import playlistButtonActive from '../assets/img/v_assets/vPlaylistActive.png';
import playlistButton from '../assets/img/v_assets/vPlaylist.png';
import nextButtonActive from '../assets/img/v_assets/vNextActive.png';
import nextButton from '../assets/img/v_assets/vNext.png';
import infoButtonActive from '../assets/img/v_assets/vInfoActive.png';
import infoButton from '../assets/img/v_assets/vInfo.png';
import fullScreenButtonActive from '../assets/img/v_assets/vFullscreenActive.png';
import fullScreenButton from '../assets/img/v_assets/vFullscreen.png';
import closeButtonActive from '../assets/img/v_assets/vFecharActive.png';
import closeButton from '../assets/img/v_assets/vFechar.png';

const VideoButton = (props) => {
    return (
        <div className="col-xs-2">
            <HoverImage
                src={props.src}
                hoverSrc={props.hoverSrc}
                onClick={props.onClick}
                className="bt-player"
            />
        </div>
    );
};

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

    pVideos.push(
        props.data.videos.map((value, index) => {
            let video = value;
            let active =
                +vimeoState.current_video.order == video.order ? 'active' : '';

            return (
                <div className={`row ${active}`} key={index}>
                    <div className="col-xs-6">
                        <div
                            className="thumb-container"
                            style={{
                                backgroundImage: `url(${video[lang].thumb})`,
                            }}
                        ></div>
                    </div>
                    <div className="col-xs-6">
                        <p className="playlist-title">{video[lang].title}</p>
                        <p className="playlist-category">
                            {video[lang].category}
                        </p>
                    </div>
                </div>
            );
        })
    );

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
        closeBoxes();
        if (screenfull.isEnabled) {
            screenfull.request(playerRef.current);
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
            <div id="video-container" ref={playerRef}>
                <div id="vimeo-player" />
            </div>
            <div id="video-info" className="row">
                <div className="d-none d-md-block col-md-4"></div>
                <div className="video-title col-7 col-md-4">
                    <span
                        css={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                    >
                        {vimeoState.current_video[lang].title}
                    </span>
                    <span css={{ marginLeft: '0.7vw' }}>
                        {vimeoState.current_video[lang].subtitle}
                    </span>
                </div>
                <div
                    className="col-5 col-md-4"
                    css={{
                        zIndex: '1',
                        '.row': { justifyContent: 'flex-end' },
                    }}
                >
                    {/* botoes */}
                    <div className="row video-buttons">
                        <VideoButton
                            src={infoButton}
                            hoverSrc={infoButtonActive}
                            onClick={toggleInfoBox}
                        />
                        <VideoButton
                            src={playlistButton}
                            hoverSrc={playlistButtonActive}
                            onClick={togglePlaylistBox}
                        />
                        <VideoButton
                            src={nextButton}
                            hoverSrc={nextButtonActive}
                            onClick={goToNextVideo}
                        />
                        <VideoButton
                            src={fullScreenButton}
                            hoverSrc={fullScreenButtonActive}
                            onClick={enterFullScreen}
                        />
                        <VideoButton
                            src={closeButton}
                            hoverSrc={closeButtonActive}
                            onClick={closePlayer}
                        />
                    </div>
                    {/* caixas */}
                    <div className="row video-boxes">
                        <div className="info-box col-xs-2">
                            <div
                                className="info-box-container"
                                style={{ display: infoBoxState }}
                            >
                                <p
                                    className="info-box-title"
                                    dangerouslySetInnerHTML={createMarkup(
                                        vimeoState.current_video[lang].title_box
                                            ? vimeoState.current_video[lang]
                                                  .title_box
                                            : vimeoState.current_video[lang]
                                                  .title
                                    )}
                                ></p>
                                <div
                                    className="info-box-caption"
                                    dangerouslySetInnerHTML={createMarkup(
                                        vimeoState.current_video[lang].caption
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
    );
};

export default VideoPlayer;
