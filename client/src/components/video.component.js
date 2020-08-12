import React from 'react'
import { useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
import videojs from 'video.js';
import 'videojs-youtube';

const VideoPlayer = props => {

    const videoNode = useRef();

    const destroyPlayer = (player) => {
        if (player) player.dispose();
    };

    useEffect(() => {
        // instantiate Video.js
        const player = videojs(
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
                props.fechaVideo();
                destroyPlayer(player);
                window.history.back();
            },
        });
        player.addChild(butao);
    }, [props]);


    // destroy player on unmount
    // componentWillUnmount() {
        // this.destroyPlayer(this.player);
    // }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
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