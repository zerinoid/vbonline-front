import React, { Component } from 'react';
import videojs from 'video.js';
import 'videojs-youtube';
// import axios from "axios";

export default class VideoPlayer extends Component {
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(
            this.videoNode,
            this.props,
            function onPlayerReady() {
                console.log('onPlayerReady', this);
            }
        );

        //adição de botão custom
        let Button = videojs.getComponent('Button');
        let butao = new Button(this.player, {
            clickHandler: function (event) {
                videojs.log('Clicked');
            },
        });
        this.player.addChild(butao);
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
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
