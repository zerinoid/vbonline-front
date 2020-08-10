/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from 'react-emotion';
import colors from '../styles/colors';

const Botao = styled.button((props) => ({
    backgroundColor: props.primary ? colors.vermelho : colors.branco,
    fontFamily: 'FedraMono',
    fontWeight: 'normal',
    borderRadius: 20,
}));

export default Botao();
