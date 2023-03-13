import React,{useRef,useEffect} from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Typed from 'react-typed';
const Container=styled.div`
    width: 100%;
    height: 100%;
    background-color: #eef1fc;
`
const SearchContent=styled.div`
    position: absolute;
    width: 50%;
    top: 190px;
    left: 30px;
    z-index: 888;
    @media (max-width:773px) {
        top:100px;
    }
`

const Text=styled.p`
    margin: 10px 0px;
    font-size: 45px;
    @media (max-width:773px) {
        font-size: 30px;
    }
    @media (max-width:640px) {
        font-size: 22px;
    }
    @media (max-width:553px) {
        font-size: 15px;
    }
`
const Title=styled.h6`
    width: 40%;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    @media (max-width:773px) {
        width:200px
    }
    

`
const SearchDiv=styled.div`
    width: 300px;
    height: 60px;
    border-radius:50px 50px;
    background: white;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    align-items: center;
    z-index: 999;
    @media (max-width:773px) {
        width: 250px;
        height: 50px;
    }
    @media (max-width:640px){
        width: 230px;
        height: 40px;
    }
    @media (max-width:553px) {
        width: 180px;
    }
`
const TextAnimation=styled.div`
    flex: 4;
`
const SearchIconM=styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    border-radius:50%;
    align-items: center;
    
`
const Nouveau=styled.div`
    background: red;
    border-radius:50px 50px;
    padding: 1px 5px;
    display: flex;
    justify-content: center;
    align-items:center;
    color: white;
`
const SearchIcon1=styled(SearchIcon)`
    background: blue;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    @media (max-width:773px) {
        padding: 5px;
    }
    @media (max-width:555px){
        padding: 3px;
        margin-right:5px;
    }
`

const Typed1=styled(Typed)`
    color:'gray';
    font-size:'15px';
    @media (max-width:773px) {
        font-size: 13px;
    }
    @media (max-width:540px) {
        font-size: 12px;
    }
`
function Search() {
    const data= require('../jsonSvg/nature.json')
    const activities=['Nettoyer la voiture','Déplacer un meuble','Replasser des chemises','Déménager',"Cours d'informatique",'taile une hait']
  return (
    <Container>
        <Lottie animationData={data} width={100} height={100} loop={true} style={{position:'relative',overflow:'hidden'}}/>
        <SearchContent>
            <Title>
                <Nouveau>
                    Nouveau
                </Nouveau>
                Payez en ticket CESU
            </Title>
            <Text>
                Trouvez le prestataire idéal pour tous les services du quotidien
            </Text>
            <SearchDiv>
                <TextAnimation>
                    <Typed1 strings={activities} typeSpeed={17} loop={true}/>
                </TextAnimation>
                <SearchIconM>
                    <SearchIcon1/>
                </SearchIconM>
            </SearchDiv>
        </SearchContent>
    </Container>
  )
}

export default Search