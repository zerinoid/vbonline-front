/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import colors from '../styles/colors';

import Botao from './botao.component';

import AboutSection from './about-section.component';

export default class SaibaMais extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    // insert html from backend
    createMarkup = (markup) => {
        return { __html: markup };
    };

    componentDidMount() {
        axios.get('/api/saibamais').then((res) => {
            this.setState({ data: res.data });
        });
    }

    render() {
        return (
            <div className="sobre">
                <div
                    css={css`
                        flex: 1 1 0;
                        @media (max-width: 992px) {
                            display: none;
                        }
                    `}
                />
                <div
                    css={css({
                        color: colors.vermelho,
                        flex: '5 1 0',
                        '@media (max-width: 992px)': {
                            flexGrow: 8,
                        },
                    })}
                >
                    {this.state.data ? (
                        <div>
                            <AboutSection>
                                <h4>
                                    {this.state.data[this.props.lang].artist}
                                </h4>
                                <h4
                                    css={css`
                                        font-weight: normal;
                                        text-transform: none;
                                    `}
                                >
                                    {this.state.data[this.props.lang].title}
                                </h4>
                            </AboutSection>
                            <AboutSection>
                                <div
                                    dangerouslySetInnerHTML={this.createMarkup(
                                        this.state.data[this.props.lang].content
                                    )}
                                />
                            </AboutSection>
                            <AboutSection>
                                <a
                                    href={this.state.data[this.props.lang].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Botao>
                                        {this.props.lang === 'pt'
                                            ? 'Saiba +'
                                            : 'Learn +'}
                                    </Botao>
                                </a>
                            </AboutSection>
                            {this.state.data.partnersLogos.length > 0 ? (
                                <AboutSection>
                                    <p
                                        css={css`
                                            font: bold 0.8em FedraMono !important;
                                            text-transform: uppercase;
                                        `}
                                    >
                                        {
                                            this.state.data[this.props.lang]
                                                .partners
                                        }
                                        :
                                    </p>
                                    <div
                                        css={css`
                                            margin-top: 28px;
                                            display: flex;
                                            justify-content: space-between;
                                            width: ${this.state.data
                                                .partnersLogos.length * 4}vw;
                                            img {
                                                height: 3.2vw;
                                            }
                                            @media (max-width: 992px) {
                                                width: ${this.state.data
                                                    .partnersLogos.length *
                                                25}%;
                                                margin-bottom: 20px;
                                                img {
                                                    height: 50px;
                                                }
                                            }
                                        `}
                                    >
                                        {this.state.data.partnersLogos.map(
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
                        flex: 1 5 30px;
                        @media (max-width: 992px) {
                            display: none;
                        }
                    `}
                />
            </div>
        );
    }
}
