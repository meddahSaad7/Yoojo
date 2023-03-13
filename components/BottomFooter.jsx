import React from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import TranslateIcon from '@mui/icons-material/Translate';
import i18next from 'i18next';
const Container=styled.div`
    padding: 20px 40px;
    display: flex;
`
const Select=styled.select`
    width:130px;
    height: 40px;
    outline: none;
    flex: 1;
`
const Option=styled.option`
    
`
const UL=styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 65%;
    cursor: pointer;
    flex: 3;
    @media (max-width:724px) {
        flex: 4;
        font-size: 15px;
    }
    @media (max-width:650px) {
        flex: 5;
        font-size: 13px;
    }
`
const LI=styled.li`
    &:hover{
        text-decoration: underline;
    }
`
function BottomFooter() {
    const [t,i18n]=useTranslation();
    const change=(value)=>{
        localStorage.setItem('lang',value)
        i18n.changeLanguage(value)
    }
    const lang=localStorage.getItem('lang')||'english'
  return (
    <Container>
        <Select onChange={(e)=>change(e.target.value)} value={lang}>
            <Option value={''}>select</Option>
            <Option value={'fr'}>France </Option>
            <Option value={'ar'}>Arabic </Option>
            <Option value={'en'}>English </Option>
        </Select>
        <UL>
            <LI>{t('Tous les services')}</LI>
            <LI>{t('Toutes les villes')}</LI>
            <LI>{t('Toutes les jobs')}</LI>
            <LI>{t('Toutes les métiers')}</LI>
        </UL>
    </Container>
  )
}

export default BottomFooter
