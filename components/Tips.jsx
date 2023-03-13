import React from 'react'
import styled from 'styled-components';
import Ads1 from '../componentAds/Ads1';
import { adsImages1 } from '../dataAds';
const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Title=styled.h2`
  width: 90%;
  margin-top: 50px;
  margin-bottom: 10px;
`
const Blocks=styled.div`
  width: 90%;
  height: auto;
  display: flex;
  @media (max-width:650px) {
    flex-direction: column;
  }
`
const Block=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: center;
  align-items: center;
`
const Image=styled.img`
  width: 100%;
  height: 100%;
  &:hover{
    transform: scale(1.2);
  }
  transition: all 1s ease;
`
const ImgCountainer=styled.div`
  flex: 2;
  width: 100%;
  overflow: hidden;
`
const H3=styled.h3`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    text-decoration: underline;
  }
`
const Text=styled.p`
  flex: 2;
  color: gray;
`
function Tips() {
  return (
    <Container>
      <Ads1 data={adsImages1}/>
      <Title>Besoin de conseils ?</Title>
      <Blocks>
        <Block>
          <ImgCountainer>
            <Image src='https://d1b747rczec55w.cloudfront.net/uploads/guide/cover/6/thumbnail_807cc32a.jpg'/>
          </ImgCountainer>
          <H3>Prodiut vaisselle maison :toutes les recettes</H3>
          <Text>            
            Découvrez nos recettes de produit vaisselle pour tous les usages
          </Text>
        </Block>
        <Block>
          <ImgCountainer>
            <Image src='https://d1b747rczec55w.cloudfront.net/uploads/guide/cover/28/thumbnail_454453c8.jpeg'/>
          </ImgCountainer>
          <H3>Encombarants a Marseille : toutes les solutions et demanrches</H3>
          <Text>      
            Toutes les solutions pour vous débarrasser de vos encombrants à Marseille
          </Text>
        </Block>
        <Block>
          <ImgCountainer>
            <Image src='https://d1b747rczec55w.cloudfront.net/uploads/guide/cover/47/thumbnail_a9c7d2d3.jpeg'/>
          </ImgCountainer>
          <H3>Apprendre a changer une bonde cassee</H3>
          <Text>     
            Dès que vous constatez une anomalie, il faut songer à remplacer cette pièce au plus tôt. Yoojo vous propose un tutoriel détaillé pour que vous puissiez changer une bonde en toute sérénité.
            Vous avez le sens du service ?
          </Text>
        </Block>
      </Blocks>
    </Container>
  )
}

export default Tips