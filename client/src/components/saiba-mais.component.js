/** @jsx jsx */
import { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import AboutSection from './about-section.component';

import fechar from '../assets/img/fecharVerm.png';

export default function SaibaMais(props) {

    const [saibaMaisState, setSaibaMaisState] = useState({ data: null });

    // insert html from backend
    const createMarkup = (markup) => {
        return { __html: markup };
    };

    const linkHandler = (event, link, data) => {
        if(data.replace_text){
            event.preventDefault();
            console.log(link);
        }
    }

    useEffect(() => {
        axios.get('/api/saibamais').then((res) => {
            setSaibaMaisState({ data: res.data });
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
                {saibaMaisState.data ? (
                    <div>
                        <AboutSection
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <h4>
                                    {
                                        saibaMaisState.data[props.lang]
                                            .name
                                    }
                                </h4>
                                <h4
                                    css={css`
                                        font-weight: normal;
                                        text-transform: none;
                                        display: ${saibaMaisState.data[
                                            props.lang
                                        ].subtitle
                                            ? 'block'
                                            : 'none'};
                                    `}
                                >
                                    {saibaMaisState.data[props.lang].subtitle}
                                </h4>
                            </div>
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
                        <AboutSection className="sobre-conteudo-wrapper">
                            <div
                                className="sobre-conteudo"
                                dangerouslySetInnerHTML={createMarkup(
                                    saibaMaisState.data[props.lang].content
                                )}
                            />
                            <div className="veja-mais-wrapper">
                                <ul className="veja-mais">
                                    {saibaMaisState.data[
                                        props.lang
                                    ].links.map((value, index) => (
                                        <li key={index}>
                                            <a
                                                href={value.url}
                                                target={
                                                    (value.blank && !saibaMaisState.data.replace_text)
                                                        ? '_blank'
                                                        : '_self'
                                                }
                                                onClick={(event) => linkHandler(event, value, saibaMaisState.data)}
                                            >
                                                {value.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AboutSection>
                        {saibaMaisState.data.partnersLogos.length > 0 ? (
                            <AboutSection>
                                <p
                                    css={css`
                                        font: bold 0.8em FedraMono !important;
                                        text-transform: uppercase;
                                    `}
                                >
                                    {
                                        saibaMaisState.data[props.lang]
                                            .partners
                                    }
                                    :
                                </p>
                                <div
                                    css={css`
                                        margin-top: 28px;
                                        display: flex;
                                        justify-content: space-between;
                                        width: ${saibaMaisState.data
                                            .partnersLogos.length * 4}vw;
                                        img {
                                            height: 3.2vw;
                                        }
                                        ${BP.small} {
                                            width: ${saibaMaisState.data
                                                .partnersLogos.length *
                                            25}%;
                                            margin-bottom: 20px;
                                            img {
                                                height: 50px;
                                            }
                                        }
                                    `}
                                >
                                    {saibaMaisState.data.partnersLogos.map(
                                        (value, index) => (
                                            <img
                                                alt=""
                                                src={value}
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                            </AboutSection>
                        ) : null}
                    </div>
                ) : (
                    <div className="sobre">
                        <p>Carregando</p>
                    </div>
                )}
            </div>
            <div
                css={css`
                    flex: 1.1 5 30px;
                    ${BP.small} {
                        display: none;
                    }
                `}
            />
        </div>
    );
}
