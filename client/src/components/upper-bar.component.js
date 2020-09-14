/** @jsx jsx */
import { jsx } from '@emotion/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlayerMenu from './player-menu.component';

const UpperBar = (props) => {
    return (
        <Row className="upper-bar">
            <Col
                md={{ span: 4, offset: 4 }}
                sm={7}
                xs={12}
                className="video-title"
            >
                <span css={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                    {props.vimeoOptions.current_video[props.lang].title}
                </span>
                <span css={{ marginLeft: '0.7vw' }}>
                    {props.vimeoOptions.current_video[props.lang].subtitle}
                </span>
            </Col>
            <PlayerMenu
                vimeoOptions={props.vimeoOptions}
                lang={props.lang}
                playlist={props.playlist}
                closePlayer={props.closePlayer}
                enterFullScreen={props.enterFullScreen}
                goToVideo={props.goToVideo}
            />
        </Row>
    );
};

export default UpperBar;
