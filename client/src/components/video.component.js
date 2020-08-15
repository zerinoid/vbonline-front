import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import videojs from 'video.js';
import 'videojs-youtube';

const VideoPlayer = props => {

    const videoNode = useRef();
    const history = useHistory();
    const { pathname } = useLocation();
    let player = null;

    const destroyPlayer = (player) => {
        if (player) player.dispose();
    };

    const closePlayer = () => {
        props.fechaVideo();
        destroyPlayer(player);
        history.push('/');
    }

    // didMount
    useEffect(() => {
        // instantiate Video.js
        player = videojs(
            videoNode.current,
            props,
            function onPlayerReady() {
                // console.log('onPlayerReady', this);
            }
        );

        //adição de botão custom
        let Button = videojs.getComponent('Button');
        let butao = new Button(player, {
            clickHandler: (event) => {
                closePlayer();
            },
        });
        player.addChild(butao);
    }, []);

    // update
    useEffect(() => {
        if(pathname !== "/video"){
            closePlayer();
        }
    });

    return (
        <div>
            <div data-vjs-player>
                <video
                    ref={videoNode}
                    className="video-js"
                ></video>
            </div>
        </div>
    );
}

export default VideoPlayer;