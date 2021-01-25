/** @jsx jsx */
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import colors from '../styles/colors';
import BP from '../styles/breakpoints';

import AboutSection from './about-section.component';

import fechar from '../assets/img/fecharVerm.png';
import dl_button from '../assets/img/dl_button.png';

export default function SaibaMais(props) {

    const [saibaMaisState, setSaibaMaisState] = useState({ data: null });
    const [replacementText, setReplacementText] = useState("");
    const [saibaMaisTitle, setSaibaMaisTitle] = useState("");
    const [saibaMaisSubTitle, setSaibaMaisSubTitle] = useState("");
    const [urlQuery, setUrlQuery] = useState(null);

    const listRef = useRef(null);
    const linkRef = useRef(null);

    // Get data
    useEffect(() => {
        setUrlQuery(queryString.parse(props.location.search));
        axios.get('/api/saibamais').then((res) => {
            setSaibaMaisState({ data: res.data });
        });
    }, []);
    
    // Set initial title and replacement text
    useEffect(() => {
        if(saibaMaisState.data){
            setReplacementText(
                saibaMaisState.data[props.lang].content
            );
            setSaibaMaisTitle(
                saibaMaisState.data[props.lang].name
            );
            setSaibaMaisSubTitle(
                saibaMaisState.data[props.lang].subtitle
            );
        }
    }, [saibaMaisState, props.lang]);

    // Navigate to sidebar item programatically (simulate click)
    useEffect(() => {
        if(linkRef.current !== null){
            linkRef.current.click();
        }
    }, [linkRef.current]);
    
    // Insert html from backend
    const createMarkup = (markup) => {
        return { __html: markup };
    };

    // Update title if text replacement is enabled
    const titleHandler = (newTitle, list, reset = false) => {
        setSaibaMaisTitle(newTitle);
        if(reset){
            setSaibaMaisSubTitle(saibaMaisState.data[props.lang].subtitle);
            setReplacementText(saibaMaisState.data[props.lang].content);

            // Clear bold
            let currentList = ReactDOM.findDOMNode(list.current);
            if(currentList){
                currentList.querySelectorAll(`li a`)
                    .forEach(link => link.style = "");
            }
        } else {
            setSaibaMaisSubTitle(<span css={{color:'white'}}>_</span>);
        }
    }

    // Link handler for text replacement
    const textReplacementHandler = (event, link, data, list, index) => {

        if(data.replaceText){

            if(event){
                event.preventDefault();
            }

            setReplacementText(link.textReplacement);

            let currentList = ReactDOM.findDOMNode(list.current);

            if(currentList){
                // All elements
                let links = currentList.querySelectorAll(`li:not(.veja-mais-title) a`)
                // Clicked element
                let clickedLink = currentList.querySelectorAll(`li[id="${index}"] a`)[0]
                // Clear bold
                links.forEach(link => link.style = "");
                currentList.querySelectorAll(`li.veja-mais-title a`)[0].style = "font-weight:normal";
                // Bold clicked element
                clickedLink.style.fontWeight = "bold";

                // Update title and subtitle
                titleHandler(clickedLink.innerHTML);
            }
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
                                <h4>{saibaMaisTitle}</h4>
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
                                >{saibaMaisSubTitle}</h4>
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
                                <ul className="veja-mais" ref={listRef}>

                                    {/* If replaceText is enabled, set first item with programme name*/}
                                    {saibaMaisState.data.replaceText ? 
                                        <li className="veja-mais-title"
                                            css={{fontWeight: 'bold', cursor: 'pointer'}}
                                            onClick={() => titleHandler(
                                                saibaMaisState.data[props.lang].name,
                                                listRef,
                                                true
                                            )}
                                        ><a>{saibaMaisState.data[props.lang].name}</a></li> : null}

                                    
                                    
                                    {saibaMaisState.data[
                                        props.lang
                                    ].links.map((value, index) => 
                                        (
                                            <li key={index} id={index} className={value.download ? 'download' : ''}>
                                                { value.download 
                                                    ? <a
                                                        className="dl_button"
                                                        href={value.url}
                                                        target={
                                                            (value.blank && !saibaMaisState.data.replaceText)
                                                                ? '_blank'
                                                                : '_self'
                                                      }>
                                                        <img src={dl_button} />
                                                      </a>
                                                    : null
                                                }
                                                <a
                                                    dangerouslySetInnerHTML={createMarkup(value.title)}
                                                    href={value.url}
                                                    target={
                                                        (value.blank && !saibaMaisState.data.replaceText)
                                                            ? '_blank'
                                                            : '_self'
                                                    }
                                                    ref={
                                                        saibaMaisState.data.replaceText &&
                                                        urlQuery !== null && 
                                                        urlQuery['artist'] && 
                                                        value.title.toLowerCase() === urlQuery['artist'].toLowerCase()
                                                        ? linkRef
                                                        : null
                                                    }
                                                    onClick={(event) => textReplacementHandler(event, value, saibaMaisState.data, listRef, index)}
                                                >
                                                </a>
                                            </li>
                                        )
                                    )}
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
                                        saibaMaisState.data[props.lang].partners 
                                        ? `${saibaMaisState.data[props.lang].partners}: `
                                        : ''
                                    }
                                </p>
                                <div
                                    css={css`
                                        margin-top: 28px;
                                        display: flex;
                                        justify-content: space-between;
                                        width: ${saibaMaisState.data
                                            .partnersLogos.length * 6}vw;
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
                                            <a href={value.url} target="_blank">
                                                <img
                                                alt=""
                                                src={value.img}
                                                key={index}
                                            />
                                            </a>
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
