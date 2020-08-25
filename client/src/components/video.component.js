import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import Player from '@vimeo/player';
import 'flexboxgrid';

import closeButton from '../assets/img/v_assets/vFechar.png'
import fullScreenButton from '../assets/img/v_assets/vFullscreen.png'
import infoButton from '../assets/img/v_assets/vMais.png'
import playlistButton from '../assets/img/v_assets/vFila.png'
import nextButton from '../assets/img/v_assets/vNext.png'

const VideoPlayer = (props) => {
    const history = useHistory();
    const { pathname } = useLocation();
    const playerRef = useRef(null);

    let player = null;

    // Infobox state
    const [infoBoxState, setInfoBoxState] = useState("none");
    const [playlistBoxState, setPlaylistBoxState] = useState("none");

    // Methods
    const closePlayer = () => {
        props.fechaVideo();
        if(player != null) player.destroy();
        history.push('/');
    };

    const enterFullScreen = () => {
        if (!document.fullscreenElement) {
            playerRef.current.requestFullscreen();
        } 
    };

    const toggleInfoBox = () => {
        if(infoBoxState == "none"){
            setInfoBoxState("block");
        } else {
            setInfoBoxState("none");
        }
    };
    
    const togglePlaylistBox = () => {
        if(playlistBoxState == "none"){
            setPlaylistBoxState("block");
        } else {
            setPlaylistBoxState("none");
        }
    };

    const goToNextVideo = () => {};

    // didMount
    useEffect(() => {
        // Instantiate vimeo player
        player = new Player('vimeo-player', props);

        // Player loaded
        player.on('loaded', () => {

            // Minimum volume
            player.getVolume().then((vol) => {
                if(vol < 0.5){
                    player.setVolume(0.5);
                }
            });

            // player
            //     .requestFullscreen()
            //     .catch((error) =>
            //         console.log('fullscreen não executado', error)
            //     )
        });

        // Close player on exit fullscreen
        // player.on('fullscreenchange', () => {
        //     player.getFullscreen()
        //         .then((fullscreen) => {
        //             if(!fullscreen){
        //                 closePlayer();
        //             }
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // });

        // Close player on video end
        player.on('ended', () => {
            closePlayer();
        });

    }, []);

    // Close player on route change
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
                                <img src={infoButton} onClick={toggleInfoBox} className="bt-player" />
                            </div>
                            <div className="col-xs-2">
                                <img src={playlistButton} onClick={togglePlaylistBox} className="bt-player" />
                            </div>
                            <div className="col-xs-2">
                                <img src={nextButton} onClick={goToNextVideo} className="bt-player" />
                            </div>
                            <div className="col-xs-2">
                                <img src={fullScreenButton} onClick={enterFullScreen} className="bt-player" />
                            </div>
                            <div className="col-xs-2">
                                <img src={closeButton} onClick={closePlayer} className="bt-player" />
                            </div>
                        </div>
                        <div className="row video-boxes">
                            <div className="info-box col-xs-2 col-xs-offset-1">
                                <div style={{display: infoBoxState}}>
                                    aaa
                                </div>
                            </div>
                            <div className="info-box col-xs-2">
                                <div style={{display: playlistBoxState}}>
                                    bbb
                                </div>
                            </div>
                            <div className="col-xs-2">
                                3
                            </div>
                            <div className="col-xs-2">
                                F
                            </div>
                            <div className="col-xs-2">
                                C
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    );
};

export default VideoPlayer;
