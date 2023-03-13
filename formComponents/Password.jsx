import React,{useState,useRef} from 'react'
import styled from 'styled-components';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LockIcon from '@mui/icons-material/Lock';
const Container=styled.div`
  width: 95%;
  height: 70px;
  padding-top:30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Wrapper=styled.div`
  width: 50%;
  height: 100%;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
  position:absolute;
  top: 0;
  right: 0;
  color:gray;
  font-size: 20px;
`
const Title=styled.h3`
  
`
const Input=styled.input`
  width: 100%;
  height: 100%;
  font-size: 20px;
  outline-color:blue;
  padding:  5px 33px;
`
const InputContainer=styled.div`
  width: 100%;
  height: 30px;
  position: relative;
`
const LockIcon1=styled(LockIcon)`
  position: absolute;
  top: 10px;
  left: 3px;
  color: gray;
  padding-right: 3px;
  border-right:1px solid gray;
`
const PersentContainer=styled.div`
  width: 100%;
  height: 5px;
  margin-top: 30px;
  border: 1px solid gray;
  border-radius: 5px;
`
const Persent=styled.div`
  width: ${props=>props.persent}%;
  height: 5px;
  background-color:${props=>props.persent==100?'green':'red'};
  transition: all 1s ease
`
function Password({removeForm}) {
  const [persent,setPersent]=useState(0)
  const password=useRef()
  const PassowrdLentgth=()=>{
    if(password.current.value.length>8){
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
  const Sub=(array)=>{
    var newValue=0;
    array.map(value=>{
      newValue=newValue+value;
    })
    return newValue;
  }
  const onWrite=()=>{
    const newArray= [PassowrdLentgth(),PasswordContaineUperCase(),PasswordContaineSmallLetter(),PasswordContaineNumbers(),PasswordContaineSymbols()]
    setPersent(Sub(newArray))
  }
  return (
    <Container>
      <Wrapper>
        <HighlightOffIcon1 onClick={removeForm}/>
        <Title>Password</Title>
        <InputContainer>
          <LockIcon1/>
          <Input type='password' ref={password} placeholder='Password...' onKeyUp={(e)=>onWrite(e.target.value)}/>
        </InputContainer>
        {
          persent>0?
            <PersentContainer>
              <Persent persent={persent}/>
            </PersentContainer>:
          ''
        }
      </Wrapper>
    </Container>
  )
}
export default Password
