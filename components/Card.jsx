import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
    width: 300px;
    height: 230px;
    margin: 10px;
    @media (max-width:659px) {
        width: 80%;
    }
`
const ContainerImg=styled.div`
    width: 300px;
    height: 200px;
    overflow: hidden;
    border-radius: 20px;
    @media (max-width:659px) {
        width: 100%;
    }
`
const Image=styled.img`
    width: 100%;
    height: 190px;
    transform: scale(1.9);
    &:hover{
        transform: scale(2.1);
    }
    transition:all 1s ease;
`
const Title=styled.h2`
    
`
function Card({data}) {
  return (
    <Container>
        <ContainerImg>
            <Image src={data.img}/>
            
        </ContainerImg>
        <Title>
            {data.title}
        </Title>
    </Container>
  )
}

export default Card