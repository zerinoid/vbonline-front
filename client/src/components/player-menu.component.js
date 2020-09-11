/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import HoverImage from 'react-hover-image';
import { useMediaQuery } from 'react-responsive';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-overlays/Dropdown';
import { useDropdownToggle, useDropdownMenu } from 'react-overlays';
import colors from '../styles/colors';

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

const BoxContainer = styled('div')`
    display: ${(p) => (p.show ? 'flex' : 'none')};
    min-width: 250px;
    width: ${(p) => (p.playlist ? '22vw' : '10vw')};
    position: absolute;
    top: ${meio_icone}vw;
    padding: ${(p) =>
        p.playlist
            ? meio_icone + 'vw'
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
    & > * + * {
        margin-top: ${(p) => (p.playlist ? meio_icone : meio_icone * 2)}vw;
    },
`;

const Menu = ({ role, children, playlist }) => {
    const { show, onClose, props } = useDropdownMenu({
        flip: true,
        offset: [0, 8],
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
            {/*     onClick={onClose} */}
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

const PlayerMenu = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
    // const [show, setShow] = useState(false);
    const createMarkup = (markup) => {
        return { __html: markup };
    };

    return (
        // ButtonToolbar
        <Col
            md={4}
            css={{
                justifyContent: 'flex-end',
                '& > * + *': {
                    marginLeft: 3 * meio_icone + 'vw',
                },
            }}
        >
            {/* cartela */}
            <DropdownButton
                source={infoButton}
                hoverSrc={infoButtonActive}
                alignEnd
            >
                <p
                    className="info-box-title"
                    dangerouslySetInnerHTML={createMarkup(
                        props.vimeoOptions.current_video[props.lang].title_box
                            ? props.vimeoOptions.current_video[props.lang]
                                  .title_box
                            : props.vimeoOptions.current_video[props.lang].title
                    )}
                ></p>
                <div
                    className="info-box-caption"
                    dangerouslySetInnerHTML={createMarkup(
                        props.vimeoOptions.current_video[props.lang].caption
                    )}
                />
            </DropdownButton>
            {/* playlist */}
            <DropdownButton
                source={playlistButton}
                hoverSrc={playlistButtonActive}
                alignEnd
                playlist
            >
                {props.playlist}
            </DropdownButton>
            <VideoButton
                src={nextButton}
                hoverSrc={isMobile ? nextButton : nextButtonActive}
                /* onClick={() => {goToVideo(nextVideo.id);}} */
            />
            <VideoButton
                src={fullScreenButton}
                hoverSrc={isMobile ? fullScreenButton : fullScreenButtonActive}
                /* onClick={enterFullScreen} */
            />
            <VideoButton
                src={closeButton}
                hoverSrc={isMobile ? closeButton : closeButtonActive}
                /* onClick={closePlayer} */
            />
        </Col>
    );
};

export default PlayerMenu;
