import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import Player from '@vimeo/player';

import closeButton from '../assets/img/v_assets/vFechar.png'
import fullScreenButton from '../assets/img/v_assets/vFullscreen.png'
import infoButton from '../assets/img/v_assets/vMais.png'

const VideoPlayer = (props) => {
    const history = useHistory();
    const { pathname } = useLocation();
    const playerRef = useRef(null);

    let player = null;

    // Infobox state
    const [infoBoxState, setInfoBoxState] = useState("none");

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

    // didMount
    useEffect(() => {
        // instantiate vimeo player
        player = new Player('vimeo-player', props);

        // Fullscreen on player load
        player.on('loaded', () => {


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
                <img src={closeButton} onClick={closePlayer} className="bt-player" />
                <img src={fullScreenButton} onClick={enterFullScreen} className="bt-player" />
                <img src={infoButton} onClick={toggleInfoBox} className="bt-player" />
                <div id="info-box" style={{display: infoBoxState}}>
                    aaaaa
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
