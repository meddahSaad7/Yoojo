import React,{useState} from 'react'
import styled from 'styled-components'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container=styled.div`
  width: 95%;
  height: auto;
  margin: 10px 0px;
  position: relative;
  padding-top: 30px;
`
const Title=styled.h4`
    
`
const Question=styled.h2`
  
`
const TextArea=styled.textarea`
    outline-color: #5b5bff;
    border: none;
    min-width: 95%;
    max-width: 350px;
    min-height: 100px;
    max-height: 400px;
    border-radius: 10px;
    padding: 10px;
    background: #e7e7e7;
    font-size: 20px;
    margin-top: 10px;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function DetailTextArea({removeForm}) {
  const [dataForms,setDataForms]=useState({
    questoin:"Détails supplémentaires (optionnel) ?",
    answer:''
  })
  const editState=(data)=>{
    var a={...dataForms,answer:data}
    setDataForms(a)
  }
  return (
    <Container>
      <HighlightOffIcon1 onClick={removeForm}/>
      <Title>Détails supplémentaires (optionnel)</Title>
      <Question>Détails supplémentaires (optionnel) ?</Question>
      <TextArea placeholder='Aa...' onKeyUp={(e)=>editState(e.target.value)}>
      </TextArea>
    </Container>
  )
}

export default DetailTextArea