/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import AboutSection from './about-section.component';

import fechar from '../assets/img/fecharVerm.png';

export default function SaibaMais(props) {

    const [saibaMaisState, setSaibaMaisState] = useState({ data: null });
    const [replacementText, setReplacementText] = useState("");
    const linksRef = useRef(null);

    // Get data
    useEffect(() => {
        axios.get('/api/saibamais').then((res) => {
            setSaibaMaisState({ data: res.data });
        });
    }, []);
    
    // Set initial replacement text
    useEffect(() => {
        if(saibaMaisState.data){
            setReplacementText(
                saibaMaisState.data[props.lang].content
            )
        }
    }, [saibaMaisState, props.lang]);
    
    // Insert html from backend
    const createMarkup = (markup) => {
        return { __html: markup };
    };

    // Link handler for text replacement
    const textReplacementHandler = (event, link, data, list, index) => {

        if(data.replaceText){

            event.preventDefault();
            setReplacementText(link.textReplacement);

            let currentList = ReactDOM.findDOMNode(list.current);

            // All elements
            let links = currentList.querySelectorAll(`li a`)
            // Clicked element
            let clickedLink = currentList.querySelectorAll(`li[id="${index}"] a`)[0]
            // Clear bold
            links.forEach(link => link.style = "");
            // Bold clicked element
            clickedLink.style.fontWeight = "bold";

        }
    }

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
                                dangerouslySetInnerHTML={createMarkup(replacementText)}
                            />
                            <div className="veja-mais-wrapper">
                                <ul className="veja-mais" ref={linksRef}>
                                    {saibaMaisState.data[
                                        props.lang
                                    ].links.map((value, index) => (
                                        <li key={index} id={index}>
                                            <a
                                                href={value.url}
                                                target={
                                                    (value.blank && !saibaMaisState.data.replaceText)
                                                        ? '_blank'
                                                        : '_self'
                                                }
                                                onClick={(event) => textReplacementHandler(event, value, saibaMaisState.data, linksRef, index)}
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
