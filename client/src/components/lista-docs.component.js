/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import HoverImage from 'react-hover-image';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import VideoPlayer from './video.component';
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
    const season = props.lista.data.season[lang].type;
    const curatorSeason = ['curador', 'curator'].includes(season);
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

    const createMarkup = (markup) => {
        return { __html: markup };
    };

    // #1 set current video
    const playerHandler = (
        videoId,
        isProgram = false,
        group = null,
        main = false
    ) => {
        if (isProgram && group !== null) {
            if (main) {
                let arr = [];
                arr[0] = group[0];
                setVideoList(arr);
            } else {
                setVideoList(group[videoId]);
            }
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

    const PreviewContainer = styled.div`
        ${BP.small} {
            & > div {
                height: 25vh;
            }
        }
    `;

    let buttonStyle = {
        height: '1.8vw',
        marginLeft: '0.2vw',
        [BP.small]: {
            // marginLeft: '0.5vw',
            height: 25,
        },
    };

    let absoluteStyle = {
        padding: '0 16%',
        transform: 'translateY(-50%)',
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '100%',
        cursor: 'pointer',
        [BP.small]: {
            padding: '0 10%',
        },
    };

    const BasePreview = styled.div`
        width: 100%;
        padding-bottom: ${curatorSeason ? '34.695%' : '40.1%'};
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
            margin-bottom: 0.33rem;
            height: calc(75vh - 91px);
            padding-bottom: unset;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
    `;

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
                <div css={absoluteStyle} className={props.customClass}>
                    {React.Children.map(props.children, (child, i) => {
                        if (i === 0) return <h1>{child}</h1>;
                        if (i === 1)
                            return (
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
                                        {child}
                                    </h3>
                                    <img
                                        alt=""
                                        src={hovered ? playPrevHv : playPrev}
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
                            );
                        if (i === 2 && child){
                            return <div id={props.customClass} 
                                dangerouslySetInnerHTML={createMarkup(child)}
                            ></div>
                        };
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
            margin: '0',
            display: 'block',
            zIndex: 999,
        };

        const absoluteStyleThumb = {
            ...absoluteStyle,
            padding: '0.33rem',
            top: 0,
            height: '100%',
            transform: 'unset',
            display: 'flex',
            justifyContent: 'flex-end',
            [BP.small]: {
                justifyContent: 'center',
                alignItems: 'center',
            },
        };

        return (
            <BasePreview
                css={css`
                    width: 32.95%;
                    padding: 0.33rem;
                    padding-bottom: 11.1%;
                    display: inline-block;
                    margin-bottom: 0;
                    height: ${curatorSeason ? '14.317vw' : '9.5vw'};
                    p {
                        font: normal 0.8em FedraMono;
                    }
                    &:hover {
                        box-shadow: inset 0 0 0 0.2vw #fff;
                    }
                    ${BP.small} {
                        min-height: unset;
                        width: 100%;
                        height: 25vh;
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
                <div
                    css={{
                        width: '100%',
                        paddingRight: curatorSeason && !isMobile ? '9.5rem' : 0,
                    }}
                >
                    {props.children}
                </div>
                <div css={absoluteStyleThumb}>
                    <img
                        alt=""
                        src={hovered ? playPrevHv : playPrev}
                        css={buttonStyleThumb}
                    />
                </div>
            </BasePreview>
        );
    };

    if (videoList && videoList.length > 0) {
        // Main video
        const main = videoList[0];
        let main_video = [];

        // Thumbs
        let videos = [];
        const groupPrograms = props.lista.data.group_programs;

        // Group programs
        if (groupPrograms) {
            main_video.push(
                <MainPreview
                    bg={main[lang].poster}
                    customClass={"ayoung"}
                    key={0}
                    onClick={(e) => playerHandler(main.id, true, [main], true)}
                >
                    {main[lang].title}
                    {props.lista.data.season[lang].title
                        ? props.lista.data.season[lang].title
                        : main[lang].subtitle}
                </MainPreview>
            );

            const programs = props.lista.data.programs;
            let groupedVideos = [];

            if (programs.length > 1) {
                let filteredVideos = [];
                let artworks = [];

                programs.map((program) => {
                    filteredVideos = videoList.filter(
                        (video) => video.program == program.id
                    );
                    if (filteredVideos.length > 0) {
                        groupedVideos[program.id] = filteredVideos;
                    }

                    // Show artwork list in each program's thumb in home
                    if (typeof groupedVideos[program.id] !== 'undefined') {
                        artworks[program.id] = [];
                        artworks[program.id].push(
                            groupedVideos[program.id].map((video) => {
                                return `${video[lang].title} (${video[lang].category})`;
                            })
                        );
                    }
                });

                videos.push(
                    programs.map((program, index) => {
                        if (program.id !== 0 && artworks[program.id]) {
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
                                    {/* Show artwork list in desktop only */}
                                    <p
                                        style={{
                                            marginTop: '0.7%',
                                            lineHeight: '1.5em',
                                        }}
                                    >
                                        {isMobile
                                            ? program[lang].category
                                            : artworks[program.id].join(', ')}
                                    </p>
                                </ThumbPreview>
                            );
                        }
                    })
                );
            }
        }
        // Regular program (ungrouped)
        else {
            main_video.push(
                <MainPreview
                    bg={main[lang].poster}
                    customClass={"ayoung"}
                    key={0}
                    onClick={(e) => playerHandler(main.id)}
                >
                    {main[lang].title}
                    {props.lista.data.season[lang].title
                        ? props.lista.data.season[lang].title
                        : main[lang].subtitle}
                    {main[lang].main_preview_html}
                </MainPreview>
            );

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
            const slidesLength = groupPrograms
                ? props.lista.data.programs.length - 1
                : videoList.length;
            const slidesToShow = slidesLength >= 3 ? 3 : slidesLength;

            let slickOptions = {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: slidesToShow,
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

            return (
                <React.Fragment>
                    {main_video}
                    <PreviewContainer>
                        <Slider {...slickOptions}>{videos}</Slider>
                    </PreviewContainer>
                </React.Fragment>
            );
        } else {
            if (vimeoOptions.id != null) {
                return (
                    <VideoPlayer
                        {...props}
                        closePlayer={closePlayer}
                        changeVideo={playerHandler}
                        videoList={videoList}
                        vimeoOptions={vimeoOptions}
                        currentVideo={currentVideo}
                        groupPrograms={groupPrograms}
                        lang={lang}
                        curatorSeason={curatorSeason}
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
