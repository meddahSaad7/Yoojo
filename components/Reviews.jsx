import React from 'react'
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
const styles={
  verifieUser:{
    position:'absolute',
    right:4,
    color:'green'
  }
}
const Container=styled.div`
  display: flex;
  padding: 40px;
  font-size: 20px;
  height: auto;
  border-top: 1px solid #cbcbcb;
  border-bottom: 1px solid #cbcbcb;
    @media (max-width:660px) {
      flex-direction: column;

    }

`
const Left=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const Right=styled.div`
  flex: 1;
  @media (max-width:660px) {
    margin-top: 30px;
  }
`
const Title=styled.h2`
  
`
const Text=styled.p`
  width: 300px;
  color: gray;
  font-weight: bold;
`
const Button=styled.button`
  width: 140px;
  padding:10px 20px;
  border: none;
  outline: none;
  background-color: #5353ff;
  color: white;
  border-radius:5px;
`
const Person=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:660px) {
    justify-content: start;
  }
`
const PersonLeft=styled.div`
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  
`
const PersonRight=styled.div`
  
`
const View=styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`
const Span=styled.span`
  color: gray;
`
const Image=styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
`
function Reviews() {
  return (
    <Container>
      <Left>
        <Title>Vous avez le sens du service ?</Title>
        <Text>
          Rejoignez la communauté de jobbers, développez votre activité et augmentez vos revenus en rendant service près de chez vous.
        </Text>
        <Button>Devenir jobber</Button>
      </Left>
      <Right>
        <Person>
          <PersonLeft>
            <Image src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'/>
            <VerifiedUserIcon style={styles.verifieUser}/>
          </PersonLeft>
          <PersonRight>
            <Title>Nathalie</Title>
            <Text>Femme de ménage</Text>
            <View><StarIcon style={{color:'#c0d409'}}/>4,84<Span>{"(400 avis)"}</Span></View>
          </PersonRight>
        </Person>
        <Person>
          <PersonLeft>
            <Image src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'/>
            <VerifiedUserIcon style={styles.verifieUser}/>
          </PersonLeft>
          <PersonRight>
            <Title>Mlak</Title>
            <Text>Bricoleur</Text>
            <View><StarIcon style={{color:'#c0d409'}}/>4,91<Span>{"(856 avis)"}</Span></View>
          </PersonRight>
        </Person>
      </Right>
    </Container>
  )
}

export default Reviews