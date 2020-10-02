/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import HoverImage from 'react-hover-image';
import { useMediaQuery } from 'react-responsive';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-overlays/Dropdown';
import { useDropdownToggle, useDropdownMenu } from 'react-overlays';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import playlistButtonActive from '../assets/img/v_assets/vPlaylistActive.png';
import playlistButton from '../assets/img/v_assets/vPlaylist.png';
import nextButtonActive from '../assets/img/v_assets/vNextActive.png';
import nextButton from '../assets/img/v_assets/vNext.png';
import infoButtonActive from '../assets/img/v_assets/vInfoActive.png';
import infoButton from '../assets/img/v_assets/vInfo.png';
import fullScreenButtonActive from '../assets/img/v_assets/vFullscreenActive.png';
import fullScreenButton from '../assets/img/v_assets/vFullscreen.png';
import closeButtonActive from '../assets/img/v_assets/vFecharActive.png';
import closeButton from '../assets/img/v_assets/vFechar.png';

const meio_icone = 0.75;

const VideoButton = (props) => {
    return (
        <HoverImage
            src={props.src}
            hoverSrc={props.hoverSrc}
            onClick={props.onClick}
            className="video-button-icon"
        />
    );
};

const PlayerMenu = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767.99px)' });
    const [show, setShow] = useState(false);
    const createMarkup = (markup) => {
        return { __html: markup };
    };

    // Reset show state
    useEffect(() => {
        if (show) setShow(!show);
    }, [show]);

    const LegendaMobile = (props) => {
        return (
            <div className="legenda d-md-none justify-content-between d-flex">
                <h2>{props.children}</h2>
                <img
                    alt=""
                    src={closeButton}
                    onClick={(nextShow) => setShow(nextShow)}
                />
            </div>
        );
    };

    const BoxContainer = styled('div')`
        display: ${(p) => (p.show ? 'flex' : 'none')};
        min-width: 250px;
        width: ${(p) => (p.playlist ? '18vw' : '16.5vw')};
        top: ${meio_icone}vw !important;
        padding: ${(p) =>
            p.playlist
                ? meio_icone - 0.2 + 'vw'
                : 2 * meio_icone +
                  'vw ' +
                  2 * meio_icone +
                  'vw ' +
                  3 * meio_icone +
                  'vw'};
        z-index: 1000;
        flex-direction: column;
        background-color: ${colors.vermelho};
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        font-size: 0.8em;
        p {
            margin-bottom: 0;
        }
        ${BP.small} {
            width: 100vw;
            height: 100vh;
            top: 0 !important;
            padding: 5vw 8vw 11vw;
            justify-content: space-between;
            transform: none;
        }
        ${BP.extraSmall} {
            justify-content: ${(p) => !p.playlist && 'flex-start'};
        }
    `;

    const Menu = ({ role, children, playlist }) => {
        const { show, onClose, props } = useDropdownMenu({
            flip: true,
            offset: isMobile ? [0, window] : [0, 0],
        });

        return (
            <BoxContainer
                {...props}
                role={role}
                show={show}
                playlist={playlist}
                className="info-box"
            >
                {/* <button */}
                {/*     type="button" */}
                {/*     onClick={() => testeHandler(!teste)} */}
                {/*     className="text-left hover:bg-brand-100 px-6 py-2" */}
                {/* > */}
                {/*     Item 1 */}
                {/* </button> */}
                {children}
            </BoxContainer>
        );
    };

    const Toggle = ({ id, source, hoverSrc }) => {
        const [props, { show, toggle }] = useDropdownToggle();
        const [imageSrc, setImageSrc] = useState(source);

        return (
            <img
                src={show ? hoverSrc : imageSrc}
                alt=""
                className="video-button-icon"
                id={id}
                {...props}
                onClick={toggle}
                onMouseEnter={() => {
                    setImageSrc(hoverSrc);
                }}
                onMouseLeave={() => {
                    setImageSrc(source);
                }}
            />
        );
    };

    const DropdownButton = ({
        show,
        onToggle,
        drop,
        alignEnd,
        role,
        source,
        hoverSrc,
        playlist,
        children,
    }) => (
        <Dropdown
            show={show}
            onToggle={onToggle}
            drop={drop}
            alignEnd={alignEnd}
            itemSelector="button:not(:disabled)"
        >
            {({ props }) => (
                <div {...props} className="relative inline-block">
                    <Toggle
                        id="example-toggle"
                        source={source}
                        hoverSrc={hoverSrc}
                    />
                    <Menu role={role} playlist={playlist}>
                        {children}
                    </Menu>
                </div>
            )}
        </Dropdown>
    );

    return (
        <Col
            className="player-menu"
            md={4}
            sm={5}
            xs={12}
            css={{
                '& > * + *': {
                    marginLeft: 3 * meio_icone + 'vw',
                },
            }}
        >
            {/* cartela */}
            <DropdownButton
                source={infoButton}
                hoverSrc={isMobile ? infoButton : infoButtonActive}
                alignEnd
            >
                <LegendaMobile>Ficha Técnica</LegendaMobile>
                <div className="cartela box-carousel">
                    <div className="cartela box-wrap">
                        <p
                            className="chart-title"
                            dangerouslySetInnerHTML={createMarkup(
                                props.vimeoOptions.current_video[props.lang]
                                    .title_box
                                    ? props.vimeoOptions.current_video[
                                          props.lang
                                      ].title_box
                                    : props.vimeoOptions.current_video[
                                          props.lang
                                      ].title
                            )}
                        ></p>
                        <div
                            className="chart-caption"
                            dangerouslySetInnerHTML={createMarkup(
                                props.vimeoOptions.current_video[props.lang]
                                    .specs
                            )}
                        />
                        {props.vimeoOptions.current_video[props.lang]
                            .caption ? (
                            <div
                                className="chart-caption"
                                dangerouslySetInnerHTML={createMarkup(
                                    props.vimeoOptions.current_video[props.lang]
                                        .caption
                                )}
                            />
                        ) : null}
                    </div>
                </div>
            </DropdownButton>
            {/* playlist */}
            <DropdownButton
                source={playlistButton}
                hoverSrc={isMobile ? playlistButton : playlistButtonActive}
                alignEnd
                playlist
            >
                <LegendaMobile>Lista de reprodução</LegendaMobile>
                <div className="playlist box-carousel">
                    <div className="playlist box-wrap">{props.playlist}</div>
                </div>
            </DropdownButton>
            {/* outros */}
            <VideoButton
                src={nextButton}
                hoverSrc={isMobile ? nextButton : nextButtonActive}
                onClick={props.goToVideo}
            />
            <VideoButton
                src={fullScreenButton}
                hoverSrc={isMobile ? fullScreenButton : fullScreenButtonActive}
                onClick={props.enterFullScreen}
            />
            <VideoButton
                src={closeButton}
                hoverSrc={isMobile ? closeButton : closeButtonActive}
                onClick={props.closePlayer}
            />
        </Col>
    );
};

export default PlayerMenu;
