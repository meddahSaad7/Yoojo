import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:left ;
`
const Title=styled.h2`
  margin-bottom: 20px;
`
const Blocks=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width:550px) {
    flex-direction: column;
  }
`
const Block=styled.div`
  flex: 1;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 390px;
  @media (max-width:730px) {
    margin: 5px;
    width: 100px;
  }
  @media (max-width:550px) {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
  }
`
const ContainerImg=styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image=styled.img`
  width: 80%;
  height: 80%;
  @media (max-width:730px) {
    width: 80%;
    height: 80%;
  }
`
const BigImg=styled.img`
  width: 85vw;
  height: 75vh;
  border-radius: 20px;
`
const H3=styled.h3`
  flex: 1;
  @media (max-width:730px) {
    font-size: 15px;
  }
`
const Text=styled.p`
  flex: 5;
  font-size: 20px;
  color: gray;
  width: 80%;
  display: flex;
  align-items: flex-start;
  @media (max-width:730px) {
    font-size: 15px;
  }
`
const ContainerBigImg=styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 30px;
`
const ContainerCard=styled.div`
  top: 40px;
  left: 100px;
  position: absolute;
  z-index: 44;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width:932px) {
      height: 300px;
  }
  @media (max-width:622px) {
      left: 80px;
  }
  @media (max-width:550px) {
      left: 50px;
  }
  @media (max-width:445px) {
      left: 30px;
  }
`
const H1=styled.h1`
   @media (max-width:622px) {
      width: 350px;
  }
  @media (max-width:550px) {
      width: 250px;
  }
  @media (max-width:445px) {
      width: 290px;
      font-size: 25px;
  }

`
const TextCard=styled.p`
  font-size: 20px;
  color: gray;
  display: flex;
  justify-content: center;
  align-content: center;
  @media (max-width:622px) {
      width: 350px;
  }
  @media (max-width:550px) {
      width: 250px;
  }
  @media (max-width:445px) {
      width: 290px;
  }
`
const Button=styled.button`
  width: 300px;
  height: 40px;
  border: none;
  outline: none;
  color: #4c4ce9;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  @media (max-width:622px) {
      width: 350px;
  }
  @media (max-width:550px) {
      width: 250px;
      font-size: 15px;
  }
  @media (max-width:445px) {
      width: 200px;
      font-size: 15px;
  }
`
function MethodWork() {
  return (
    <Container>
      <Title>Comment ça marche ?</Title>
      <Blocks>
        <Block>
          <ContainerImg>
            <Image src='https://d1b747rczec55w.cloudfront.net/assets/hiw-icon1-c2b46308c928256d1bc34d7fcb07a162a7140c3f120d810f55dc9db87de74627.svg'/>
          </ContainerImg>
          <H3>Demandez un service</H3>
          <Text>
            Remplissez le formulaire et obtenez une estimation du prix et de la durée
          </Text>
        </Block>
        <Block>
          <ContainerImg>
            <Image src='https://d1b747rczec55w.cloudfront.net/assets/hiw-icon2-641d5c09d8789cb41711d0e41557929d8ee2a196bab3b2e47b875f03132b960e.svg'/>
          </ContainerImg>
          <H3>Réservez votre jobber</H3>
          <Text>
            Des jobbers compétents et proches de chez vous vous proposent leurs services
          </Text>
        </Block>
        <Block>
          <ContainerImg>
            <Image src='https://d1b747rczec55w.cloudfront.net/assets/hiw-icon3-b21fb9288ea360942c1a3a595cd3d5e481725e37e615bb42e74ced0a7d98a56d.svg'/>
          </ContainerImg>
          <H3>Souriez, c'est fait !</H3>
          <Text>
            Votre jobber vous rend service au prix et à la date convenus
          </Text>
        </Block>
      </Blocks>
      <ContainerBigImg>
        <BigImg src='/images/background.jpg'/>
        <ContainerCard>
          <H1>Vous avez un employé de maison ?</H1>
          <TextCard>
            Automatisez la paie et le déclaratif de votre employé de maison. Obtenez des aides et 50 % de crédit d’impôt.
          </TextCard>
          <Button>Découvrir Mubtakir Direct</Button>
        </ContainerCard>
      </ContainerBigImg>
    </Container>
  )
}

export default MethodWork