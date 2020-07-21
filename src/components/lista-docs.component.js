/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';

// import { Link } from "react-router-dom";
// import axios from "axios";

const Cartela = (props) => (
    <div
        css={{
            color: 'white',
        }}
    />
);

const DocPreview = (props) => (
    <div
        css={{
            width: '100%',
            minHeight: 720,
            padding: '210px 135px',
        }}
        {...props}
    />
);

export default class ListaDocs extends Component {
    state = {
        playlist_id: 'PLjZHtJxNiFBnv5J0G0RXJh7P7yL58zpIg',
        videos: [
            {
                id: 'zynTWAUK5mc',
                title: "Maybe One Day She'll See Me Again",
                subtitle: `Viper goes in raw.`,
                poster: '/img/seemeagain.jpg',
                order: 1,
            },
            {
                id: 'tsfnuyyjaB0',
                title: 'You Wanna See Me Dead Cause Of My Hops',
                subtitle: 'Sobre o vídeo 2',
                poster: '/img/myhops.jpg',
                order: 2,
            },
            {
                id: 'y-G8BlRcRP0',
                title: "you'll cowards don't even smoke crack",
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
                        <h1 className="titulo">{this.state.videos[0].title}</h1>
                        <p>{this.state.videos[0].subtitle}</p>
                        <button>Saiba +</button>
                    </div>
                </div>

                <DocPreview css={style}>
                    <Cartela />
                </DocPreview>
            </div>
        );
    }
}
