/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Accordion from 'react-bootstrap/Accordion';
import HoverImage from 'react-hover-image';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import VideoPlayer from './video.component';
import playPrev from '../assets/img/play_prev.png';
import playPrevHv from '../assets/img/play_prev_hv.png';
import saibaMais from '../assets/img/saiba_mais.png';
import saibaMaisHv from '../assets/img/saiba_mais_hv.png';
import setaMais from '../assets/img/seta_mais.png';
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
            className={className}
            style={{
                ...style,
                right: '-2.3vw',
                width: '1.3vw',
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
            className={className}
            style={{
                ...style,
                left: '-2.3vw',
                width: '1.3vw',
                height: 'auto',
            }}
            onClick={onClick}
        />
    );
}

function SetaMais(props) {
    const { onClick } = props;
    return (
        <img
            alt=""
            src={setaMais}
            css={{
                display: 'none',
                [BP.small]: {
                    width: '6vw',
                    display: 'block',
                    position: 'absolute',
                    left: 'calc(50vw - 6vw)',
                    top: '68vh',
                },
                [BP.extraSmall]: {
                    width: '10vw',
                    margin: 'auto',
                    left: 'calc(50vw - 10vw)',
                    top: '80vh',
                },
            }}
            onClick={onClick}
        />
    );
}

export default function ListaDocs(props) {
    const lang = props.lang ? props.lang : 'pt';
    const videoList = props.lista.data.videos;
    const isMobile = useMediaQuery({ query: '(max-width: 767.99px)' });

    const [showPlayer, setShowPlayer] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [vimeoOptions, setVimeoOptions] = useState({
        autoplay: true,
        controls: true,
        id: null,
        current_video: null,
        texttrack: lang,
    });

    const scrollHandler = () => {
        const scrollHere = document.querySelector('#scroll-here');
        setTimeout(function () {
            scrollHere.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    };

    // #1 set current video
    const playerHandler = (e, id) => {
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
            props.setMenuMobileShow(false);
            setShowPlayer(true);
        }
    }, [vimeoOptions]);

    // #4 close player
    const closePlayer = () => {
        setShowPlayer(false);
        setCurrentVideo(null);
    };

    const PreviewContainer = styled.div`
        // display: flex;
        // justify-content: space-between;
        ${BP.small} {
            flex-direction: column;
            > div {
                margin-bottom: 1rem;
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
        cursor: 'pointer',
        [BP.small]: {
            padding: '20% 10%',
        },
    };

    const BasePreview = styled.div`
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
            height: calc(100vh - 86px);
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
                <Link css={absoluteStyle} to="/video">
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
                        return null;
                    })}
                </Link>
            </BasePreview>
        );
    };

    const ThumbPreview = (props) => {
        const [hovered, setHovered] = useState(false);

        const buttonStyleThumb = { ...buttonStyle, zIndex: 999 };

        const absoluteStyleThumb = {
            ...absoluteStyle,
            padding: '2%',
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
                <div css={absoluteStyleThumb}>
                    <div css={{ width: '50%' }}>{props.children}</div>
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
        const main_video = [
            <MainPreview
                bg={main[lang].poster}
                key={0}
                onClick={(e) => playerHandler(e, main.id)}
            >
                {main[lang].title}
                {props.lista.data.season[lang].title
                    ? props.lista.data.season[lang].title
                    : main[lang].subtitle}
            </MainPreview>,
        ];

        // Thumbs
        let videos = [];
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

        if (!showPlayer) {
            const slickOptions = {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: <NextArrow />,
                prevArrow: <PrevArrow />,
            };

            return isMobile ? (
                <React.Fragment>
                    {main_video}
                    <Accordion>
                        <Accordion.Toggle
                            as={SetaMais}
                            variant="link"
                            eventKey="0"
                            onClick={scrollHandler}
                        ></Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <PreviewContainer id="scroll-here">
                                {videos}
                            </PreviewContainer>
                        </Accordion.Collapse>
                    </Accordion>
                </React.Fragment>
            ) : (
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
                    <Route
                        path="/video"
                        render={(props) => (
                            <VideoPlayer
                                {...props}
                                closePlayer={closePlayer}
                                changeVideo={playerHandler}
                                videoList={props.lista}
                                vimeoOptions={vimeoOptions}
                                lang={lang}
                            />
                        )}
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
