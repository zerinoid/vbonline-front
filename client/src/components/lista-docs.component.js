/** @jsx jsx */
// import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Botao from './botao.component';

import bigPlay from '../assets/img/bigplay.png';
import smallPlay from '../assets/img/smplay.png';

const DocPreviewMain = styled.div`
    width: 100%;
    min-height: 620px;
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
    button {
        border: none;
    }
`;

const DocPreviewThumb = (props) => (
    <DocPreviewMain
        css={css`
            width: 32%;
            min-height: 140px;
            padding: 12px;
            display: inline-block;
            margin: 0 1% 0 0;
            p {
                font-family: FedraMono;
                font-weight: normal;
            }

            &:hover {
                box-shadow: inset 0px 0px 0px 2px #fff;
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
    <Link
        css={css`
            margin: auto;
        `}
        to="/video"
    >
        <img
            css={css`
                margin: auto;
                cursor: pointer;
            `}
            src={props.imagem}
            alt="play"
            onClick={props.click}
        />
    </Link>
);

export default function ListaDocs(props) {
    const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    function Lista() {
        if (props.lista.data.videos) {
            return props.lista.data.videos.map((value, index) => {
                if (index === 0) {
                    return (
                        <DocPreviewMain bg={value.poster} key={index}>
                            <h1>{value.title}</h1>
                            <Absolute>
                                <PlayButton
                                    click={() => props.playVideo(value)}
                                    imagem={bigPlay}
                                />
                            </Absolute>
                            <h3>{value.subtitle}</h3>
                            <Botao>Saiba +</Botao>
                        </DocPreviewMain>
                    );
                }
                return (
                    <DocPreviewThumb bg={value.poster} key={index}>
                        <h4>{value.title}</h4>
                        <Absolute>
                            <PlayButton
                                click={() => props.playVideo(value)}
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

    return (
        <div
            css={css`
                background: linear-gradient(
                    0deg,
                    ${colors.vermelho},
                    ${colors.branco} 50%
                );
                height: calc(${windowHeight}px - 90px);
                min-height: 796px;
            `}
        >
            <Router>
                <div className="lista-docs limite">{Lista()}</div>
            </Router>
        </div>
    );
}
