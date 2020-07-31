/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';

import bigPlay from '../assets/img/bigplay.png';
import smallPlay from '../assets/img/smplay.png';

import VideoPlayer from './video.component';

const DocPreviewMain = styled.div`
    width: 100%;
    min-height: 620px;
    max-height: 60vh;
    padding: 10% 10%;
    margin-bottom: 10px;
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    position: relative;
    h3 {
        text-transform: none;
    }
`;

const DocPreviewThumb = (props) => (
    <DocPreviewMain
        css={css`
            width: 32%;
            min-height: 100px;
            max-height: 40vh;
            padding: 12px;
            display: inline-block;
            margin-right: 1%;
            p {
                font-family: FedraMono;
                font-weight: normal;
            }
        `}
        {...props}
    />
);

const Absolute = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const PlayButton = (props) => (
    <img
        css={css`
            /* margin: auto auto; */
        `}
        src={props.imagem}
        alt="play"
    />
);

export default class ListaDocs extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     videos: [],
        // };
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
                {
                    id: 'l1ANAdzP5GM',
                    title: 'I Ball or Die',
                    subtitle: 'I came for the hops, stayed for the crack. ',
                    poster: '/img/ballordie.jpg',
                    order: 3,
                },
            ],
        };
    }

    componentDidMount() {
        // axios
        //     .get('/api/lista-docs')
        //     .then((response) => {
        //         this.setState(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    ListaDocs() {
        return this.state.videos.map((value, index) => {
            if (index === 0) {
                return (
                    <DocPreviewMain bg={value.poster} key={index}>
                        <h1>{value.title}</h1>
                        <Absolute>
                            <Link
                                css={css`
                                    margin: auto;
                                `}
                                to={`${this.state.playlist}/${value.id}/${value.order}`}
                            >
                                <PlayButton imagem={bigPlay} />
                            </Link>
                        </Absolute>
                        <h3>{value.subtitle}</h3>
                        <button>Saiba +</button>
                        <Route
                            path="/:playlist/:id/:order"
                            component={this.RenderPlayer}
                        />
                    </DocPreviewMain>
                );
            }
            console.log(smallPlay.clientWidth);
            return (
                <DocPreviewThumb bg={value.poster} key={index}>
                    <h4>{value.title}</h4>
                    <Absolute>
                        <Link
                            css={css`
                                margin: auto;
                            `}
                            to={`${this.state.playlist}/${value.id}/${value.order}`}
                        >
                            <PlayButton imagem={smallPlay} />
                        </Link>
                    </Absolute>
                    <p>Tipo de Material</p>
                </DocPreviewThumb>
            );
        });
    }

    RenderPlayer(props) {
        const videoJsOptions = {
            autoplay: true,
            controls: true,
            youtube: {
                iv_load_policy: '3',
            },
            techOrder: ['youtube'],
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
        return (
            <Router>
                <div className="lista-docs">{this.ListaDocs()}</div>
            </Router>
        );
    }
}
