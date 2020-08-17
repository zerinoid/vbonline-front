/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import colors from '../styles/colors';

import barra from '../assets/img/barraMobile.png';

import BotaoMenuMobile from './botao-menu-mobile.component';

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
                <BotaoMenuMobile
                    lingua={true}
                    onClick={props.setLang.bind(this, 'pt')}
                    active={props.langState === 'pt'}
                >
                    PT
                </BotaoMenuMobile>
                <img alt="" src={barra} height="23" />
                <BotaoMenuMobile
                    lingua={true}
                    onClick={props.setLang.bind(this, 'en')}
                    active={props.langState === 'en'}
                >
                    EN
                </BotaoMenuMobile>
                <div
                    css={css`
                        flex-basis: 100%;
                        height: 8px;
                    `}
                />
                <Link to="/sobre">
                    <BotaoMenuMobile active={props.pathname === '/sobre'}>
                        VB Online
                    </BotaoMenuMobile>
                </Link>
            </div>
        </div>
    );
};

export default menuMobile;
