import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #cbcbcb;
  @media (max-width:600px) {
    flex-wrap: wrap;
  }
`
const Image=styled.img`
  width: 100px;
  height: 100px;
`
function PayImg() {
  return (
    <Container>
      <Image src='/images/pexels-magda-ehlers-1337384-removebg-preview.png'/>
      <Image src='/images/pexels-magda-ehlers-1337388-removebg-preview.png'/>
      <Image src='/images/pexels-magda-ehlers-1337372-removebg-preview.png'/>
      <Image src='/images/pexels-magda-ehlers-1337380-removebg-preview.png'/>
      <Image src='/images/pexels-magda-ehlers-1337384-removebg-preview.png'/>
      <Image src='/images/pexels-magda-ehlers-1337388-removebg-preview.png'/>
    </Container>
  )
}

export default PayImg