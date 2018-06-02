import React, { Component } from 'react';
import { Grid, Row, Col1of2, Col1of3, Col1of4, Col2of3, Col2of4, Col3of4 } from '../style/layout'
import { theme } from '../style/styled-components/Theme'
import styled, { ThemeProvider } from 'styled-components'
import img1 from '../img/nat-1-large.jpg'
import img2 from '../img/nat-2-large.jpg'
import img3 from '../img/nat-3-large.jpg'

const Main = styled.main`

`
const AboutSection = styled.section`
    background-color: ${props => props.theme.color_grey_light_1};
    padding: 25rem 0;
    margin-top: -20vh;
`
//negative margin

const U_CenterText = styled.div`
    text-align: center;
`
//text-align: center; centers the text in children
const U_MarginBottom = styled.div`
    margin-bottom: ${props => props.margin ? props.margin : '1rem'};
`

const HeadingTertiary = styled.h3`
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
`
const Paragraph = styled.p`
    font-size: 1.6rem;
    &:not(:last-child){
        margin-bottom: 3rem;
    }
`

const ButtonText = styled.a`
    &:link,
    &:visited{
        font-size: ${props => props.theme.default_font_size};
        color: ${props => props.theme.color_primary};
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid ${props => props.theme.color_primary};
        padding: 3px;
        transition: all .2s;
    }
    &:hover{
        transform: translateY(-2px);
        box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
        color: ${props => props.theme.color_grey_light_1};
        background-color: ${props => props.theme.color_primary};
        border-bottom: 1px solid ${props => props.theme.color_grey_light_1};
    }
    &:active{
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
        transform: translateY(0);
    }
`

const HeadingSecondary = styled.h2`
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    background-image: linear-gradient(to right, ${props => props.theme.color_primary_light}, ${props => props.theme.color_primary_dark});
    display: inline-block;
    -webkit-background-clip: text;
    color: transparent;
    transition: all .2s;
    letter-spacing: .2rem;
    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(0,0,0,.2);
    }
`
//display: inline-block; makes the element and its background to occupy only the space the text occupies
//-webkit-background-clip: text; cuts the background behind the text
//color: transparent makes the clipped background visible
//scew stretches the text to sides and up, scale enlarges it
//text-shadow; first arg is shadow on X, second on Y, third blur offset, last is color(black with 20% opacity)

const Image = styled.img`
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0, .4);
    border-radius: 2px;
    position: absolute;
    top: ${props => props.top ? props.top : ''};
    bottom: ${props => props.bottom ? props.bottom : ''};
    right: ${props => props.right ? props.right : ''};
    left: ${props => props.left ? props.left : ''};
    transition: all .2s;
    z-index: 10;
    outline-offset: 2rem;
    &:hover{
        transform: scale(1.1) translateY(-.5rem);
        z-index: 20;
        box-shadow: 0 2.5rem 4rem rgba(0,0,0, .5);
        outline: 1rem solid ${props => props.theme.color_primary};
    }
    &:hover + img:not(:hover){
        transform: scale(.9);
    }`

const Composition = styled.div`
    position: relative;
`

class MainComponent extends Component {
    render() {
        return (
            <Main>
                <AboutSection>
                    <U_CenterText>
                        <HeadingSecondary>
                            exciting tours for adventurous people
                        </HeadingSecondary>
                    </U_CenterText>
                    <U_MarginBottom margin='8rem' />
                    <Row>
                        <Col1of2>
                            <HeadingTertiary>
                                You're going to fall in love with nature.
                            </HeadingTertiary>
                            <U_MarginBottom margin='1.5rem' />
                            <Paragraph>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolorum fuga debitis aut amet natus sapiente, ex, exercitationem temporibus illo tenetur. Qui quam accusantium aliquam minima eos, dignissimos cum nostrum?
                            </Paragraph>
                            <HeadingTertiary>
                                You're going to fall in love with nature.
                            </HeadingTertiary>
                            <U_MarginBottom margin='1.5rem' />
                            <Paragraph>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dolorum fuga debitis aut amet natus sapiente, ex, exercitationem temporibus illo tenetur. Qui quam accusantium aliquam minima eos, dignissimos cum nostrum?
                            </Paragraph>
                            <ButtonText href='#'>Learn more &rarr;</ButtonText>
                        </Col1of2>
                        <Col1of2>
                            <Composition>
                                <Image src={img1} top='-2rem' left='0'></Image>
                                <Image src={img2} top='2rem' right='0'></Image>
                                <Image src={img3} left='20%' top='10rem'></Image>
                            </Composition>
                        </Col1of2>
                    </Row>
                </AboutSection>
            </Main>
        )
    }
}

export default MainComponent;
