import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

import VideoPlayer from "./video.component";

import dean from "./mersh.mp4";

export default class ListaDocs extends Component {
    render() {
        return <VideoPlayer src={dean} />;
    }
}
