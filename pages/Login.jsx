import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ClearIcon from '@mui/icons-material/Clear';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
`
const Wrapper=styled.div`
    width: 47%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    border-radius: 15px;
    background: white;
    margin-top: 45px;
    @media (max-width:875px) {
        height: 83%;
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
        height: 100%;
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
    justify-content: space-between;
    align-items: center;
`

const Link1=styled.a`
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
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
const FacebookIcon1=styled(FacebookIcon)`
    margin-right: 5px;
`
const FormControlLabel1=styled(FormControlLabel)`
    color: gray;
`
const FormGroup1=styled(FormGroup)`

`
function Login({visibility,setVisibility}) {
    const email=useRef();
    const password=useRef();
    const body=document.getElementById('body');
    const [isWriten,setIsWriten]=useState(false);
    const handleClick=()=>{
        setVisibility(false)
        body.setAttribute('style','overflow: show')
    }
    const handleEmail=()=>{
        if(password.current.value!=='' && email.current.value!==''){
            setIsWriten(true)
        }else{
            setIsWriten(false)
        }
    }
    const handlePassword=()=>{
        if(email.current.value!=='' && password.current.value!==''){
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
                            <MailOutlineIcon1/>
                            <EmailInput onKeyUp={handleEmail} ref={email} placeholder='Adress e-mail'/>
                        </Inputs>
                        <Inputs>
                            <LockOpenIcon1/>
                            <PasswordInput onKeyUp={handlePassword} ref={password} placeholder='Mot de password'/>
                        </Inputs>
                        <CheckAndLinkContainer>
                            <FormGroup1>
                                <FormControlLabel1 control={<Checkbox/>} label="Se souvenir de moi" />
                            </FormGroup1>
                            <Link1 href='#'>Mot de passe oublié ?</Link1>
                        </CheckAndLinkContainer>
                        <LoginButton isWriten={isWriten}>Se connecter</LoginButton>
                        <CreateAccount>Pas encore membre ? <Link2 href='#'>Créer un compte</Link2></CreateAccount>
                    </Wrapper>
                </Container>
            :
            ''
        }
    </>
  )
}

export default Login
