import React from 'react';
import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Player from '@vimeo/player';

const VideoPlayer = (props) => {
    const history = useHistory();
    const { pathname } = useLocation();
    let player = null;

    const closePlayer = () => {
        props.fechaVideo();
        if(player != null) player.destroy();
        history.push('/');
    };

    // didMount
    useEffect(() => {
        // instantiate vimeo player
        player = new Player('vimeo-player', props);

        // Fullscreen no carregamento do player
        player.on('loaded', () => {
            player
                .requestFullscreen()
                .catch((error) =>
                    console.log('fullscreen não executado', error)
                )
        });

        // Fecha player ao sair de fullscreen
        player.on('fullscreenchange', () => {
            player.getFullscreen()
                .then((fullscreen) => {
                    if(!fullscreen){
                        closePlayer();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }, []);

    // update
    useEffect(() => {
        if (pathname !== '/video') {
            closePlayer();
        }
    });

    return (
        <div id="video-container">
            <div id="vimeo-player"></div>
        </div>
    );
};

export default VideoPlayer;
