import React, { Component } from 'react';
import axios from "axios";


export default class Sobre extends Component {

    constructor(props){
        super(props);
        this.state = {}
      }

    componentDidMount() {
        axios.get('/api/sobre').then((res) => {
            this.setState(res.data)
        })
    }

    render() {
        return (
            <div className="sobre">{this.state.pt}</div>
        );
    }
}