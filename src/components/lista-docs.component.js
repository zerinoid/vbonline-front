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
        // this.state = { lista: [] };
        this.state = {
            lista: {
                playlist_id: 'PLjZHtJxNiFBnv5J0G0RXJh7P7yL58zpIg',
                videos: [
                    {
                        id: 'zynTWAUK5mc',
                        title: "Maybe One Day She'll See Me Again",
                        subtitle: 'Viper goes in raw.',
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
            },
        };
    }

    // componentDidMount() {
    //     axios
    //         .get("http://localhost:4000/todos/")
    //         .then((response) => {
    //             this.setState({ lista: response.data });
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    ListaDocs() {
        return this.state.lista.videos.map((value, index) => {
            return (
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
        });
    }

    render() {
        console.log(this.state.lista.videos);
        return <div className="lista-docs">{this.ListaDocs()}</div>;
    }
}
