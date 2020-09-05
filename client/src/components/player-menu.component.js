import React from 'react';
import HoverImage from 'react-hover-image';
import { useMediaQuery } from 'react-responsive';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
            className="video-button"
        />
    );
};

const PlayerMenu = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <Row
            style={{
                position: 'absolute',
                top: 0,
                width: '88vw',
                backgroundColor: 'black',
                zIndex: 1010,
                marginTop: '4vw',
            }}
        >
            <Col md={4}>
                <Dropdown>
                    <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        css={{}}
                    >
                        <VideoButton
                            src={infoButton}
                            hoverSrc={infoButtonActive}
                        />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Something else
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>{' '}
            </Col>
            <Col md={4}>
                <Row>
                    <VideoButton
                        src={playlistButton}
                        hoverSrc={
                            isMobile ? playlistButton : playlistButtonActive
                        }
                        /* onClick={togglePlaylistBox} */
                    />
                    <VideoButton
                        src={nextButton}
                        hoverSrc={isMobile ? nextButton : nextButtonActive}
                        /* onClick={() => {goToVideo(nextVideo.id);}} */
                    />
                    <VideoButton
                        src={fullScreenButton}
                        hoverSrc={
                            isMobile ? fullScreenButton : fullScreenButtonActive
                        }
                        /* onClick={enterFullScreen} */
                    />
                    <VideoButton
                        src={closeButton}
                        hoverSrc={isMobile ? closeButton : closeButtonActive}
                        /* onClick={closePlayer} */
                    />
                </Row>
            </Col>
            <Col md={4}></Col>
        </Row>
    );
};

export default PlayerMenu;
