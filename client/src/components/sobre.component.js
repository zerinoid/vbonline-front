import React, { Component } from 'react';
import axios from 'axios';
import colors from '../styles/colors';

export default class Sobre extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('/api/sobre').then((res) => {
            this.setState(res.data);
        });
    }

    render() {
        return <div className="sobre">{this.state.pt.titulo}</div>;
    }
}
