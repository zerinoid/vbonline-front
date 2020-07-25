/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import axios from "axios";

import VideoPlayer from './video.component';

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
            marginBottom: '10px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}
        {...props}
    />
);

export default class ListaDocs extends Component {
    constructor(props) {
        super(props);
        // this.state = {};
        this.state = {
            playlist: 'PLjZHtJxNiFBnv5J0G0RXJh7P7yL58zpIg',
            videos: [
                {
                    id: 'y-G8BlRcRP0',
                    title: "Maybe One Day She'll See Me Again",
                    subtitle: 'Viper goes in raw.',
                    poster: '/img/seemeagain.jpg',
                    order: 1,
                },
                {
                    id: 'zynTWAUK5mc',
                    title: 'You Wanna See Me Dead Cause Of My Hops',
                    subtitle: 'nostalgia from the future. ',
                    poster: '/img/myhops.jpg',
                    order: 2,
                },
                {
                    id: 'tsfnuyyjaB0',
                    title: "you'll cowards don't even smoke crack",
                    subtitle: "he's like the black jimi hendrix",
                    poster: '/img/cowardscrack.jpg',
                    order: 3,
                },
            ],
        };
    }

    // componentDidMount() {
    //     axios
    //         .get("http://localhost:4000/todos/")
    //         .then((response) => {
    //             this.setState( response.data );
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    ListaDocs() {
        return this.state.videos.map((value, index) => {
            return (
                <Router key={index}>
                    <DocPreview
                        css={{
                            backgroundImage: `url(${value.poster})`,
                        }}
                    >
                        <Cartela>
                            <Link
                                to={`${this.state.playlist}/${value.id}/${value.order}`}
                            >
                                <Titulo titulo={value.title} />
                            </Link>
                            <p>{value.subtitle}</p>
                            <button>Saiba +</button>
                        </Cartela>
                        <Route
                            path="/:playlist/:id/:order"
                            component={this.RenderPlayer}
                        />
                    </DocPreview>
                </Router>
            );
        });
    }

    RenderPlayer(props) {
        const videoJsOptions = {
            autoplay: true,
            controls: true,
            // techOrder: 'youtube',
            sources: [
                {
                    src: `https://www.youtube.com/watch?v=${props.match.params.id}&list=${props.match.params.playlist}&index=${props.match.params.order}`,
                    type: 'video/youtube',
                },
            ],
        };
        return <VideoPlayer {...videoJsOptions} />;
    }

    render() {
        return <div className="lista-docs">{this.ListaDocs()}</div>;
    }
}
