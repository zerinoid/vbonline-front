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
                sm={{ span: 7, order: 'first' }}
                xs={{ span: 12, order: 'last' }}
                className="video-title"
            >
                <span css={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                    {props.vimeoOptions.current_video[props.lang].title}
                </span>
                <span>&nbsp;</span>
                <span>
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
                seasonType={props.seasonType}
            />
        </Row>
    );
};

export default UpperBar;
