import React from 'react'
import styled from 'styled-components'
import {Line} from 'react-chartjs-2'
import 'chartjs-plugin-zoom';
import "chart.js/auto";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Container=styled.div`
    flex: 1.5;
    height: 100%;
`
const Line1=styled(Line)`
    width: 100%;
    height: 50%;
`
const VisitorsFrom=styled.div`
    width: 94%;
    height: 58%;
    padding: 10px;
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
const SocialMedia=styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`
const LinkedInIcon1=styled(LinkedInIcon)`
    padding: 10px;
    background-color: black;
    color: white;
    border-radius:50%;
    margin-right: 10px;
`
const FacebookIcon1=styled(FacebookIcon)`
    padding: 10px;
    background-color: black;
    color: white;
    border-radius:50%;
    margin-right: 10px;
`
const InstagramIcon1=styled(InstagramIcon)`
    padding: 10px;
    background-color: black;
    color: white;
    border-radius:50%;
    margin-right: 10px;
`
const TwitterIcon1=styled(TwitterIcon)`
    padding: 10px;
    background-color: black;
    color: white;
    border-radius:50%;
    margin-right: 10px;
`
const YouTubeIcon1=styled(YouTubeIcon)`
    padding: 10px;
    background-color: black;
    color: white;
    border-radius:50%;
    margin-right: 10px;
`
const TelegramIcon1=styled(TelegramIcon)`
    padding: 10px;
    background-color: black;
    color: white;
    border-radius:50%;
    margin-right: 10px;
`
const PinterestIcon1=styled(PinterestIcon)`
    padding: 10px;
    background-color: black;
    color: white;
    border-radius:50%;
    margin-right: 10px;
`
const Image=styled.img`
    
`
const ContainerTitleTime=styled.div`
    
`
const Title=styled.h2`
    
`
const Time=styled.h5`
    color: gray;
`
const Percent=styled.span`
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 50%;
    margin-left: 45%;
`
function RightDashboard() {
    const data={
        labels:['may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17','may 12','may 13','may 14','may 15','may 16','may 17'],
        datasets:[{
            data:[8,7,6,8,75,74,78,7,6,8,7,5,8,7,6,8,75,5,8,7,16,28,7,6,8,7,6,8,7,5,8,7,6,8,55,5,8,7,6,8,7,5,89,7,6,8,7,5,8,7,6,8,75,74,78,7,6,8,7,5,8,7,6,8,75,5,8,7,16,28,7,6,8,7,6,8,7,5,8,7,6,8,55,5,8,7,6,8,7,5,89,7,6,8,7,5,8,7,6,8,75,74,78,7,6,8,7,5,8,7,6,8,75,5,8,7,16,28,7,6,8,7,6,8,7,5,8,7,6,8,55,5,8,7,6,8,7,5,89,7,6,8,7,5,8,7,6,8,75,74,78,7,6,8,7,5,8,7,6,8,75,5,8,7,16,28,7,6,8,7,6,8,7,5,8,7,6,8,55,5,8,7,6,8,7,5,89,7,6,8,7,5,8,7,6,8,75,74,78,7,6,8,7,5,8,7,6,8,75,5,8,7,16,28,7,6,8,7,6,8,7,5,8,7,6,8,55,5,8,7,6,8,7,5,89,7,6,8,7,5,8,7,6,8,75,74,78,7,6,8,7,5,8,7,6,8,75,5,8,7,16,28,7,6,8,7,6,8,7,5,8,7,6,8,55,5,8,7,6,8,7,5,89,7,6,8,7,5,8,7,6,8,75,74,78,7,6,8,7,5,8,7,6,8,75,5,8,7,16,28,7,6,8,7,6,8,7,5,8,7,6,8,55,5,8,7,6,8,7,5,89,7,6,8,7,5,8,7,6,8,75,74,78,7,6,8,7,5,8,7,6,8,75,5,8,7,16,28,7,6,8,7,6,8,7,5,8,7,6,8,55,5,8,7,6,8,7,5,89,7,6,8,7,5]
        }]
    }
    const options={
        title: { display: true, text: 'My Chart' },
        zoom: {
          enabled: true,
          mode: 'x',
        },
        pan: {
          enabled: true,
          mode: 'x',
        },
    }
    return (
        <Container>
            <Line1 data={data}  options={options}/>
            <VisitorsFrom>
                <Title>VisitorsFrom</Title>
                <SocialMedia>
                    <LinkedInIcon1/>
                    <ContainerTitleTime>
                        <Title>linkedIn</Title>
                        <Time>10 Mr 2022</Time>
                    </ContainerTitleTime>
                    <Percent>20%</Percent>
                </SocialMedia>
                <SocialMedia>
                    <FacebookIcon1/>
                    <ContainerTitleTime>
                        <Title>linkedIn</Title>
                        <Time>10 Mr 2022</Time>
                    </ContainerTitleTime>
                    <Percent>20%</Percent>
                </SocialMedia>
                <SocialMedia>
                    <InstagramIcon1/>
                    <ContainerTitleTime>
                        <Title>linkedIn</Title>
                        <Time>10 Mr 2022</Time>
                    </ContainerTitleTime>
                    <Percent>20%</Percent>
                </SocialMedia>
                <SocialMedia>
                    <TwitterIcon1/>
                    <ContainerTitleTime>
                        <Title>linkedIn</Title>
                        <Time>10 Mr 2022</Time>
                    </ContainerTitleTime>
                    <Percent>20%</Percent>
                </SocialMedia>
                <SocialMedia>
                    <YouTubeIcon1/>
                    <ContainerTitleTime>
                        <Title>linkedIn</Title>
                        <Time>10 Mr 2022</Time>
                    </ContainerTitleTime>
                    <Percent>20%</Percent>
                </SocialMedia>
                <SocialMedia>
                    <TelegramIcon1/>
                    <ContainerTitleTime>
                        <Title>linkedIn</Title>
                        <Time>10 Mr 2022</Time>
                    </ContainerTitleTime>
                    <Percent>20%</Percent>
                </SocialMedia>
                <SocialMedia>
                    <PinterestIcon1/>
                    <ContainerTitleTime>
                        <Title>linkedIn</Title>
                        <Time>10 Mr 2022</Time>
                    </ContainerTitleTime>
                    <Percent>20%</Percent>
                </SocialMedia>

            </VisitorsFrom>
        </Container>
        
    )
}

export default RightDashboard
