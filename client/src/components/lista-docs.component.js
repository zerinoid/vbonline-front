/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import HoverImage from 'react-hover-image';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import VideoPlayer from './video.component';
import Play from '../assets/img/play_normal.png';
import PlayHv from '../assets/img/play_hover.png';
import playPrev from '../assets/img/play_prev.png';
import playPrevHv from '../assets/img/play_prev_hv.png';
import saibaMais from '../assets/img/saiba_mais.png';
import saibaMaisHv from '../assets/img/saiba_mais_hv.png';
import setaNext from '../assets/img/arrow_next.png';
import setaPrev from '../assets/img/arrow_prev.png';

// Slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={setaNext}
            alt="next"
            className={className}
            style={{
                ...style,
                right: '0.6vw',
                width: '1vw',
                height: 'auto',
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            src={setaPrev}
            alt="prev"
            className={className}
            style={{
                ...style,
                zIndex: '1',
                left: '0.6vw',
                width: '1vw',
                height: 'auto',
            }}
            onClick={onClick}
        />
    );
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export default function ListaDocs(props) {
    const lang = props.lang ? props.lang : 'pt';
    const isMobile = useMediaQuery({ query: '(max-width: 767.99px)' });

    const [showPlayer, setShowPlayer] = useState(false);
    const [videoList, setVideoList] = useState(props.lista.data.videos);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [vimeoOptions, setVimeoOptions] = useState({
        autoplay: true,
        controls: true,
        id: null,
        current_video: null,
        texttrack: lang,
    });
    const [buttonConfig, setButtonConfig] = useState(null);

    // Button request
    useEffect(() => {
        axios
            .get('/api/btn_config')
            .then((res) => {
                if (res.data.buttons) {
                    setButtonConfig(res.data.buttons);
                }
            })
            .catch((error) => console.log(error));
    }, []);

    // #1 set current video
    const playerHandler = (videoId, isProgram = false, group = null) => {
        if (isProgram && group !== null) {
            setVideoList(group[videoId]);
        } else {
            let videoFilter = videoList.filter(
                (video) => video.id == videoId
            )[0];
            setCurrentVideo(videoFilter);
        }
    };

    // #1-1 Set video from group
    useEffect(() => {
        if (!arraysEqual(videoList, props.lista.data.videos)) {
            let firstVideo = videoList.reduce(
                (min, video) => (video.order < min ? video.order : min),
                videoList[0].order
            );
            setCurrentVideo(
                videoList.filter((video) => video.order == firstVideo)[0]
            );
        }
    }, [videoList]);

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
            props.setMenuMobileShow(false);
            setShowPlayer(true);
        }
    }, [vimeoOptions]);

    // #4 close player
    const closePlayer = () => {
        setShowPlayer(false);
        setCurrentVideo(null);
        setVideoList(props.lista.data.videos);
    };

    // #5 if lang changes, switch video id with language specific id (if present)
    useEffect(() => {
        videoList.map(video => {
            let vLang = video[lang][`id_${lang}`];
            if(vLang !== '' && typeof vLang !== "undefined"){
                video.id = vLang;
            }
        });
    }, [lang]);

    const PreviewContainer = styled.div`
        margin-top: 0.6vw;
        ${BP.small} {
            margin-top: 0.33rem;
            div {
                height: 25vh;
            }
        }
    `;

    let buttonStyle = {
        height: '1.8vw',
        marginLeft: '0.2vw',
        [BP.small]: {
            height: 25,
        },
    };

    let buttonStyleBig = {
        height: '7vw',
        [BP.small]: {
            height: '25vw',
        },
    };

    let absoluteStyle = {
        padding: '14% 16%',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        [BP.small]: {
            padding: '10% 10%',
        },
        [BP.extraSmall]: {
            padding: '20% 10%',
        }
    };

    let absoluteStyleBig = {
        ...absoluteStyle,
        display: 'flex',
        justifyContent: 'center',
    };

    const BasePreview = styled.div`
        width: 100%;
        padding-bottom: 40.1%;
        background: url(${(props) => props.bg}) center/cover no-repeat;
        color: white;
        position: relative;
        flex: 1;
        h3 {
            text-transform: none;
        }
        button {
            border: none;
            position: relative;
        }
        ${BP.small} {
            // min-height: 274px;
            padding-bottom: unset;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
    `;

    if (buttonConfig !== null && typeof buttonConfig !== 'undefined') {
        var playImageBig = buttonConfig.botaoPlay.options.grande;
        var hideSaibaMais = buttonConfig.saibaMais.options.hide;
    }

    const MainPreview = (props) => {
        const [hovered, setHovered] = useState(false);

        return (
            <BasePreview
                bg={props.bg}
                onClick={props.onClick}
                onMouseEnter={() => {
                    setHovered(true);
                }}
                onMouseLeave={() => {
                    setHovered(false);
                }}
            >
                <div css={playImageBig ? absoluteStyleBig : absoluteStyle}>
                    {React.Children.map(props.children, (child, i) => {
                        if (i === 0) return <h1>{child}</h1>;
                        if (i === 1)
                            return (
                                <div
                                    css={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        [BP.small]: {
                                            display: playImageBig ? 'flex' : 'block',
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
                                        {child}
                                    </h3>
                                    {playImageBig ? (
                                        <img
                                            alt=""
                                            src={hovered ? PlayHv : Play}
                                            css={buttonStyleBig}
                                        />
                                    ) : (
                                        <img
                                            alt=""
                                            src={
                                                hovered ? playPrevHv : playPrev
                                            }
                                            css={buttonStyle}
                                        />
                                    )}
                                    <Link to="/saibamais">
                                        <HoverImage
                                            alt=""
                                            src={saibaMais}
                                            hoverSrc={saibaMaisHv}
                                            css={{
                                                ...buttonStyle,
                                                display: hideSaibaMais
                                                    ? 'none'
                                                    : 'block',
                                            }}
                                        />
                                    </Link>
                                </div>
                            );
                        return null;
                    })}
                </div>
            </BasePreview>
        );
    };

    const ThumbPreview = (props) => {
        const [hovered, setHovered] = useState(false);

        const buttonStyleThumb = {
            ...buttonStyle,
            margin: '0 auto',
            display: 'block',
            zIndex: 999,
        };

        const absoluteStyleThumb = {
            ...absoluteStyle,
            padding: '0.33rem',
            display: 'flex',
            justifyContent: 'space-between',
            [BP.small]: null,
        };

        return (
            <BasePreview
                css={css`
                    width: 32.95%;
                    padding-bottom: 11.1%;
                    display: inline-block;
                    margin-bottom: 0;
                    height: 9.5vw;
                    p {
                        font: normal 0.8em FedraMono;
                    }
                    &:hover {
                        box-shadow: inset 0 0 0 0.2vw #fff;
                    }
                    ${BP.small} {
                        min-height: unset;
                        width: 100%;
                        &:hover {
                            box-shadow: none;
                        }
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
                <div css={absoluteStyleThumb} onClick={() => props.onClick}>
                    <div css={{ width: '100%' }}>
                        {props.children}
                        <div
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                top: 0,
                                left: 0,
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <img
                                    alt=""
                                    src={hovered ? playPrevHv : playPrev}
                                    style={{
                                        position: 'relative',
                                        transform: 'translateY(-50%)',
                                        WebkitTransform: 'translateY(-50%)',
                                        msTransform: 'translateY(-50%)',
                                        top: '50%',
                                    }}
                                    css={buttonStyleThumb}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </BasePreview>
        );
    };

    if (videoList && videoList.length > 0) {
        // Main video

        const main = videoList[0];
        const main_video = [
            <MainPreview
                bg={main[lang].poster}
                key={0}
                onClick={(e) => playerHandler(main.id)}
            >
                {main[lang].title}
                {props.lista.data.season[lang].title
                    ? props.lista.data.season[lang].title
                    : main[lang].subtitle}
            </MainPreview>,
        ];

        // Thumbs

        let videos = [];
        const groupPrograms = props.lista.data.group_programs;

        // Group programs
        if (groupPrograms) {
            const programs = props.lista.data.programs;
            let groupedVideos = [];

            if (programs.length > 1) {
                programs.map((program) => {
                    let filteredVideos = videoList.filter(
                        (video) => video.program == program.id
                    );
                    if (filteredVideos.length > 0) {
                        groupedVideos[program.id] = filteredVideos;
                    }
                });

                videos.push(
                    programs.map((program, index) => {
                        return (
                            <ThumbPreview
                                bg={program[lang].poster}
                                key={index}
                                onClick={() =>
                                    playerHandler(
                                        program.id,
                                        true,
                                        groupedVideos
                                    )
                                }
                            >
                                <h5>{program[lang].title}</h5>
                                <p>{program[lang].category}</p>
                            </ThumbPreview>
                        );
                    })
                );
            }
        }
        // Regular program (ungrouped)
        else {
            if (videoList.length > 1) {
                videos.push(
                    videoList.map((value, index) => {
                        if (index > 0) {
                            return (
                                <ThumbPreview
                                    bg={value[lang].poster}
                                    key={index}
                                    onClick={() => playerHandler(value.id)}
                                >
                                    <h5>{value[lang].title}</h5>
                                    <p>{value[lang].category}</p>
                                </ThumbPreview>
                            );
                        } else {
                            return null;
                        }
                    })
                );
            }
        }

        if (!showPlayer) {
            let slickOptions = {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: <NextArrow />,
                prevArrow: <PrevArrow />,
            };

            if (isMobile) {
                slickOptions = {
                    ...slickOptions,
                    arrows: false,
                };
            }

            const homeThumbs = videoList.length > 1;

            return (
                <React.Fragment>
                    {main_video}
                    {homeThumbs ? (
                        <PreviewContainer>
                            <Slider {...slickOptions}>{videos}</Slider>
                        </PreviewContainer>
                    ) : null}
                </React.Fragment>
            );
        } else {
            if (vimeoOptions.id != null) {
                return (
                    <VideoPlayer
                        {...props}
                        buttonConfig={buttonConfig}
                        closePlayer={closePlayer}
                        changeVideo={playerHandler}
                        videoList={videoList}
                        vimeoOptions={vimeoOptions}
                        currentVideo={currentVideo}
                        groupPrograms={groupPrograms}
                        lang={lang}
                    />
                );
            }
            return <div>Loading</div>;
        }
    } else {
        return (
            <div>
                <MainPreview>
                    <h1 css={css({ color: colors.vermelho })}>Loading</h1>
                    <h3>&nbsp;</h3>
                    <button>Saiba +</button>
                </MainPreview>
                <ThumbPreview>
                    <h5>Loading</h5>
                    <p>&nbsp;</p>
                </ThumbPreview>
            </div>
        );
    }
}
