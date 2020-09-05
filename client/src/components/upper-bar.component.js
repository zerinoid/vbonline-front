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
                width: '88vw',
                backgroundColor: 'black',
                zIndex: 1010,
                marginTop: '4vw',
                '&>div': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                },
            }}
        >
            <Col md={4}> </Col>
            <Col md={4}></Col>
            <PlayerMenu />
        </Row>
    );
};

export default UpperBar;
