/** @jsx jsx */
import { useEffect, useRef, useState } from 'react';
import { jsx } from '@emotion/core';
import Player from '@vimeo/player';
import screenfull from 'screenfull';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import isMobile from 'ismobilejs';

import BP from '../styles/breakpoints';
import UpperBar from './upper-bar.component';

const meio_icone = 0.75;

const VideoPlayer = (props) => {
    // Hooks
    const playerRef = useRef(null);

    // State
    const [infoBox, setInfoBox] = useState('none');
    const [playlistBox, setPlaylistBox] = useState('none');
    const [player, setPlayer] = useState(null);

    // Detect device
    const isMobileApple = isMobile().apple.device;

    // Video list
    const videoList = props.videoList;

    // First video
    const firstVideoOrder = videoList.reduce((min, video) => video.order < min ? video.order : min, videoList[0].order);
    const firstVideo = videoList.filter(video => video.order == firstVideoOrder);
    
    // Next video
    let nextVideo = videoList.filter(
        (video) => video.order == +props.currentVideo.order + 1
    );
    nextVideo = nextVideo.length > 0  && typeof nextVideo !== "undefined" ? nextVideo[0] : firstVideo[0];

    // Current video
    let currentVideo = videoList.filter(
        (video) => video.order == +props.currentVideo.order
    )[0];

    // Playlist videos
    const pVideos = [];
    pVideos.push(
        videoList.map((value, index) => {
            let video = value;
            let active = currentVideo.id == video.id ? 'active' : '';

            return (
                <Row className={`play-item ${active}`} key={index}>
                    <Col md={6} xs={12} className="thumb-container">
                        <img
                            className="play-thumb"
                            src={video[props.lang].thumb}
                            alt=""
                            onClick={() => {
                                goToVideo(video.id);
                            }}
                        />
                    </Col>
                    <Col
                        md={6}
                        xs={12}
                        className="playlist-caption"
                        css={{
                            paddingLeft: meio_icone + 'vw',
                            [BP.small]: {
                                paddingLeft: 0,
                            },
                        }}
                    >
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
                    </Col>
                </Row>
            );
        })
    );

    /*
     *  Methods
     */

    // close player and return to home
    const closePlayer = () => {
        if (player != null) player.destroy();
        props.closePlayer(true);
    };

    // enter fullscreen
    const enterFullScreen = () => {
        // Close all boxes
        closeBoxes();
        // Check Apple mobile devices
        if (isMobileApple) {
            player.requestFullscreen();
        }
        // Other devices
        else if (screenfull.isEnabled) {
            screenfull.request(playerRef.current);
        }
    };

    // close all info boxes
    const closeBoxes = () => {
        setInfoBox('none');
        setPlaylistBox('none');
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
        if (player != null) player.destroy();
        setPlayer(new Player('vimeo-player', props.vimeoOptions));
    }, [props.vimeoOptions]);

    // 2) vimeo player events
    useEffect(() => {
        if (player != null) {
            // Player loaded
            player.on('loaded', () => {
                // Minimum volume
                player.getVolume().then((vol) => {
                    if (vol < 0.5) {
                        player.setVolume(0.5);
                    }
                });
            });
            // Go to next video once current video ends
            player.on('ended', () => {
                goToVideo(nextVideo.id);
            });
        }
    });

    // Scroll video player to top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div id="video-outter">
            <div id="video-container" ref={playerRef}>
                <div id="vimeo-player" />
            </div>
            <UpperBar
                vimeoOptions={props.vimeoOptions}
                lang={props.lang}
                playlist={pVideos}
                closePlayer={closePlayer}
                enterFullScreen={enterFullScreen}
                goToVideo={() => goToVideo(nextVideo.id)}
                curatorSeason={props.curatorSeason}
            />
        </div>
    );
};

export default VideoPlayer;
