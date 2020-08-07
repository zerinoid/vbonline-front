import React, { Component } from 'react';
import videojs from 'video.js';
import 'videojs-youtube';
// import axios from "axios";

export default class VideoPlayer extends Component {
    destroyPlayer(player) {
        if (player) player.dispose();
    }

    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(
            this.videoNode,
            this.props,
            function onPlayerReady() {
                // console.log('onPlayerReady', this);
            }
        );

        //adição de botão custom
        let Button = videojs.getComponent('Button');
        let butao = new Button(this.player, {
            clickHandler: (event) => {
                this.props.fechaVideo();
            },
        });
        this.player.addChild(butao);
    }

    // destroy player on unmount
    componentWillUnmount() {
        // this.destroyPlayer(this.player);
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video
                        ref={(node) => (this.videoNode = node)}
                        className="video-js"
                    ></video>
                </div>
            </div>
        );
    }
}
