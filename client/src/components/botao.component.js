import styled from '@emotion/styled';
import colors from '../styles/colors';

const Botao = styled.button((props) => {
    const normalBorder = props.active ? 'none' : `solid 1px ${colors.vermelho}`;
    const normalWeight = props.active ? 'bold' : 'normal';

    return {
        backgroundColor: props.active ? colors.vermelho : colors.branco,
        color: props.active ? colors.branco : colors.vermelho,
        border: normalBorder,
        fontFamily: 'FedraMono',
        fontWeight: normalWeight,
        fontSize: '0.8em',
        lineHeight: '0.8em',
        borderRadius: '2vw',
        height: '1.57vw',
        width: props.lingua ? '1.57vw' : '5.5vw',
        padding: '0.15vw 0.2vw 0',
        cursor: props.active ? 'default !important' : 'pointer !important',
        '&:focus': { outline: 'none' },
        '&:hover': !props.active && {
            border: `solid 2px ${colors.vermelho}`,
            fontWeight: 'bold',
        },
        '@media (max-width: 992px)': {
            borderRadius: 20,
            height: 25,
            width: props.lingua ? 25 : 100,
            padding: '2px 0 0',
            '&:hover': {
                border: normalBorder,
                fontWeight: normalWeight,
            },
        },
    };
});

export default Botao;
