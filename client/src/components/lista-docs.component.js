/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import HoverImage from 'react-hover-image';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import VideoPlayer from './video.component';
import playPrev from '../assets/img/play_prev.png';
import playPrevHv from '../assets/img/play_prev_hv.png';
import saibaMais from '../assets/img/saiba_mais.png';
import saibaMaisHv from '../assets/img/saiba_mais_hv.png';
import setaMais from '../assets/img/seta_mais.png';

export default function ListaDocs(props) {
    const lang = props.lang ? props.lang : 'pt';
    const videoList = props.lista.data.videos;

    const [showPlayer, setShowPlayer] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [vimeoOptions, setVimeoOptions] = useState({
        autoplay: true,
        controls: true,
        id: null,
        current_video: null,
        texttrack: lang,
    });

    // #1 set current video
    const playerHandler = (id) => {
        setCurrentVideo(videoList.filter((video) => video.id == id)[0]);
    };

    // #2 vimeo options with data from clicked video
    useEffect(() => {
        if (currentVideo != null) {
            setVimeoOptions({
                autoplay: true,
                controls: true,
                id: currentVideo.id,
                current_video: currentVideo,
                texttrack: lang,
            });
        }
    }, [currentVideo]);

    // #3 show player
    useEffect(() => {
        if (vimeoOptions.id != null) {
            setShowPlayer(true);
        }
    }, [vimeoOptions]);

    // #4 close player
    const closePlayer = () => {
        setShowPlayer(false);
        setCurrentVideo(null);
    };

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
                <div css={absoluteStyle}>
                    <div css={{ width: '50%' }}>{props.children}</div>
                    <img
                        alt=""
                        src={hovered ? playPrevHv : playPrev}
                        css={buttonStyle}
                    />
                </div>
            </DocPreviewMain>
        );
    };

    if (videoList && videoList.length > 0) {
        // Main video

        const main = videoList[0];
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
                        <HoverImage
                            alt=""
                            src={playPrev}
                            hoverSrc={playPrevHv}
                            onClick={() => playerHandler(main.id)}
                            css={buttonStyle}
                        />
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
                <a href="#firstThumb" css={{ zIndex: 1010 }}>
                    <img
                        alt=""
                        src={setaMais}
                        css={{
                            display: 'none',
                            [BP.small]: {
                                marginBottom: '2.3vw',
                                height: '2.5vw',
                                display: 'block',
                            },
                            '@media(max-width: 576px)': {
                                marginBottom: '3vw',
                                height: '4vw',
                            },
                        }}
                    />
                </a>
            </DocPreviewMain>,
        ];

        // Thumbs
        let videos = [];
        if (videoList.length > 1) {
            videos.push(
                videoList.map((value, index) => {
                    if (index > 0) {
                        return (
                            <DocPreviewThumb
                                bg={value[lang].poster}
                                key={index}
                                onClick={() => playerHandler(value.id)}
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

        if (!showPlayer) {
            return (
                <React.Fragment>
                    {main_video}
                    <DocPreviewContainer>
                        <a id="firstThumb" />
                        {videos}
                    </DocPreviewContainer>
                </React.Fragment>
            );
        } else {
            if (vimeoOptions.id != null) {
                return (
                    <VideoPlayer
                        {...props}
                        closePlayer={closePlayer}
                        changeVideo={playerHandler}
                        videoList={props.lista}
                        vimeoOptions={vimeoOptions}
                    />
                );
            }
            return <div>Loading</div>;
        }
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
