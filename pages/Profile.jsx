import React,{useState} from 'react'
import styled from 'styled-components';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const Container=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`
const Wrapper=styled.div`
  width: 70%;
  height: 100%;
  @media (max-width:550px) {
    width: 90%;
  }
`
const Top=styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  @media (max-width:550px) {
    height: 420px;
  }
`
const CoverImg=styled.div`
  width: 100%;
  height: 170px;
  background-color: #e6e6e6;
  border-radius: 100px 0px 0px 0px;
  overflow: hidden;
`
const Image=styled.img`
  width: 100%;
  height: 100%;
`
const ProfileImg=styled.label`
  width: 140px;
  height: 140px;
  border: 3px solid white;
  border-radius: 50%;
  position: absolute;
  top: 135px;
  left: 50px;
  overflow: hidden;
  @media (max-width:775px) {
    left: 30px;
  }
  @media (max-width:550px) {
    left: 110px;
  }
  @media (max-width:500px) {
    left: 100px;
  }
  @media (max-width:440px) {
    left: 90px;
  }
  @media (max-width:370px) {
    left: 85px;
  }
`
const Username=styled.h3`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
const Img=styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const HelloImg=styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`
const Email=styled.a`
  text-decoration: none;
  color: gray;
`
const JobberOrCustomer=styled.div`
  color: gray;
`
const Informations=styled.div`
  display: flex;
  margin-left: 30%;
  @media (max-width:760px) {
    flex-direction: column;
  }
  @media (max-width:550px) {
    margin-left: 0%;
    margin-top: 120px;
    width: 100%;
  }
`
const CancelAndSave=styled.div`
  margin-left: 30%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (max-width:775px) {
    margin-left: 8%;
  }
  @media (max-width:730px) {
    margin-left: 40px;
  }
  @media (max-width:660px) {
    margin-left: 60px;
  }
  @media (max-width:550px) {
    margin-left: 0px;
    justify-content: center;
    align-items: center;
  }
`
const CancelBtn=styled.button`
  padding: 5px 10px;
  border: none;
  color: white;
  border-radius: 5px;
`
const SaveBtn=styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: none;
  color: white;
  border-radius: 5px;
  background: green;
`
const Center=styled.div`
  display: flex;
  @media (max-width:760px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;
  }
`
const Bottom=styled.div`
  
`
const LabelImg=styled.label`
  
`
const CameraAltIcon1=styled(CameraAltIcon)`
  position: absolute;
  color: white;
  top: 135px;
  right: 10px;
  background: rgba(255,255,255,.5);
  padding:2px 5px;
  border-radius: 5px;
`
const UserEmailJobber=styled.div`
  @media (max-width:775px) {
    margin-left: 25px;
  }
  @media (max-width:730px) {
    margin-left: 40px;
  }
  @media (max-width:660px) {
    margin-left: 60px;
  }
  @media (max-width:550px) {
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const Reviews=styled.div`
  display: flex;
  margin: 5px 0px;
`
const Typography1=styled(Typography)`
  color: gray;
  margin-left: 5px;
`
const Title=styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
`
const ContactMe=styled.button`
  padding: 5px 10px;
  border: none;
  color:gray;
  border-radius: 5px;
`
const GetaQuote=styled.button`
  padding: 5px 10px;
  border: none;
  color: gray;
  border-radius: 5px;
`
const Buttons=styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const LeftCenter=styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 50%;
  text-align: center;
  @media (max-width:760px) {
    width: 100%;
  }
`
const RightCenter=styled.div`
  width: 50%;
  border-left: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: #a0a0a0;
  @media (max-width:760px) {
    border: none;
    width: 100%;
  }
`
const From=styled.div`
  width: 90%;
  height: auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const MemberSince=styled.div`
  width: 90%;
  height: auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const AvrageReponceTime=styled.div`
  width: 90%;
  height: auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LastDelivery=styled.div`
  width: 90%;
  height: auto;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Label=styled.label`
  display: flex;
  align-items: center; 
  color: ${props=>props.color};
`
const LocationOnIcon1=styled(LocationOnIcon)`
  margin-right: 5px;
`
const PersonIcon1=styled(PersonIcon)`
  margin-right: 5px;
`
const AccessTimeIcon1=styled(AccessTimeIcon)`
  margin-right: 5px;
`
const SendIcon1=styled(SendIcon)`
  margin-right: 5px;
`
const Answer=styled.span`
  
`
const VerificationsAndSkills=styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  color: gray;
  @media (max-width:550px) {
    height: auto;
    flex-direction:column;
  }
`
const Verifications=styled.div`
  flex: 1;
`
const Skills=styled.div`
  flex: 1;
`
const PersonIcon2=styled(PersonIcon)`
  margin: 5px 10px 5px 10px;
`
const AccountBalanceIcon2=styled(AccountBalanceIcon)`
  margin: 5px 10px 5px 10px;
`
const PhoneIcon2=styled(PhoneIcon)`
  margin: 5px 10px 5px 10px;
`
const EmailIcon2=styled(EmailIcon)`
  margin: 5px 10px 5px 10px;
`
const FacebookIcon2=styled(FacebookIcon)`
  margin: 5px 10px 5px 10px;
`
const ButtonEditSkills=styled.button`
  padding: 5px 10px;
  border: none;
  color: white;
  background-color: green;
  border-radius: 5px;
`
const Skill=styled.span`
  margin-right: 10px;
`
const WrapperSkills=styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`

function Profile() {
  const [value,setValue]=useState()
  const [fileCover,setFileCover]=useState([])
  return (
    <Container>
      <Wrapper>
        <Top>
          <CoverImg>
            <Image src={fileCover[0]?URL.createObjectURL(fileCover[0]):'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600'}/>
          </CoverImg>
          <Informations>
            <ProfileImg htmlFor='file1'>
              <Img src='/images/person1.jpg'/>
              <input type='file' id='file1' hidden/>
            </ProfileImg>
            <LabelImg htmlFor='file'>
              <CameraAltIcon1/>
              <input type='file' id='file' hidden onChange={(e)=>setFileCover(e.target.files)}/>
            </LabelImg>
            <UserEmailJobber>
              <Username>
                Hello, Saad
                <HelloImg src='/images/hello.png'/>
              </Username>
              <Email href='#'>
                meddahsaad14@gmail.com
              </Email>
              <JobberOrCustomer>
                Jobber
              </JobberOrCustomer>
            </UserEmailJobber>
            <CancelAndSave>
              <CancelBtn>Cancel</CancelBtn>
              <SaveBtn>Save</SaveBtn>
            </CancelAndSave>
          </Informations>
        </Top>
        <Center>
          <LeftCenter>
            <Title>Web Developer and digital marketer</Title>
            <Reviews>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography1 component="legend">{value}{' '}(1 review)</Typography1>
            </Reviews>
            <Buttons>
              <ContactMe>Contact Me</ContactMe>
              <GetaQuote>Get a Quote</GetaQuote>
            </Buttons> 
          </LeftCenter>
          <RightCenter>
            <From>
              <Label color='gray'><LocationOnIcon1/>From</Label>
              <Answer>Algeria</Answer>
            </From>
            <MemberSince>
              <Label color='gray'><PersonIcon1/>Member since</Label>
              <Answer>Aug 2022</Answer>
            </MemberSince>
            <AvrageReponceTime>
              <Label color='gray'><AccessTimeIcon1/>Avg. Response Time</Label>
              <Answer>1 hour</Answer>
            </AvrageReponceTime>
            <LastDelivery>
              <Label color='gray'><SendIcon1/>Last Delivery</Label>
              <Answer>2 months</Answer>
            </LastDelivery>
          </RightCenter>
        </Center>
        <Bottom>
          <VerificationsAndSkills>
            <Verifications>
              <Title>Verifications</Title>
              <Label color='gray'><PersonIcon2/>Identity Verified</Label>
              <Label color='gray'><AccountBalanceIcon2/>Payment Verified</Label>
              <Label color='green'><PhoneIcon2/>Phone Verified</Label>
              <Label color='green'><EmailIcon2/>Email Verified</Label>
              <Label color='green'><FacebookIcon2/>Facebook Connected</Label>
            </Verifications>
            <Skills>
              <Title>Skills<ButtonEditSkills>Edit Skills</ButtonEditSkills></Title>
              <WrapperSkills>
                <Skill>html5</Skill>
                <Skill>css3</Skill>
                <Skill>javaScript</Skill>
                <Skill>react js</Skill>
                <Skill>nodjs</Skill>
                <Skill>mongoDb</Skill>
                <Skill>next js</Skill>
                <Skill>angular js</Skill>
                <Skill>html5</Skill>
                <Skill>css3</Skill>
                <Skill>javaScript</Skill>
                <Skill>react js</Skill>
                <Skill>nodjs</Skill>
                <Skill>mongoDb</Skill>
                <Skill>next js</Skill>
                <Skill>angular js</Skill>
              </WrapperSkills>
            </Skills>
          </VerificationsAndSkills>
        </Bottom>
      </Wrapper>
      
    </Container>
  )
}
export default Profile