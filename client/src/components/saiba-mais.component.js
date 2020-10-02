/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import AboutSection from './about-section.component';

import fechar from '../assets/img/fecharVerm.png';

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
                        ${BP.small} {
                            display: none;
                        }
                    `}
                />
                <div
                    css={css({
                        color: colors.vermelho,
                        flex: '5 1 0',
                        [BP.small]: {
                            flexGrow: 8,
                        },
                    })}
                >
                    {this.state.data ? (
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
                                            this.state.data[this.props.lang]
                                                .artist
                                        }
                                    </h4>
                                    <h4
                                        css={css`
                                            font-weight: normal;
                                            text-transform: none;
                                            display: ${this.state.data[
                                                this.props.lang
                                            ].title
                                                ? 'block'
                                                : 'none'};
                                        `}
                                    >
                                        {this.state.data[this.props.lang].title}
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
                                    dangerouslySetInnerHTML={this.createMarkup(
                                        this.state.data[this.props.lang].content
                                    )}
                                />
                                <div className="veja-mais-wrapper">
                                    <ul className="veja-mais">
                                        {this.state.data[
                                            this.props.lang
                                        ].links.map((value, index) => (
                                            <li key={index}>
                                                <a
                                                    href={value.url}
                                                    target={
                                                        value.blank
                                                            ? '_blank'
                                                            : '_self'
                                                    }
                                                >
                                                    {value.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
                                            ${BP.small} {
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
                        ${BP.small} {
                            display: none;
                        }
                    `}
                />
            </div>
        );
    }
}
