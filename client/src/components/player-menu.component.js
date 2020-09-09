/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import HoverImage from 'react-hover-image';
import { useMediaQuery } from 'react-responsive';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-overlays/Dropdown';
import { useDropdownToggle, useDropdownMenu } from 'react-overlays';
import colors from './styles/colors';

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
    position: absolute;
    top: ${meio_icone};
    padding: ${2 * meio_icone} ${2 * meio_icone} ${3 * meio_icone};
    z-index: 1000;
    flex-direction: column;
    background-color: ${colors.vermelho};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

const Menu = ({ role }) => {
    const { show, onClose, props } = useDropdownMenu({
        flip: true,
        offset: [0, 8],
    });
    return (
        <BoxContainer {...props} role={role} show={show}>
            <button
                type="button"
                onClick={onClose}
                className="text-left hover:bg-brand-100 px-6 py-2"
            >
                Item 1
            </button>
            <button
                type="button"
                onClick={onClose}
                className="text-left hover:bg-brand-100 px-6 py-2"
            >
                Item 2
            </button>
        </BoxContainer>
    );
};

const Toggle = ({ id, children }) => {
    const [props, { show, toggle }] = useDropdownToggle();
    return (
        <button
            type="button"
            className="btn"
            id={id}
            {...props}
            onClick={toggle}
        >
            {children}
        </button>
    );
};

const DropdownButton = ({ show, onToggle, drop, alignEnd, title, role }) => (
    <Dropdown
        show={show}
        onToggle={onToggle}
        drop={drop}
        alignEnd={alignEnd}
        itemSelector="button:not(:disabled)"
    >
        {({ props }) => (
            <div {...props} className="relative inline-block">
                {/* <Toggle id="example-toggle">{title}</Toggle> */}
                {/* <Menu role={role} /> */}
            </div>
        )}
    </Dropdown>
);

const PlayerMenu = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
    const [show, setShow] = useState(false);

    return (
        // ButtonToolbar
        <Col
            md={4}
            /* css={{ */
            /*     '& > * + *': { */
            /*         marginLeft: 12, */
            /*     }, */
            /* }} */
        >
            <Dropdown>
                <Dropdown.Toggle
                    css={{
                        background: `url(${infoButton}) center/contain no-repeat`,
                        '&:hover': {
                            backgroundImage: `url(${infoButtonActive})`,
                        },
                        '&:focus': {
                            backgroundImage: `url(${infoButtonActive})`,
                        },
                        '&:active': {
                            backgroundImage: `url(${infoButtonActive})`,
                        },
                    }}
                ></Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle
                    className="playlist"
                    css={{
                        background: `url(${playlistButton}) center/cover no-repeat`,
                        '&:hover': {
                            backgroundImage: `url(${playlistButtonActive})`,
                        },
                        '&:focus': {
                            backgroundImage: `url(${playlistButtonActive})`,
                        },
                        '&:active': {
                            backgroundImage: `url(${playlistButtonActive})`,
                        },
                    }}
                ></Dropdown.Toggle>
                <Dropdown.Menu alignRight>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

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
