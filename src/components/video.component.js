import React, { Component } from "react";
import videojs from "video.js";
// import axios from "axios";

export default class VideoPlayer extends Component {
    componentDidMount() {
        // instantiate Video.js
        this.player = videojs(
            this.videoNode,
            this.props,
            function onPlayerReady() {
                console.log("onPlayerReady", this);
            }
        );
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

// export default class Video extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         return (
//             <div className="videojs-container">
//                 <img alt="pudim" src="http:pudim.com.br/pudim.jpg" />
//             </div>
//         );
//     }
// }
