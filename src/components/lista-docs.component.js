/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
// import { Link } from "react-router-dom";
// import axios from "axios";

const Titulo = (props) => (
    <h1
        css={{
            fontSize: '5em',
        }}
        {...props}
    >
        {props.titulo}
    </h1>
);

const Cartela = (props) => (
    <div
        css={{
            color: 'white',
        }}
        {...props}
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
    constructor(props) {
        super(props);
        this.state = {
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
    }
    render() {
        let lista = [];

        for (const [index, value] of this.state.videos.entries()) {
            lista.push(
                <DocPreview
                    css={{
                        backgroundImage: `url(${value.poster})`,
                    }}
                    key={index}
                >
                    <Cartela>
                        <Titulo titulo={value.title} />
                        <p>{value.subtitle}</p>
                        <button>Saiba +</button>
                    </Cartela>
                </DocPreview>
            );
        }

        return <div className="lista-docs">{lista}</div>;
    }
}
