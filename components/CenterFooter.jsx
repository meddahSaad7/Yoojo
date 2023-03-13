import React from 'react'
import styled from 'styled-components';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTranslation } from 'react-i18next';
const Container=styled.div`
    padding: 40px;
    display: flex;
    border-bottom: 1px solid #cbcbcb;
    @media (max-width:530px) {
        flex-direction: column;
    }
    flex-direction: ${props=>props.lang==='ar'?'row-reverse':'row'};
`
const Block=styled.div`
    flex:${props=>props.flex};
    display:flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    direction: ${props=>props.lang==='ar'?'rtl':'ltr'};
`
const Image=styled.img`
    width: 130px;
    margin-top:20px;
`
const Copyright=styled.div`
    display: flex;
    align-items: center;
`
const SocialMedia=styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: blue;
`
const UL=styled.ul`
    list-style: none;
    padding: 10px;
`
const LI=styled.li`
    cursor: pointer;
    color: gray;
    &:hover{
        text-decoration: underline;
    }
`
const Title=styled.h4`
    width: 90%;
`
const Span=styled.span`
    background: #fd3535;
    color: white;
    padding: 2px;
    border-radius: 4px;
    font-size: 12px;
    text-decoration: none;
`
function CenterFooter() {
    const [t,i18n]=useTranslation()
    const lang=localStorage.getItem('lang')
  return (
    <Container>
        <Block flex={1} lang={lang}>
            <Image src='/images/logo.png'/>
            <Copyright style={{color:'gray'}}>
                <CopyrightIcon style={{color:'blue'}}/> Yoojo 2022
            </Copyright>
            <SocialMedia>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </SocialMedia>
        </Block>
        <Block flex={1} lang={lang}>
            <Title>{t('Découvrir')}</Title>
            <UL>
                <LI>{t('Demander un service')}</LI>
                <LI>{t('Trouver un job')}</LI>
                <LI>{t('Devenir jobber')}</LI>
                <LI>{t('Blog')}</LI>
                <LI>{t('Application mobile')}</LI>
                <LI>{t('Application mobile jobber')}</LI>
                <LI>{t('Yoojo Direct')}</LI>
                <LI>{t('Avis clients')}</LI>
                <LI>{t('Tickets CESU')} <Span>{t('Nouveau')}</Span></LI>
                <LI>{t('Cartes cadeaux')}</LI>
                <LI>{t('Qui sommes-nous ?')}</LI>
            </UL>
        </Block>
        <Block flex={1} lang={lang}>
            <Title>{t('Informations utiles')}</Title>
            <UL>
                <LI>{t("Centre d'aide")}</LI>
                <LI>{t("L'assurance Yoojo")}</LI>
                <LI>{t("Crédit d'impôt")}</LI>
                <LI>{t('Conseils jobbing')}</LI>
                <LI>{t('Confiance et sécurité')}</LI>
                <LI>{t("Qu'est ce qu'un jobber PRO ?")}</LI>
                <LI>{t("Statut VIP")}</LI>
                <LI>{t("Services aux entreprises")}</LI>
                <LI>{t("FAQ services à la personne")}</LI>
                <LI>{t("Presse")}</LI>
                <LI>{t("Partenariats")}</LI>
                <LI>{t("Conditions générales client")}</LI>
                <LI>{t("Conditions générales jobber")}</LI>
                <LI>{t("Youpijob devient Yoojo")}</LI>
                <LI>{t("Orthographe et prononciation")}</LI>
                <LI>{t("Tout comprendre sur le Jobbing")}</LI>
            </UL>
        </Block>
        <Block flex={2} lang={lang}>
            <Title>{t("Télécharger l'application mobile")}</Title>
            <Image src='https://d1b747rczec55w.cloudfront.net/assets/app/apple-badge-8dfe72dd6da09f6e42137bc7eeae9bba69540e28fc792aaf96266dc0aed36e0f.png'/>
            <Image src='https://d1b747rczec55w.cloudfront.net/assets/app/google-play-badge-82bfd7160c955c71bca4cddf01f9deb0c00b2d13194834470aa16717f9ba5176.png'/>
        </Block>
    </Container>
  )
}

export default CenterFooter
