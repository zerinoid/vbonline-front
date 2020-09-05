/** @jsx jsx */
import { jsx } from '@emotion/core';
import HoverImage from 'react-hover-image';
import { useMediaQuery } from 'react-responsive';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

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

const VideoButton = (props) => {
    return (
        <HoverImage
            style={{}}
            src={props.src}
            hoverSrc={props.hoverSrc}
            onClick={props.onClick}
            className="video-button-icon"
        />
    );
};

const PlayerMenu = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <Col md={4}>
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
