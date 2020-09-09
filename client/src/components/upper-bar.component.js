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
                    justifyContent: 'flex-end',
                },
            }}
        >
            <Col md={4}></Col>
            <Col md={4} className="video-title">
                <span css={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                    Abdoulaye Konaté
                    {/* {props.vimeoOptions.current_video[props.lang].title} */}
                </span>
                <span css={{ marginLeft: '0.7vw' }}>
                    Cores e Composições
                    {/* {props.vimeoOptions.current_video[props.lang].subtitle} */}
                </span>
            </Col>
            <PlayerMenu />
        </Row>
    );
};

export default UpperBar;
