/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import colors from '../styles/colors';

import Botao from './botao.component';

export default class SaibaMais extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    componentDidMount() {
        axios.get('/api/saibamais').then((res) => {
            this.setState({ data: res.data });
        });
    }

    render() {
        return (
            <div className="sobre">
                <div
                    css={css({
                        margin: '0 auto',
                        width: '50%',
                        color: colors.vermelho,
                    })}
                >
                    {this.state.data ? (
                        <div>
                            <div>
                                <h4
                                    css={css({
                                        marginTop: '4.8em',
                                        marginBottom: '2.4em',
                                    })}
                                >
                                    {this.state.data.pt.artist}
                                    {this.state.data.pt.title}
                                </h4>
                                <p>{this.state.data.pt.content}</p>
                                <Botao>Saiba +</Botao>
                            </div>
                            {this.state.data.partnersLogos ? (
                                <div
                                    css={css`
                                        margin-top: 50px;
                                    `}
                                >
                                    <p
                                        css={css`
                                            font: bold 0.8em FedraMono !important;
                                            text-transform: uppercase;
                                        `}
                                    >
                                        {this.state.data.pt.partners}:
                                    </p>
                                    <div
                                        css={css`
                                            margin-top: 28px;
                                            display: flex;
                                            justify-content: space-between;
                                            width: ${this.state.data
                                                .partnersLogos.length * 55}px;
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
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <div className="sobre">
                            <p>Carregando</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
