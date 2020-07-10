import React, { Component } from "react";
// import axios from "axios";

export default class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="videojs-container">
                <img alt="pudim" src="http://pudim.com.br/pudim.jpg" />
            </div>
        );
    }
}
