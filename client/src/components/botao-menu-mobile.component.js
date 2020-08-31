/** @jsx jsx */
import { jsx } from '@emotion/core';
import colors from '../styles/colors';

import Botao from './botao.component';

const BotaoMenuMobile = (props) => {
    const normalBorder = props.active ? 'none' : `solid 1px ${colors.branco}`;
    const normalWeight = props.active ? 'bold' : 'normal';

    return (
        <Botao
            css={{
                backgroundColor: props.active ? colors.branco : colors.vermelho,
                color: props.active ? colors.vermelho : colors.branco,
                border: normalBorder,
                fontWeight: normalWeight,
                '@media (max-width: 992px)': {
                    '&:hover': {
                        border: normalBorder,
                        fontWeight: normalWeight,
                    },
                },
            }}
            {...props}
        />
    );
};

export default BotaoMenuMobile;
