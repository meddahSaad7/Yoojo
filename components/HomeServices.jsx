import React from 'react'
import styled from 'styled-components';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CallIcon from '@mui/icons-material/Call';
import Lottie from 'lottie-react';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import Ads3 from '../componentAds/Ads3';
const styles={
  color:{
    color:'blue'
  },
  FW:{
    fontWeight:'bold',
    fontSize:'35px',
    color:'white'
  }
}
const Container=styled.div`
  padding: 40px;
  height: auto;
`
const Title=styled.h3`
  margin: 10px 0px;
  font-weight: bold;
`
const TitleGlobal=styled.h2`
  margin: 10px 0px;
  font-weight: bold;
`
const Blocks=styled.div`
  display: flex;
  height: auto;
  @media (max-width:535px) {
    flex-direction: column;
  }
`
const Block=styled.div`
  flex: 1;
  margin: 5px;
  display: flex;
  flex-direction: column;

`
const Text=styled.p`
  line-height: 25px;
  color: gray;
  font-size: 20px;
`
const ContainerImg=styled.div`
  width: 98%;
  height: 555px;
  margin-top: 100px;
  border-radius: 20px;
  background-color: #f1f6f9;
`
const BlockGlobal=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const BlockJob=styled.div`
  margin-left: 30px;
`
const Number=styled.h2`
  font-weight: bold;
`
const TextJob=styled.div`
  font-weight: bold;
  color: gray;
`
const Icon=styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:50%;
  border: 3px solid #7d99db;
  @media (max-width:990px) {
    width: 50px;
    height: 50px;
  }
`
const Image=styled.img`
`

function HomeServices() {
  const data=require('../jsonSvg/background.json');
  return (
    <Container>
      <TitleGlobal>Le service à domicile en toute sérénité</TitleGlobal>
      <Blocks>
        <Block>
          <HowToRegIcon style={styles.color}/>
          <Title>
            Prestataires qualifiés
          </Title>
          <Text>
            Tous les prix sont définis à l’avance, les jobbers s’engagent à les respecter. Toutes les rémunérations sont déclenchées en ligne après votre accord.
          </Text>
        </Block>
        <Block>
          <AccountBalanceWalletIcon style={styles.color}/>
          <Title>
            Prestations assurées
          </Title>
          <Text>
            Tous les prestataires sont vérifiés, suivis et évalués pour chaque service rendu afin de vous garantir le meilleur niveau de satisfaction.
          </Text>
        </Block>
        <Block>
          <VerifiedUserIcon style={styles.color}/>
          <Title>
            Budget respecté
          </Title>
          <Text>
            Toutes les prestations sont couvertes par notre assurance AXA, qu’il s’agisse de dommages corporels ou matériels occasionnés chez vous, sans franchise.
          </Text>
        </Block>
        <Block>
          <CallIcon style={styles.color}/>
          <Title>
            Service encadré
          </Title>
          <Text>
            Notre service client est à votre disposition 7j/7 pour vous assurer une expérience parfaite de la prise de commande jusqu'à la fin de la prestation.
          </Text>
        </Block>
      </Blocks>
      <ContainerImg  style={{position:'relative'}}>
        <Lottie animationData={data} width={100} height={100}/>
        <Title style={{position:'absolute',top:0,zIndex:44,margin:25}}>
          Spécialiste du service
        </Title>
        <Text style={{position:'absolute',top:60,zIndex:44,width:300,marginLeft:30}}>
          Tentez l’expérience et faites nous confiance comme plus de 485 000 clients qui aujourd’hui profitent de leur temps libre.
        </Text>
        <BlockGlobal style={{position:'absolute',top:200,left:50}}>
          <Icon style={{background:'#2d98f0'}}>
            <WorkHistoryIcon style={styles.FW}/>
          </Icon>
          <BlockJob>
            <Number>
              1 180 000
            </Number>
            <TextJob>
              Jobs réalisés
            </TextJob>
          </BlockJob>
        </BlockGlobal>
        <BlockGlobal style={{position:'absolute',top:300,left:50}}>
          <Icon style={{background:'#00fe0d'}}>
            <PermIdentityIcon style={styles.FW}/>
          </Icon>
          <BlockJob>
            <Number>
              35 000
            </Number>
            <TextJob>
              Jobbers actifs
            </TextJob>
          </BlockJob>
        </BlockGlobal>
        <BlockGlobal style={{position:'absolute',top:400,left:50}}>
          <Icon style={{background:'#bceb13'}}>
            <StarPurple500Icon style={styles.FW}/>
          </Icon>
          <BlockJob>
            <Number>
              4,9/5
            </Number>
            <TextJob>
              Note moyenne des jobbers
            </TextJob>
          </BlockJob>
        </BlockGlobal>
        <Ads3/>
      </ContainerImg>
    </Container>
  )
}

export default HomeServices