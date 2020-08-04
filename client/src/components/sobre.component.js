/** @jsx jsx */
import { Component } from 'react';
import { css, jsx } from '@emotion/core';
import axios from 'axios';
import colors from '../styles/colors';

export default class Sobre extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }

    componentDidMount() {
        axios.get('/api/sobre').then((res) => {
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
                            <h4
                                css={css({
                                    marginTop: '4.8em',
                                    marginBottom: '2.4em',
                                })}
                            >
                                {this.state.data.pt.title}
                            </h4>
                            <p
                                css={css({
                                    fontFamily: 'Graphik',
                                })}
                            >
                                {this.state.data.pt.content}
                            </p>
                            <p> {this.state.data.pt.content} </p>
                        </div>
                    ) : (
                        <div className="sobre">Carregando</div>
                    )}
                </div>
            </div>
        );
    }
}
