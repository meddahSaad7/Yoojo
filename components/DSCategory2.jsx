import React from 'react'
import styled from 'styled-components'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';
const Image=styled.img`

`
const Container=styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 80px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: 10px;
  border-radius:10px;
`

const Title=styled.h3`
  margin-left: 10px;
  cursor: pointer;
`
const ArrowRightIcon1=styled(ArrowRightIcon)`
  display: flex;
  justify-content: end;
  margin-right: 10px;
`
const ImgCD=styled.img`
  width: 100%;
  height: 100%;
  transition: all 1s ease;
`
const CreateDomande=styled.div`
  width: 80%;
  border: 1px solid #b1b1b133;
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:hover{
    background-color: #b5b5b533;
  }
  &:hover ${ImgCD}{
    transform: scale(1.2);
  }
`
const ImgCDContainer=styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
`

const TextAndTitleCD=styled.div`
  
`
const TextCD=styled.p`
  cursor: pointer;
`
const TitleCD=styled.h2`
  cursor: pointer;
`
function DSCategory2() {
  const navigate=useNavigate()
  const dataCategories2=require('../DataCategories2')
  const handelClick=()=>{
    navigate('/forms')
  }
  return (
    <Container>
      {
        dataCategories2.map((element,index)=>(
          <Service key={index} onClick={()=>handelClick()}>
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
      <CreateDomande>
        <ImgCDContainer>
          <ImgCD src='https://d1b747rczec55w.cloudfront.net/assets/packs/media/bundles/YoupiJob/assets/images/svg-icons/askService/noResults-aa31208841a51fa98c1a06b391e12961.svg'/>
        </ImgCDContainer>
        <TextAndTitleCD>
          <TextCD>Créer une demande personnalisée Vous ne trouvez pas votre bonheur ?</TextCD>
          <TitleCD>Créer une demande personnalisée</TitleCD>
        </TextAndTitleCD>
        <ArrowRightIcon/>
      </CreateDomande>
    </Container>
  )
}
export default DSCategory2