import React from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Container=styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100%;
`
const Download=styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImgDownload=styled.img`
  margin: 0px 5px;
`
const Transactoins=styled.div`
  flex: 2;
  overflow-y: hidden;
  &:hover{
    overflow-y: scroll;
    ::-webkit-scrollbar{
      width: 5px;
      border: 1px solid #ebebeb;
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      width: 2px;
      background-color: #c9c9c9;
      border-radius: 20px;
    }
  }

`
const Title=styled.h2`
  
`
const Transaction=styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0px;
`
const ContainerImgTitle=styled.div`
  flex: 1.5;
  display:flex;
  justify-content: center;
  align-items: center;
`
const Date=styled.span`
  flex: 1;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Eearning=styled.span`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: .5;
  color: gray;
`
const MoreVertIcon1=styled(MoreVertIcon)`
  flex:.5;
  color: gray;
`
const Image=styled.img`
  width: 50px;
  height:50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`
const TransactionName=styled.h3`
  
`

function LeftDashboard() {
  return (
    <Container>
      <Download>
        <ImgDownload src='https://d1b747rczec55w.cloudfront.net/assets/app/apple-badge-8dfe72dd6da09f6e42137bc7eeae9bba69540e28fc792aaf96266dc0aed36e0f.png'/>
        <ImgDownload src='https://d1b747rczec55w.cloudfront.net/assets/app/google-play-badge-82bfd7160c955c71bca4cddf01f9deb0c00b2d13194834470aa16717f9ba5176.png'/>
      </Download>
      <Transactoins>
        <Title>Transactoins</Title>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
        <Transaction>
          <ContainerImgTitle>
            <Image src='/images/person.jpg'/>
            <TransactionName>Weeding video</TransactionName>
          </ContainerImgTitle>
          <Date>25 Mr 2022</Date>
          <Eearning>43$</Eearning>
          <MoreVertIcon1/>
        </Transaction>
      </Transactoins>
    </Container>
  )
}

export default LeftDashboard
