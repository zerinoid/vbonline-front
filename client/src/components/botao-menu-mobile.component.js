/** @jsx jsx */
import { jsx } from '@emotion/core';
import colors from '../styles/colors';

import Botao from './botao.component';

const BotaoMenuMobile = (props) => (
    <Botao
        css={{
            backgroundColor: props.active ? colors.branco : colors.vermelho,
            color: props.active ? colors.vermelho : colors.branco,
            border: props.active ? 'none' : `solid 1px ${colors.branco}`,
            fontWeight: props.active ? 'bold' : 'normal',
        }}
        {...props}
    />
);

export default BotaoMenuMobile;
