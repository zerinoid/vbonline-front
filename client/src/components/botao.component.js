import styled from '@emotion/styled';
import colors from '../styles/colors';

const Botao = styled.button((props) => ({
    backgroundColor: props.active ? colors.vermelho : colors.branco,
    color: props.active ? colors.branco : colors.vermelho,
    border: props.active ? 'none' : `solid 1px ${colors.vermelho}`,
    fontFamily: 'FedraMono',
    fontWeight: props.active ? 'bold' : 'normal',
    fontSize: 13,
    borderRadius: 20,
    height: 25,
    width: 100,
    maxWidth: props.lingua && '26px',
    padding: '2px 0 0 0',
    cursor: props.active ? 'default !important' : 'pointer !important',
    '&:focus': { outline: 'none' },
    '&:hover': !props.active && {
        border: `solid 2px ${colors.vermelho}`,
        fontWeight: 'bold',
        // boxShadow: `inset 0px 0px 0px 2px ${colors.vermelho}`,
    },
    '@media (max-width: 992px)': {
        '&:hover': {
            border: 'initial',
        },
    },
}));

export default Botao;
