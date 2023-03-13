import React from 'react'
import styled from 'styled-components';
import TopFooter from '../components/TopFooter';
import CenterFooter from '../components/CenterFooter';
import BottomFooter from '../components/BottomFooter';
import Icon from '../jsonSvg/joberImg';
const Container=styled.div`
  width: 100vw;
  height: 100vh;

`
const Empty=styled.div`
  
`
const Body=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Left=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:40px;
`
const Right=styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Footer=styled.div`
  
`
const Blocks=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Images=styled.div`
  margin-top: 20px;
  width: 70%;
  display: flex;
  justify-content: space-between;
`
const Image=styled.img`
  width: 200px;
  height: 50px;
`
const H5=styled.h5`

`
const H1=styled.h1`
  
`
function Jober() {
  return (
    <Container>
      
      <Body>
        <Empty>

        </Empty>
        <Blocks>
          <Left>
            <H5>Devenez Jobber</H5>
            <H1>Rendez des services et augmentez vos revenus</H1>
            <H5>Inscrivez-vous en téléchargeant l'application « Yoojo Jobber »</H5>
            <Images>
              <Image src='https://d1b747rczec55w.cloudfront.net/assets/app/apple-badge-8dfe72dd6da09f6e42137bc7eeae9bba69540e28fc792aaf96266dc0aed36e0f.png'/>
              <Image src='https://d1b747rczec55w.cloudfront.net/assets/app/google-play-badge-82bfd7160c955c71bca4cddf01f9deb0c00b2d13194834470aa16717f9ba5176.png'/>
            </Images>
          </Left>
          <Right>
            <Icon/>
          </Right>
        </Blocks>
      </Body>
      <Footer>
        <TopFooter/>
        <CenterFooter/>
        <BottomFooter/>
      </Footer>
    </Container>
  )
}

export default Jober