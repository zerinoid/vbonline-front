/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
// import { Link } from "react-router-dom";
// import axios from "axios";

export default class ListaDocs extends Component {
    state = {
        playlist_id: 'PLjZHtJxNiFBnv5J0G0RXJh7P7yL58zpIg',
        videos: [
            {
                id: 'zynTWAUK5mc',
                title: 'Nome do vídeo 1',
                subtitle: 'Sobre o vídeo 1',
                poster: '/img/seemeagain.jpg',
                order: 1,
            },
            {
                id: 'tsfnuyyjaB0',
                title: 'Nome do vídeo 2',
                subtitle: 'Sobre o vídeo 2',
                poster: '/img/myhops.jpg',
                order: 2,
            },
            {
                id: 'y-G8BlRcRP0',
                title: 'Nome do vídeo 3',
                subtitle: 'Sobre o vídeo 3',
                poster: '/img/cowardscrack.jpg',
                order: 3,
            },
        ],
    };

    render() {
        const style = {
            backgroundImage: `url(${this.state.videos[0].poster})`,
        };

        return (
            <div className="lista-docs">
                <div id="doc1" style={style}>
                    <div className="cartela">
                        <p className="titulo">Pudim</p>
                    </div>
                </div>
            </div>
        );
    }
}
