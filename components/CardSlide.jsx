import React from 'react'
import styled from 'styled-components';
import StarRateIcon from '@mui/icons-material/StarRate';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Styles={
    starStyle:{
        color:'white',
        fontSize:'17px'
    }
}
const Container=styled.div`
    display: flex;
    width: 350px;
    height: 150px;
    flex-direction: column;
    background-color: #eff0f1;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
`
const TopCard=styled.div`
    flex: 1;
    display: flex;
    margin-left: 5px;
    align-items: center;
    width:80%;
`
const CenterCard=styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const BottomCard=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Reviews=styled.div`
    flex: 1;
    display: flex;
    
`
const Review=styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    background-color: green;
    align-items: center;
    margin-left: 2px;
`
const CheckContainer=styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`
const Title=styled.h3`
    margin-left: 10px;
`
const Text=styled.p`
    margin-left: 10px;
    color: gray;
`
const Span=styled.span`
    color: gray;
    font-size: 18px;
`
const Ago=styled.p`
    margin-left: 10px;
`

function CardSlide({data}) {
  return (
    <Container>
        <TopCard>
            <Reviews>
                <Review>
                    <StarRateIcon style={Styles.starStyle}/>
                </Review>
                <Review>
                    <StarRateIcon style={Styles.starStyle}/>
                </Review>
                <Review>
                    <StarRateIcon style={Styles.starStyle}/>
                </Review>
                <Review>
                    <StarRateIcon style={Styles.starStyle}/>
                </Review>
                <Review>
                    <StarRateIcon style={Styles.starStyle}/>
                </Review>

            </Reviews>
            <CheckContainer>
                <CheckCircleOutlineIcon/><Span>Sur invitation</Span>
            </CheckContainer>
        </TopCard>
        <CenterCard>
            <Title>{data.title}</Title>
            <Text>
                {data.description}
            </Text>
        </CenterCard>
        <BottomCard>
            <Ago>ischirinsky,<Span> il y a {data.time} heures</Span></Ago>
        </BottomCard>
    </Container>
  )
}

export default CardSlide
