/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import colors from '../styles/colors';

import VideoPlayer from './video.component';

import bigPlay from '../assets/img/bigplay.png';
import smallPlay from '../assets/img/smplay.png';

const DocPreviewMain = styled.div`
    width: 100%;
    min-height: 620px;
    // max-height: 60vh;
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
            min-height: 140px;
            /* max-height: 40vh; */
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
            margin: auto;
            cursor: pointer;
        `}
        src={props.imagem}
        alt="play"
        onClick={props.click}
    />
);

export default class ListaDocs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            showPlayer: false,
        };
    }

    componentDidMount() {
        this.windowHeight =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
    }

    togglePlayerHandler = (value) => {
        const doesShow = this.state.showPlayer;
        this.setState({ showPlayer: !doesShow });
        // console.log(value.id, this.state.data.playlist, value.order);
        // this.RenderPlayer(this.state.data.playlist, value.id, value.order);
    };

    ListaDocs() {
        if (this.state.data) {
            return this.state.data.videos.map((value, index) => {
                if (index === 0) {
                    return (
                        <DocPreviewMain bg={value.poster} key={index}>
                            <h1>{value.title}</h1>
                            <Absolute>
                                <PlayButton
                                    click={() =>
                                        this.togglePlayerHandler(value)
                                    }
                                    imagem={bigPlay}
                                />
                            </Absolute>
                            <h3>{value.subtitle}</h3>
                            <button>Saiba +</button>
                        </DocPreviewMain>
                    );
                }
                return (
                    <DocPreviewThumb bg={value.poster} key={index}>
                        <h4>{value.title}</h4>
                        <Absolute>
                            <PlayButton
                                click={() => this.togglePlayerHandler(value)}
                                imagem={smallPlay}
                            />
                        </Absolute>
                        <p>{value.categoria}</p>
                    </DocPreviewThumb>
                );
            });
        } else {
            return (
                <div>
                    <DocPreviewMain>
                        <h1 css={css({ color: colors.vermelho })}>Loading</h1>
                        <h3>&nbsp;</h3>
                        <button>Saiba +</button>
                    </DocPreviewMain>
                    <DocPreviewThumb>
                        <h4>Loading</h4>
                        <p>&nbsp;</p>
                    </DocPreviewThumb>
                </div>
            );
        }
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
        console.log(this.props);
        return (
            <div
                css={css`
                    background: linear-gradient(
                        0deg,
                        ${colors.vermelho},
                        ${colors.branco} 50%
                    );
                    height: calc(${this.windowHeight}px - 90px);
                    min-height: 796px;
                `}
            >
                <div className="lista-docs">{this.ListaDocs()}</div>
            </div>
        );
    }
}
