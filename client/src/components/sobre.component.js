/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import AboutSection from './about-section.component';

import fechar from '../assets/img/fecharVerm.png';

export default class Sobre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    currentWidth = window.innerWidth;

    // insert html from backend
    createMarkup = (markup) => {
        return { __html: markup };
    };

    componentDidMount() {
        axios.get('/api/sobre').then((res) => {
            this.setState({ data: res.data });
        });
    }

    render() {
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
                    {this.state.data ? (
                        <div>
                            <AboutSection
                                css={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <h4>
                                    {this.state.data.title[this.props.lang]}
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
                                    dangerouslySetInnerHTML={this.createMarkup(
                                        this.state.data.content[this.props.lang]
                                    )}
                                />
                                <div className="veja-mais-wrapper">
                                    {this.state.data.partnersLogos.length >
                                    0 ? (
                                        <ul className="veja-mais sobre-logos">
                                            {this.state.data.partnersLogos.map(
                                                (value, index) => (
                                                    <li key={index}>
                                                        <span>
                                                            {
                                                                value.title[
                                                                    this.props
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
                                                                    this
                                                                        .currentWidth <
                                                                        768 &&
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
}
