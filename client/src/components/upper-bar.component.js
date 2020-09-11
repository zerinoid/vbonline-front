/** @jsx jsx */
import { jsx } from '@emotion/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PlayerMenu from './player-menu.component';

const UpperBar = (props) => {
    return (
        <Row
            css={{
                position: 'absolute',
                top: 0,
                left: 0,
                margin: '0 auto',
                width: '100%',
                background: 'black',
                zIndex: 1010,
                padding: '6vh 105px',
                '&>div': {
                    display: 'flex',
                },
            }}
        >
            <Col md={4}></Col>
            <Col md={4} className="video-title">
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
            />
        </Row>
    );
};

export default UpperBar;
