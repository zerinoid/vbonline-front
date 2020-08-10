/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import colors from '../styles/colors';

const Botao = styled.button((props) => ({
    backgroundColor: props.active ? colors.vermelho : colors.branco,
    color: props.active ? colors.branco : colors.vermelho,
    border: props.active ? 'none' : `solid 1px ${colors.vermelho}`,
    fontFamily: 'FedraMono',
    fontWeight: props.active ? 'bold' : 'normal',
    fontSize: '0.9em',
    borderRadius: 20,
    height: 25,
    width: 100,
    maxWidth: props.lang && '1.8em',
    paddingLeft: props.lang && 5,
}));

export default Botao;
