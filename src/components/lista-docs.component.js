import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

import VideoPlayer from "./video.component";

import dean from "../media/mersh.mp4";

console.log(dean);

const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [
        {
            src: dean,
            type: "video/mp4",
        },
    ],
};

export default class ListaDocs extends Component {
    render() {
        // console.log({ dean });
        return <VideoPlayer {...videoJsOptions} />;
    }
}
