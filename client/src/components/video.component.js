/** @jsx jsx */
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { jsx } from '@emotion/core';
import Player from '@vimeo/player';
import 'flexboxgrid';
import HoverImage from 'react-hover-image';
import screenfull from 'screenfull';
import { useMediaQuery } from 'react-responsive';
import BP from '../styles/breakpoints';

import UpperBar from './upper-bar.component';

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
    const playerRef = useRef(null);

    // State
    const [infoBoxState, setInfoBoxState] = useState('none');
    const [playlistBoxState, setPlaylistBoxState] = useState('none');
    const [playerState, setPlayerState] = useState(null);

    // First video
    let firstVideo = props.videoList.data.videos.filter(
        (video) => video.order == 1
    );

    // Next video
    let nextVideo = props.videoList.data.videos.filter(
        (video) => video.order == +props.vimeoOptions.current_video.order + 1
    );
    nextVideo = nextVideo.length > 0 ? nextVideo[0] : firstVideo[0];

    // Current video
    let currentVideo = props.videoList.data.videos.filter(
        (video) => video.order == +props.vimeoOptions.current_video.order
    )[0];

    // Playlist videos
    const pVideos = [];
    pVideos.push(
        props.videoList.data.videos.map((value, index) => {
            let video = value;
            let active = currentVideo.id == video.id ? 'active' : '';

            return (
                <div className={`row ${active}`} key={index}>
                    <div className="col-xs-6">
                        <div
                            className="thumb-container"
                            style={{
                                backgroundImage: `url(${
                                    video[props.lang].thumb
                                })`,
                            }}
                            onClick={() => {
                                goToVideo(video.id);
                            }}
                        ></div>
                    </div>
                    <div className="col-xs-6">
                        <p
                            className="playlist-title"
                            onClick={() => {
                                goToVideo(video.id);
                            }}
                        >
                            {video[props.lang].title}
                        </p>
                        <p className="playlist-category">
                            {video[props.lang].category}
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
        if (playerState != null) playerState.destroy();
        props.closePlayer(true);
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

    // go to video
    const goToVideo = (id) => {
        closeBoxes();
        props.changeVideo(id);
    };

    /*
     *  Lifecycle
     */

    // 1) instantiate a new player on first load or if vimeo data changes
    useEffect(() => {
        if (playerState != null) playerState.destroy();
        setPlayerState(new Player('vimeo-player', props.vimeoOptions));
    }, [props.vimeoOptions]);

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
                goToVideo(nextVideo.id);
            });
        }
    });

    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <div id="video-outter">
            <div id="video-container" ref={playerRef}>
                <div id="vimeo-player" />
            </div>
            <UpperBar />
        </div>
    );
};

export default VideoPlayer;
