import React from 'react'
import styled from 'styled-components';
import dataCards from '../Data';
import Card from './Card';
import Ads1 from '../componentAds/Ads1';
import { adsImages2 } from '../dataAds';
const Container=styled.div`
    padding: 10px;
`
const Cards=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const Texts=styled.div`
    display: flex;
    @media (max-width:460px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`
const Left=styled.div`
    flex: 1;
    padding-left: 4%;
    @media (max-width:460px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        font-size: 20px;
    }
`
const Right=styled.div`
    flex: 1;
    padding: 30px;
    display: flex;
    align-self: flex-end;
    @media (max-width:460px) {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 100%;
    }
`
const H2=styled.h2`

`
const P=styled.p`
    color: gray;
    @media (max-width:460px) {
        width: 100%;
    }
`

const Span=styled.span`
    margin-left: 40%;
    margin-right: 5px;
    font-weight: bold;
    font-size: 20px;
    color: blue;
    @media (max-width:460px) {
        margin-left: auto;
        margin-right: auto;
    }
`

function Services() {
  return (
    <Container>
        <Texts>
            <Left>
                <H2>De quel service avez-vous besoin ?</H2>
                <P>Pour chaque situation, trouvez le prestataire dont les compétences répondent à vos attentes et à votre niveau d’exigence.</P>
            </Left>
            <Right>
                <P><Span>-50% </Span>crédit d'impôt selon la catégorie</P>
            </Right>
        </Texts>
        <Cards>
            {
                dataCards.map((card,index)=>(
                    <Card data={card} key={index}/>
                ))
            }
            
        </Cards>
        <Ads1 data={adsImages2}/>
    </Container>
    
  )
}

export default Services