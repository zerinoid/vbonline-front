/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';

import barra from '../assets/img/barraMobile.png';

import Botao from './botao.component';

const menuMobile = (props) => {
    return (
        <div
            css={css({
                backgroundColor: colors.vermelho,
                position: 'absolute',
                right: 0,
                padding: '20px 18px',
                margin: '8px 1rem 0 0',
                'z-index': 9999,
                display: props.isShown ? 'block' : 'none',
            })}
        >
            <div
                css={css({
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: 100,
                })}
            >
                <Botao lingua={true} onClick={props.setLang.bind(this, 'pt')}>
                    PT
                </Botao>
                <img alt="" src={barra} height="23" />
                <Botao lingua={true} onClick={props.setLang.bind(this, 'en')}>
                    EN
                </Botao>
                <div
                    css={css`
                        flex-basis: 100%;
                        height: 8px;
                    `}
                />
                <Link to="/sobre">
                    <Botao onClick={props.toggle}>VB Online</Botao>
                </Link>
            </div>
        </div>
    );
};

export default menuMobile;
