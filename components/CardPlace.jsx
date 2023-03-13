import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
    width: 200px;
    height: 200px;
    margin: 10px;
    margin-bottom: 40px;
    @media (max-width:520px) {
        width: 400px;
        height: 300px;
    }
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    &:hover{
        transform: scale(1.2);
    }
    transition: all 1s ease;
`
const Text=styled.p`
    font-weight: bold;
    color: gray;
    margin:5px 0px;
`
const Title=styled.h2`
    
`
const ImageContainer=styled.div`
    width: 100%;
    height: 80%;
    border-radius: 15px;
    overflow: hidden;
    
`
function CardPlace({data}) {
  return (
    <Container>
        <ImageContainer>
            <Image src={data.img}/>
        </ImageContainer>
        <Text>Service a domicile a</Text>
        <Title>{data.placeName}</Title>
    </Container>
  )
}

export default CardPlace
