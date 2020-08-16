import React from 'react';
import { useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Player from '@vimeo/player';
// import 'videojs-youtube';

const VideoPlayer = (props) => {
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
    };

    // didMount
    useEffect(() => {
        // instantiate vimeo player
        player = new Player('vimeo-recipient', { id: 149458592 });

        player.on('play', function () {
            console.log('played the video!');
        });
    }, []);

    // update
    useEffect(() => {
        if (pathname !== '/video') {
            closePlayer();
        }
    });

    return (
        <div>
            <div id="vimeo-recipient"></div>
        </div>
    );
};

export default VideoPlayer;
