/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import { Link } from 'react-router-dom';

import Botao from './botao.component';

import bigPlay from '../assets/img/bigplay.png';
import smallPlay from '../assets/img/smplay.png';
import hvSmallPlay from '../assets/img/hv_sm_play.png';
import hvBigPlay from '../assets/img/hv_big_play.png';

const mainHeight = 620;
const thumbHeight = 140;
const previewMargin = 6;

const DocPreviewMain = styled.div`
    width: 100%;
    height: ${mainHeight}px;
    padding: 10% 10%;
    margin-bottom: ${previewMargin}px;
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    position: relative;
    h3 {
        text-transform: none;
    }
    button {
        border: none;
        position: relative;
    }
`;

const DocPreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 992px) {
        flex-direction: column;
        > div {
            margin-bottom: ${previewMargin}px;
        }
        > div:last-child {
            margin-bottom: 0px;
        }
        h4 {
            margin-bottom: 0;
        }
    }
`;

const DocPreviewThumb = (props) => (
    <DocPreviewMain
        css={css`
            width: 32.95%;
            height: ${thumbHeight}px;
            padding: 12px;
            display: inline-block;
            margin: 0 0 0 0;
            p {
                font-family: FedraMono;
                font-weight: normal;
            }

            &:hover {
                box-shadow: inset 0px 0px 0px 2px #fff;
            }
            @media (max-width: 992px) {
                width: 100%;
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

const PlayButton = (props) => {
    return (
        <Link
            css={css`
                margin: auto;
            `}
            to="/video"
        >
            <div
                css={css({
                    cursor: 'pointer',
                    backgroundImage: `url(${props.imagem})`,
                    width: props.size,
                    height: props.size,
                    '&:hover': {
                        backgroundImage: `url(${props.hvimagem})`,
                        width: props.hvsize,
                        height: props.hvsize,
                    },
                })}
                onClick={props.click}
            />
        </Link>
    );
};

export default function ListaDocs(props) {
    const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    const video_list = props.lista.data.videos;
    const lang = props.lang ? props.lang : 'pt';
    const videoCount = video_list.lenght;

    function Lista() {
        if (video_list && video_list.length > 0) {
            // Main video
            const main = video_list[0];
            const main_video = [
                <DocPreviewMain bg={main[lang].poster} key={0}>
                    <h1>{main[lang].title}</h1>
                    <Absolute>
                        <PlayButton
                            click={() => props.playVideo(main)}
                            imagem={bigPlay}
                            hvimagem={hvBigPlay}
                            size={82}
                            hvsize={80}
                        />
                    </Absolute>
                    <h3>{main[lang].subtitle}</h3>
                    <Link to="/saibamais">
                        <Botao>Saiba +</Botao>
                    </Link>
                </DocPreviewMain>,
            ];

            // Thumbs
            let videos = [];
            if (video_list.length > 1) {
                videos.push(
                    video_list.map((value, index) => {
                        if (index > 0) {
                            return (
                                <DocPreviewThumb
                                    bg={value[lang].poster}
                                    key={index}
                                >
                                    <h4>{value[lang].title}</h4>
                                    <Absolute>
                                        <PlayButton
                                            click={() => props.playVideo(value)}
                                            imagem={smallPlay}
                                            hvimagem={hvSmallPlay}
                                            size={42}
                                            hvsize={40}
                                        />
                                    </Absolute>
                                    <p>{value[lang].category}</p>
                                </DocPreviewThumb>
                            );
                        }
                    })
                );
            }

            return (
                <React.Fragment>
                    {main_video}
                    <DocPreviewContainer>{videos}</DocPreviewContainer>
                </React.Fragment>
            );
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

    return (
        <div
            css={css`
                height: calc(${windowHeight}px - 90px);
                background: linear-gradient(
                    0deg,
                    ${colors.vermelho},
                    ${colors.branco} 50%
                );
                min-height: ${windowHeight}px;

                @media (max-width: 992px) {
                    background-attachment: fixed;
                    min-height: ${mainHeight +
                    thumbHeight * (4 - 1) +
                    4 * previewMargin +
                    10}px;
                }
            `}
        >
            <div className="lista-docs limite">{Lista()}</div>
        </div>
    );
}
