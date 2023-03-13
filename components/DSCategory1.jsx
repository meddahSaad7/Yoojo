import React from 'react'
import styled from 'styled-components'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const Container=styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const Service=styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b5b5b533;
  &:hover{
    background: #b5b5b533;
  }
`
const ImgAndTitle=styled.div`
  display: flex;
  width: auto;
  justify-content: start;
  align-items: center;
`
const ImgContainer=styled.div`
  width: 50px;
  height: 50px;
  border: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: 10px;
  border-radius: 10px;
`
const Image=styled.img`

`
const Title=styled.h3`
  margin-left: 10px;
`
const ArrowRightIcon1=styled(ArrowRightIcon)`
  display: flex;
  justify-content: end;
  margin-right: 10px;
`
function DSCategory1({setComponent,setPath,Path}) {
  const dataCategories1=require('../DataCategories1');
  const handelClick=(title)=>{
    setComponent('categories2')
    setPath([...Path,title])
  }
  return (
    <Container>
      {
        dataCategories1.map((element,index)=>(
          <Service key={index} onClick={()=>handelClick(element.title)}>
            <ImgAndTitle>
              <ImgContainer>
                <Image src={element.img}/>
              </ImgContainer>
              <Title>
                {element.title}
              </Title>
            </ImgAndTitle>
            
            <ArrowRightIcon1/>
          </Service>
        ))
      }
    </Container>
  )
}
export default DSCategory1