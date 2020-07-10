import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Video from "./components/video.component";

export default class ListaDocs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <Video />;
    }
}
