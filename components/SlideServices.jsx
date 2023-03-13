import React,{useState} from 'react'
import styled from 'styled-components';
import Data2 from '../Data2';
import Card2 from './Card2';
import {Link} from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const Container=styled.div`
  width: 100vw;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Wrapper=styled.div`
  width: 93%;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const H2=styled.h2`
  width: 92vw;
  margin-top:30px;
`
const Cards=styled.div`
  display: flex;
  position: relative;
  overflow-x: hidden;
  transform: translate(${props=>props.count*300}px);
  transition: all 1s ease;
`
const Links=styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 90vw;
  color: blue;
`
const Left=styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  box-shadow: 2px 3px 5px gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 33;
  top: 110px;
  left: 5%;
`
const Reight=styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  box-shadow: 2px 3px 5px gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 33;
  top: 110px;
  left: 90%;
`
function SlideServices() {
  const [count,setCount]=useState(0)
  const handleClick=(props)=>{
    if(props==='reight'){
      if(count>=-Data2.length/3-1){
        setCount(count-1)
      }
    }else{
      if(count<0){
        setCount(count+1)
      }
    }
  }
  return (
    <Container>
      <Wrapper>
        <H2>
        Découvrez nos services du moment  ........
      </H2>
      <Left onClick={()=>{handleClick('left')}}>
        <KeyboardArrowLeftIcon/>
      </Left>
      <Cards count={count}>

        {
          Data2.map((data,index)=>(
            <Card2 data={data} key={index}/>
          ))
        }

      </Cards>
      <Reight onClick={()=>{handleClick('reight')}}>
        <KeyboardArrowRightIcon/>
      </Reight>
      <Links>
        <Link to={'/'} style={{fontWeight:'bold',fontSize:'19px'}}>
          Voir tout les services 
        </Link><KeyboardArrowRightIcon/>
      </Links>
      </Wrapper>
    </Container>
  )
}

export default SlideServices