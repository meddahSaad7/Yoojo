import React,{useState} from 'react'
import styled from 'styled-components';
import TopFooter from '../components/TopFooter';
import CenterFooter from '../components/CenterFooter';
import BottomFooter from '../components/BottomFooter';
import PayImg from '../components/PayImg';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import {useNavigate} from 'react-router-dom';
const Container=styled.div`
    width: 100vw;
    height: 100vh;
`
const Body=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const Footer=styled.div`
    
`
const Empty=styled.div`
    
`
const H1=styled.h1`
    
`
const Selection=styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ToLogin=styled.div`
    
`
const H2=styled.h2`
    flex: 1;
    cursor: pointer;
`
const P=styled.p`
    flex: 1;
    cursor: pointer;
`
const Card=styled.div`
    width: 40%;
    height: 70%;
    border: 1px solid rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    &:hover{
        box-shadow: 5px 10px 20px #c7c7c7;
    }
`
const OU=styled.span`
    
`
const Image=styled.img`
    flex: 2;
    width: 100px;
    height: 100px;
    background:red;
`
const Lottie1=styled(Lottie)`
    width: 70%;
    height: 70%;
`
const Lottie2=styled(Lottie)`
    width: 70%;
    height: 70%;
`
function Register({visibility,setVisibility}) {
    const body=document.getElementById('body')
    const dataWork=require('../jsonSvg/work.json');
    const dataServices=require('../jsonSvg/services.json');
    const navigate=useNavigate();
    const handleClick=()=>{
        body.setAttribute('style','overflow:hidden')
        setVisibility(!visibility);
    }
  return (
    <Container>
        <Body>
            <Empty/>
            <H1>Bienvenue chez Yoojo</H1>
            <Selection>
                <Card onClick={handleClick}>
                    <Lottie1 animationData={dataServices}/>
                    <H2>J'ai besoin d'un service</H2>
                    <P>
                        Trouvez le prestataire idéal pour vos services du quotidien
                    </P>
                </Card>
                <OU>OU</OU>
                <Card onClick={()=>navigate('/jober')}>
                    <Lottie2 animationData={dataWork}/>
                    <H2>Devenir jobber</H2>
                    <P>
                        Augmentez vos revenus en rendant service près de chez vous
                    </P>
                </Card>
            </Selection>
            <ToLogin>
                Vous avez déjà un compte ? <Link to={'#'}>Connectez-vous</Link>
            </ToLogin>
        </Body>
        <PayImg/>
        <Footer>
            <TopFooter/>
            <CenterFooter/>
            <BottomFooter/>
        </Footer>
    </Container>
  )
}

export default Register
