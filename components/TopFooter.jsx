import React from 'react'
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useTranslation } from 'react-i18next';
const Container=styled.div`
    display: flex;
    padding: 40px;
    border-bottom: 1px solid #cbcbcb;
    @media (max-width:500px) {
        flex-direction: column;
    }
    direction: ${props=>props.lang==='ar'?'rtl':'ltr'};
`
const Left=styled.div`
    flex: 1;
`
const Right=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
`
const Title=styled.h2`
    
`
const Text=styled.p`
    
`
const Links=styled.div`
    display: flex;
    align-items: center;
    color: blue;
    font-weight: bold;
    font-size: 18px;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`
function TopFooter() {
    const [t,i18n]=useTranslation();
    const lang=localStorage.getItem('lang')
  return (
    <Container lang={lang}>
        <Left>
            <Title>{t('Nous sommes là pour vous aider')}</Title>
        </Left>
        <Right>
            <Text>
                {t("En cas de besoin, consultez notre centre d'aide ou écrivez-nous via le formulaire de contact")}
            </Text>
            <Links>
                {t("Obtenir de l'aide")}{lang==='ar'?<KeyboardArrowLeftIcon/>:<KeyboardArrowRightIcon/>}
            </Links>
        </Right>
    </Container>
  )
}

export default TopFooter
