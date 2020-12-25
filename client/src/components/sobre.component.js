/** @jsx jsx */
import { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import AboutSection from './about-section.component';

import fechar from '../assets/img/fecharVerm.png';

export default function Sobre(props) {

    const [sobreState, setSobreState] = useState({ data: null });

    const currentWidth = window.innerWidth;

    // insert html from backend
    const createMarkup = (markup) => {
        return { __html: markup };
    };

    useEffect(() => {
        axios.get('/api/sobre').then((res) => {
            setSobreState({ data: res.data });
        });
    }, []);

    return (
        <div className="sobre">
            <div
                css={css`
                    flex: 1.3 1 0;
                    ${BP.small} {
                        display: none;
                    }
                `}
            />
            <div
                css={css({
                    color: colors.vermelho,
                    flex: '8 1 0',
                    [BP.small]: {
                        flexGrow: 8,
                    },
                })}
            >
                {sobreState.data ? (
                    <div>
                        <AboutSection
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <h4>
                                {sobreState.data.title[props.lang]}
                            </h4>
                            <Link to="/">
                                <img
                                    alt=""
                                    src={fechar}
                                    css={{
                                        height: '1.47vw',
                                        [BP.small]: {
                                            display: 'none',
                                        },
                                    }}
                                />
                            </Link>
                        </AboutSection>
                        {/* Main content */}
                        <AboutSection className="sobre-conteudo-wrapper">
                            <div
                                className="sobre-conteudo"
                                dangerouslySetInnerHTML={createMarkup(
                                    sobreState.data.content[props.lang]
                                )}
                            />
                            <div className="veja-mais-wrapper">
                                {sobreState.data.partnersLogos.length >
                                0 ? (
                                    <ul className="veja-mais sobre-logos">
                                        {sobreState.data.partnersLogos.map(
                                            (value, index) => (
                                                <li key={index}>
                                                    <span>
                                                        {
                                                            value.title[
                                                                props
                                                                    .lang
                                                            ]
                                                        }
                                                    </span>
                                                    <br />
                                                    <a
                                                        href={
                                                            value.link.url
                                                                ? value.link
                                                                        .url
                                                                : '#'
                                                        }
                                                        target={
                                                            value.link.blank
                                                                ? '_blank'
                                                                : '_self'
                                                        }
                                                    >
                                                        <img
                                                            src={
                                                                value.img
                                                                    .url
                                                            }
                                                            alt="Parceiro"
                                                            style={
                                                                currentWidth < 768 &&
                                                                value.img
                                                                    .custom_size_mobile
                                                                    ? {
                                                                            width:
                                                                                value
                                                                                    .img
                                                                                    .custom_size_mobile,
                                                                        }
                                                                    : value
                                                                            .img
                                                                            .custom_size
                                                                    ? {
                                                                            width:
                                                                                value
                                                                                    .img
                                                                                    .custom_size,
                                                                        }
                                                                    : {}
                                                            }
                                                        />
                                                    </a>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                ) : (
                                    // Empty
                                    <ul className="veja-mais"></ul>
                                )}
                            </div>
                        </AboutSection>
                    </div>
                ) : (
                    <div className="sobre">
                        <p>Carregando</p>
                    </div>
                )}
            </div>
            <div
                css={css`
                    flex: 1.1 1 30px;
                    ${BP.small} {
                        display: none;
                    }
                `}
            />
        </div>
    );
}
