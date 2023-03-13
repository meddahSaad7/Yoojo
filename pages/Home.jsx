import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';
import Slide from '../components/Slide';
import Services from '../components/Services';
import SlideServices from '../components/SlideServices';
import HomeServices from '../components/HomeServices';
import MethodWork from '../components/MethodWork';
import Tips from '../components/Tips';
import Reviews from '../components/Reviews';
import PayImg from '../components/PayImg';
import Stimulate from '../components/Stimulate';
import Places from '../components/Places';
import TopFooter from '../components/TopFooter';
import CenterFooter from '../components/CenterFooter';
import BottomFooter from '../components/BottomFooter';
import Ads2 from '../componentAds/Ads2';
import { adsImages2 } from '../dataAds';
const Container=styled.div`

`
const Header=styled.div`
    width: 100vw;
    height: auto;
    overflow: hidden;

`
const Body=styled.div`
    width: 100vw;
    height: auto;
    overflow: hidden;
`
const Footer=styled.div`

`
function Home() {
  return (
    <Container>
        <Header>
            <Search/>
            <Ads2/>
            <Slide/>
        </Header>
        <Body>
            <Services/>
            <SlideServices/>
            <HomeServices/>
            <MethodWork/>
            <Places/>
            <Tips/>
            <Reviews/>
            <PayImg/>
            <Stimulate/>
        </Body>
        <Footer>
            <TopFooter/>
            <CenterFooter/>
            <BottomFooter/>
        </Footer>
    </Container>
  )
}

export default Home