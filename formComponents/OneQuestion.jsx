import React,{useState} from 'react'
import styled from 'styled-components'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container=styled.div`
    width: 95%;
    height: auto;
    margin: 10px 0px;
    padding-top: 30px;
    position: relative;
`
const Title=styled.h3`
    
`
const Question=styled.h2`
    margin: 10px 0px;
`
const H2=styled.h2`
    
`
const Input=styled.input`
    width: 95%;
    font-size: 20px;
    padding: 10px;
    outline-color: blue;
    border: none;
    background: #e8e8e8;
    border-radius:5px;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function OneQuestion({removeForm}) {
    const [dataFroms,setDataForms]=useState(
        {
            question:'Quel est votre besoin ?',
            answer:''
        }
    )
    const handelChange=(value)=>{
        const newData=dataFroms;
        newData.answer=value;
        setDataForms(newData)
    }
    return (
        <Container>
            <HighlightOffIcon1 onClick={removeForm}/>
            <Title>Histoire</Title>
            <Question>{dataFroms.question}</Question>
            <Input placeholder='Aa...' onChange={(e)=>handelChange(e.target.value)}/>
        </Container>
    )
}

export default OneQuestion
