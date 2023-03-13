import React from 'react'
import styled from 'styled-components';
import MailIcon from '@mui/icons-material/Mail';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: auto;
    margin: 10px 0px;
    position: relative;
    padding-top: 33px;
`
const Wrapper=styled.div`
    width: 50%;
`
const Tiltle=styled.h3`
    
`
const EmailContainer=styled.div`
    width: 100%;
    height: auto;
    position: relative;
`
const Input=styled.input`
    width: 100%;
    height: 20px;
    font-size: 20px;
    padding: 5px 30px;
    outline-color: blue;
`
const MailIcon1=styled(MailIcon)`
    position: absolute;
    top: 5px;
    left: 3px;
    padding-right: 2px;
    color: gray;
    border-right: 1px solid gray;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
    
`
function Email({removeForm}) {
  return (
    <Container>
        <HighlightOffIcon1 onClick={removeForm}/>
        <Wrapper>
            <Tiltle>Email</Tiltle>
            <EmailContainer>
                <MailIcon1/>
                <Input type='email' placeholder='Email...'/>
            </EmailContainer>
        </Wrapper>
        
    </Container>
  )
}

export default Email