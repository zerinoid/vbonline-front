/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import HoverImage from 'react-hover-image';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import playPrev from '../assets/img/play_prev.png';
import playPrevHv from '../assets/img/play_prev_hv.png';
import saibaMais from '../assets/img/saiba_mais.png';
import saibaMaisHv from '../assets/img/saiba_mais_hv.png';
import setaMais from '../assets/img/seta_mais.png';

export default function ListaDocs(props) {
    const video_list = props.lista.data.videos;
    const lang = props.lang ? props.lang : 'pt';

    const DocPreviewContainer = styled.div`
        display: flex;
        justify-content: space-between;
        ${BP.small} {
            flex-direction: column;
            > div {
                margin-bottom: 1rem;
            }
            > div:last-child {
                margin-bottom: 0px;
            }
        }
    `;

    let buttonStyle = {
        height: '1.8vw',
        marginLeft: '0.2vw',
        [BP.small]: {
            marginLeft: '0.5vw',
            height: 25,
        },
    };

    let absoluteStyle = {
        padding: '14% 16%',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        [BP.small]: {
            padding: '20% 10%',
        },
    };

    const DocPreviewMain = styled.div`
        width: 100%;
        padding-bottom: 40.1%;
        margin-bottom: 0.5%;
        background: url(${(props) => props.bg}) center/cover no-repeat;
        color: white;
        position: relative;
        h3 {
            text-transform: none;
        }
        button {
            border: none;
            position: relative;
        }
        ${BP.small} {
            min-height: 274px;
            margin-bottom: 1rem;
            height: calc(100vh - 126px - 1rem);
            padding-bottom: unset;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
    `;

    const DocPreviewThumb = (props) => {
        const [hovered, setHovered] = useState(false);

        buttonStyle = { ...buttonStyle, zIndex: 999 };

        absoluteStyle = {
            ...absoluteStyle,
            padding: '2%',
            display: 'flex',
            justifyContent: 'space-between',
            [BP.small]: null,
        };

        return (
            <DocPreviewMain
                css={css`
                    width: 32.95%;
                    padding-bottom: 11.1%;
                    display: inline-block;
                    margin-bottom: 0;
                    p {
                        font: normal 0.8em FedraMono;
                    }
                    &:hover {
                        box-shadow: inset 0px 0px 0px 2px #fff;
                    }
                    ${BP.small} {
                        min-height: unset;
                        width: 100%;
                        height: 130px;
                    }
                `}
                onMouseEnter={() => {
                    setHovered(true);
                }}
                onMouseLeave={() => {
                    setHovered(false);
                }}
                onClick={props.click}
                {...props}
            >
                <Link to="/video">
                    <div css={absoluteStyle}>
                        <div css={{ width: '50%' }}>{props.children}</div>
                        <img
                            alt=""
                            src={hovered ? playPrevHv : playPrev}
                            css={buttonStyle}
                        />
                    </div>
                </Link>
            </DocPreviewMain>
        );
    };

    if (video_list && video_list.length > 0) {
        // Main video

        const main = video_list[0];
        const main_video = [
            <DocPreviewMain bg={main[lang].poster} key={0}>
                <div css={absoluteStyle}>
                    <h1>{main[lang].title}</h1>
                    <div
                        css={{
                            display: 'flex',
                            alignItems: 'center',
                            [BP.small]: {
                                display: 'block',
                            },
                        }}
                    >
                        <h3
                            css={{
                                margin: '0.4vw 0 0',
                                position: 'relative',
                                top: '-0.4vh',
                                marginRight: '0.3vw',
                                [BP.small]: {
                                    position: 'unset',
                                },
                            }}
                        >
                            {main[lang].subtitle}
                        </h3>
                        <Link to="/video">
                            <HoverImage
                                alt=""
                                src={playPrev}
                                hoverSrc={playPrevHv}
                                onClick={() => props.playVideo(main)}
                                css={buttonStyle}
                            />
                        </Link>
                        <Link to="/saibamais">
                            <HoverImage
                                alt=""
                                src={saibaMais}
                                hoverSrc={saibaMaisHv}
                                css={buttonStyle}
                            />
                        </Link>
                    </div>
                </div>
                <img
                    alt=""
                    src={setaMais}
                    css={{
                        display: 'none',
                        marginBottom: '3vw',
                        height: '4vw',
                        [BP.small]: {
                            display: 'block',
                        },
                    }}
                />
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
                                click={() => props.playVideo(value)}
                            >
                                <h5>{value[lang].title}</h5>
                                <p>{value[lang].category}</p>
                            </DocPreviewThumb>
                        );
                    } else {
                        return null;
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
                    <h5>Loading</h5>
                    <p>&nbsp;</p>
                </DocPreviewThumb>
            </div>
        );
    }
}
