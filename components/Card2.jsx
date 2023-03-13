import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
    flex: 1;
    margin: 15px;
    width: 300px;
`
const ContainerImg=styled.div`
    border-radius: 20px;
    width: 300px;
    height: 111px;
    overflow: hidden;
`
const Image=styled.img`
    width: 100%;
    border-radius: 20px;
    &:hover{
        transform: scale(1.2);
    }
    transition: all 1s ease;
`
const Title=styled.h2`
    
`
const Price=styled.h3`
    color: gray;
`
function Card2({data}) {
  return (
    <Container>
        <ContainerImg>
            <Image src={data.img}/>
        </ContainerImg>
        <Title>{data.title}</Title>
        <Price>Prix moyen {data.price[0]} $ - {data.price[1]} $</Price>
    </Container>
  )
}

export default Card2
