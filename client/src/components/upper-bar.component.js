/** @jsx jsx */
import { jsx } from '@emotion/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlayerMenu from './player-menu.component';

const UpperBar = (props) => {

    const currentVideo = props.vimeoOptions.current_video[props.lang];
    const videoTitle = !!currentVideo.title_box ? currentVideo.title_box : currentVideo.title;
    const videoSubTitle = !!currentVideo.title_box ? '' : currentVideo.subtitle;

    return (
        <Row className="upper-bar">
            <Col
                md={{ span: 4, offset: 4 }}
                sm={{ span: 7, order: 'first' }}
                xs={{ span: 12, order: 'last' }}
                className="video-title"
            >
                <span css={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                    {videoTitle}
                </span>
                <span>&nbsp;</span>
                <span>
                    {videoSubTitle}
                </span>
            </Col>
            <PlayerMenu
                vimeoOptions={props.vimeoOptions}
                lang={props.lang}
                playlist={props.playlist}
                closePlayer={props.closePlayer}
                enterFullScreen={props.enterFullScreen}
                goToVideo={props.goToVideo}
                curatorSeason={props.curatorSeason}
            />
        </Row>
    );
};

export default UpperBar;
