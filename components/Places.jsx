import React,{useState} from 'react'
import styled from 'styled-components'
import DataPlaces from '../DataPlaces';
import CardPlace from './CardPlace';
import {Link} from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarRateIcon from '@mui/icons-material/StarRate';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CardSlide from './CardSlide';
import DataReview from '../DataReview';
const styles={
  link:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
}
const Container=styled.div`
  padding:40px;
  display:flex;
  flex-direction:column;
  justify-content:cetner;
  align-items:center;
`
const Title=styled.h2`
  width:92%;
  display:flex;
  justify-content:center;
  margin-top:10px;
  align-items:center;
`
const Cards=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`
const Card=styled.div`
  
`
const LinkContainer=styled.div`
  width:92%;
  display:flex;
  justify-content:cetner;
  align-items:cetner;
  color:blue;
  font-weight:bold;

`

const SlideContainer=styled.div`
  width:91%;
  height:auto;
  border:1px solid #d5d9da;
  border-radius:20px;
  margin-top:80px;
  display:flex;
  align-items:center;
  @media (max-width:773px) {
    flex-direction: column;
  }
`
const SlideContLeft=styled.div`
  flex:1;
  display:flex;
  height:50%;
  flex-direction:column;
  justify-content:space-around;
  padding:30px;
`
const SlideContRight=styled.div`
  flex:1;
  width:500px;
  overflow:hidden;
  position:relative;
  padding:10px;
  @media (max-width:670px) {
    width: 390px;
  }
  @media (max-width:490px) {
    width: 320px;
  }
`
const SlideTitle=styled.h3`
  font-weight:bold;
`
const SlideText=styled.p`
  font-size:20px;
  color:gray;
`
const SlideLinkContainer=styled.div`
  display:flex;
  align-items:center;
  color:blue;
`
const Text=styled.p`
  width:90%;
  text-align:center;
  margin-top:10px;
`
const Left=styled.div`
  position:absolute;
  width:35px;
  height:35px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  top:100px;
  left:0px;
  background:white;
  z-index:9999;
  box-shadow:5px 5px 10px gray;
`
const Right=styled.div`
  position:absolute;
  width:35px;
  height:35px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:50%;
  top:100px;
  right:3px;
  background:white;
  box-shadow:5px 5px 10px gray;
`
const CardsContainer=styled.div`
  display:flex;
  justify-content:cetner;
  align-items:center;
  width:${props=>props.length*390}px;
  transform:translate(${props=>props.count}px);
  transition:all 1s ease;

`
function Places() {
  const [count,setCount]=useState(0)
  const handleClick=(props)=>{
    if(props==='left'){
      if(-count/390<=0){
      }else{
        setCount(count+390)
      }
    }else{
      if(-count/390>=DataReview.length-1){
      }else{
        setCount(count-390)
      }
    }
  }
  return (
    <Container>
      <Title>Nous sommes partout en France</Title>
        
      <Cards>

        {
          DataPlaces.map((data,index)=>(
            <CardPlace data={data} key={index}/>
          ))
        }

      </Cards>
      
      <LinkContainer>
        <Link style={styles.link}>Voir toutes les villes</Link><ChevronRightIcon/>
      </LinkContainer>
      <SlideContainer>
        <SlideContLeft>
          <SlideTitle>
            Les utilisateurs nous font confiance
          </SlideTitle>
          <SlideText>
            La satisfaction de nos utilisateurs est notre priorité. Vous souhaitez être convaincu que Yoojo est la bonne plateforme ? Découvrez les avis !
          </SlideText>
          <SlideLinkContainer>
            <Link style={{fontSize:'17px'}}>Voir tous les avis clients</Link><ChevronRightIcon/>
          </SlideLinkContainer>
        </SlideContLeft>
        <SlideContRight>
          <Left onClick={()=>handleClick('left')}>
            <KeyboardArrowLeftIcon/>
          </Left>
          <CardsContainer count={count} length={DataReview.length}>
            {
              DataReview.map((data,index)=>(
                <CardSlide data={data} key={index}/>
              ))
            }
          </CardsContainer>
          <Right onClick={()=>handleClick('right')}>
            <KeyboardArrowRightIcon/>
          </Right>
          <Text>
            Une note de 4.6 5 sur la base de 10 369 avis. Nos avis 4 et 5 etoiles.
          </Text>
          <Title><StarRateIcon style={{color:'green',fontSize:'25px'}}/>Trustpilot</Title>
        </SlideContRight>
      </SlideContainer>
    </Container>
  )
}

export default Places