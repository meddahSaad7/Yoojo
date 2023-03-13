import React from 'react'
import styled from 'styled-components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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
    padding-top: 30px;
`
const Wrapper=styled.div`
    width: 50%;
    height: auto;
`
const Title=styled.h3`
    
`
const InputContainer=styled.div`
    width: 100%;
    position: relative;
`
const Input=styled.input`
    width: 100%;
    height: 20px;
    font-size: 20px;
    padding: 5px 33px;
    outline-color: blue;
`
const LocalPhoneIcon1=styled(LocalPhoneIcon)`
    position: absolute;
    top: 5px;
    left: 5px;
    color: gray;
    border-right: 1px solid gray;
    padding-right: 2px;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
    
`
function Phone({removeForm}) {
  return (
    <Container>
        <HighlightOffIcon1 onClick={removeForm}/>
        <Wrapper>
            <Title>Phone number</Title>
            <InputContainer>
                <LocalPhoneIcon1/>
                <Input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='123-4567-8901'/>
            </InputContainer>
        </Wrapper>
    </Container>
  )
}

export default Phone