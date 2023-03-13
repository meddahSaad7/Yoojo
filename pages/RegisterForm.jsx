import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ClearIcon from '@mui/icons-material/Clear';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const Container=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.2);
    position: absolute;
    z-index: 9999;
    overflow-y: scroll;
`
const Wrapper=styled.div`
    width: 47%;
    height: 150%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    border-radius: 15px;
    background: white;
    margin-top: 200px;
    @media (max-width:875px) {
        height: 83%;
        height: 150%;
    }
    @media (max-width:730px) {
        width: 55%;
    }
    @media (max-width:525px) {
        width: 65%;
    }
    @media (max-width:440px) {
        width: 75%;
    }
    @media (max-width:385px) {
        width: 90%;
    }
`
const H1=styled.h1`
    font-size: bold;
    letter-spacing: 1.5px;
    @media (max-width:875px) {
        font-size: 25px;
    }
    @media (max-width:690px) {
        font-size: 20px;
    }
`
const OU=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`
const Line=styled.span`
    width: 45%;
    height: 2px;
    background-color: gray;
`
const Text=styled.p`
    margin-left: 5px;
    margin-right: 5px;

`
const Button=styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #7272f7;
    font-weight: bold;
    font-size: 19px;
    background-color: white;
    border: 2px solid rgb(114, 114, 247, .2);
    border-radius: 5px;
    &:hover{
        background-color:#eeeefe;
    }
    transition: all .5s ease;
`
const EmailInput=styled.input`
    padding:15px 35px;
    width: 90%;
    outline-color:blue;
    border: none;
    background: #efebeb;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    ::placeholder{
        font-size: 18px;
    }
`
const PasswordInput=styled.input`
    padding: 10px 35px;
    width: 100%;
    outline-color:blue;
    border: none;
    background: #efebeb;
    border-radius: 5px;
    ::placeholder{
        font-size: 18px;
    }
`
const Inputs=styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    position: relative;
    margin-bottom: 10px;
`
const MailOutlineIcon1=styled(MailOutlineIcon)`
    position: absolute;
    top: 10px;
    left: 5px;
    color: gray;
`
const LockOpenIcon1=styled(LockOpenIcon)`
    position: absolute;
    top: 8px;
    left: 5px;
    color: gray;
`
const CheckAndLinkContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Link2=styled.a`
    margin-left: 10px;
    text-decoration: none;
    &:hover{
        text-decoration:underline;
    }
`
const P=styled.p`
    font-size: 15px;
    @media (max-width:875px) {
        font-size: 13px;
    }
`
const LoginButton=styled.button`
    padding: 15px;
    font-size: 19px;
    color: white;
    background: #7272f7;
    border: none;
    border-radius: 5px;
    &:hover{
        background: ${props=>props.isWriten?'#5b5bfb':'#7272f7'};
    }
    cursor: ${props=>props.isWriten?'pointer':'not-allowed'};
`
const CreateAccount=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding:10px 0px;
`
const ClearIcon1=styled(ClearIcon)`
    margin-left: 95%;
`
const PermIdentityIcon1=styled(PermIdentityIcon)`
    position: absolute;
    top: 10px;
    left: 5px;
    color: gray;
`
const FacebookIcon1=styled(FacebookIcon)`
    margin-right: 5px;
`
const FormControlLabel1=styled(FormControlLabel)`
    color: gray;
`
const FormGroup1=styled(FormGroup)`

`
const ValidationPasswordContainer=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`
const ValidationPassword=styled.div`
    width: 85%;
    height: 8px;
    border: 1px solid gray;
    border-radius: 20px;
    display: flex;

`
const LabelValidation=styled.label`
    font-weight: bold;
    color: ${props=>props.Degree<100?'red':'green'};
    margin-left: 5px;
`
const Degree=styled.span`
    width:${props=>props.width}%;
    height: 100%;
    background-color:${props=>props.width<100?'red':'green'};
    border-radius: 20px;
    transition: all 1s ease;
`
function RegisterForm({visibility,setVisibility}) {
    const email=useRef();
    const password=useRef();
    const firstName=useRef();
    const lastName=useRef();
    const body=document.getElementById('body');
    const [isWriten,setIsWriten]=useState(false);
    const [DegreeValidationPassword,setDegreeValidationPassword]=useState(0);
    const [length,setLength]=useState(0)
    const [uperCase,setUperCase]=useState(0)
    const [smallCase,setSmallCase]=useState(0)
    const [numbers,setNumber]=useState(0)
    const [symbol,setSymbol]=useState(0)
    const handleClick=()=>{
        setVisibility(false)
        body.setAttribute('style','overflow: show')
    }
    const FirstNameWriten=()=>{
        return firstName.current.value!==''&&lastName.current.value!==''&&email.current.value&&password.current.value&&DegreeValidationPassword>=100;
    }
    const handleFirstName=()=>{
        if(FirstNameWriten()){
            setIsWriten(true)
        }else{
            setIsWriten(false)
        }
    }
    const LastNameWriten=()=>{
        return lastName.current.value!==''&&firstName.current.value!==''&&email.current.value&&password.current.valueDegreeValidationPassword>=100;
    }   
    const handleLastName=()=>{
        if(LastNameWriten()){
            setIsWriten(true)
        }else{
            setIsWriten(false)
        }
    }
    const EmailWriten=()=>{
        return email.current.value!==''&&firstName.current.value!==''&&lastName.current.value&&password.current.valueDegreeValidationPassword>=100;
    } 
    const handleEmail=()=>{
        if(EmailWriten()){
            setIsWriten(true)
        }else{
            setIsWriten(false)
        }
    }
    const PasswordWriten=()=>{
        return password.current.value!==''&&firstName.current.value!==''&&lastName.current.value&&email.current.valueDegreeValidationPassword>=100;
    }
    const PasswordLength=()=>{
        if(password.current.value.length>=8){
            return 20
        }
        return 0
    }
    const PasswordContaineUperCase=()=>{
        if(/[A-Z]/.test(password.current.value)){
            return 20
        }
        return 0
    }
    const PasswordContaineSmallLetter=()=>{
        if(/[a-z]/.test(password.current.value)){
            return 20
        }
        return 0
    }
    const PasswordContaineNumbers=()=>{
        if(/[1-9]/.test(password.current.value)){
            return 20
        }
        return 0
    }
    const PasswordContaineSymbols=()=>{
        if(/[!@#$%^&*(),.?":{}|<>]/.test(password.current.value)){
            return 20
        }
        return 0
    }
    const subArray=(array)=>{
        let sub=0;
        for(let el of array){
            sub=sub+el;
        }
        return sub;
    }
    const SetStateDegree=()=>{
        const conditions=[PasswordLength(),PasswordContaineUperCase(),PasswordContaineSmallLetter(),PasswordContaineNumbers(),PasswordContaineSymbols()]
        return subArray(conditions);        
    }
    const handlePassword=()=>{
        
        setDegreeValidationPassword(SetStateDegree())
        if(PasswordWriten()){
            setIsWriten(true)
        }else{
            setIsWriten(false)
        }
    }

  return (
    <>
        {
            visibility?
                <Container>
                    <Wrapper>
                        <ClearIcon1 onClick={handleClick}/>
                        <H1>Content de vous revoir !</H1>
                        <P>Connectez-vous pour accéder à votre compte</P>
                        <Button><FacebookIcon1/>Continuer avec facebook</Button>
                        <OU>
                            <Line/>
                                <Text>Ou</Text>
                            <Line/>
                        </OU>
                        <Inputs>
                            <PermIdentityIcon1/>
                            <EmailInput onKeyUp={handleFirstName} ref={firstName} placeholder='Prénom'/>
                        </Inputs>
                        <Inputs>
                            <PermIdentityIcon1/>
                            <EmailInput onKeyUp={handleLastName} ref={lastName} placeholder='Nom'/>
                        </Inputs>
                        <Inputs>
                            <MailOutlineIcon1/>
                            <EmailInput onKeyUp={handleEmail} ref={email} placeholder='Adress e-mail'/>
                        </Inputs>
                        <Inputs>
                            <LockOpenIcon1/>
                            <PasswordInput onKeyUp={handlePassword} ref={password} placeholder='Mot de password'/>
                        </Inputs>
                        {
                            password.current?
                                password.current.value.length>0?
                                    <ValidationPasswordContainer>
                                        <ValidationPassword>
                                            <Degree width={DegreeValidationPassword}/>
                                        </ValidationPassword>
                                        <LabelValidation Degree={DegreeValidationPassword}>
                                            {
                                                DegreeValidationPassword<100?'Faible':'Sécurisé'
                                            }
                                        </LabelValidation>
                                    </ValidationPasswordContainer>
                                :''
                            :''
                        }
                        <CheckAndLinkContainer>
                            <FormGroup1>
                                <FormControlLabel1 control={<Checkbox/>} label="Je souhaite être informé des nouveautés, cadeaux et bons plans" />
                            </FormGroup1>
                            <FormGroup1>
                                <FormControlLabel1 control={<Checkbox/>} label="Je souhaite recevoir les bons plans des partenaires" />
                            </FormGroup1>
                        </CheckAndLinkContainer>
                        <LoginButton isWriten={isWriten}>Je m'inscris</LoginButton>
                        <CreateAccount>Pas encore membre ? <Link2 href='#'>Créer un compte</Link2></CreateAccount>
                    </Wrapper>
                </Container>
            :
            ''
        }
    </>
  )
}

export default RegisterForm
