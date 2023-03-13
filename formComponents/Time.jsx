import React,{useState} from 'react'
import styled from 'styled-components'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container=styled.div`
    width: 95%;
    height: auto;
    margin: 10px 0px;
    position: relative;
    padding-top: 30px;
`
const Title=styled.h3`
    
`
const Question=styled.h2`
    margin: 10px 0px;
`
const RemoveIcon1=styled(RemoveIcon)`
    padding: 10px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.time<=0?'#9a9aff':'blue'};
    cursor: ${props=>props.time<=0?'not-allowed':'pointer'};
`
const AddIcon1=styled(AddIcon)`
    padding: 10px;
    background-color: blue;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.time>=6000?'#9a9aff':'blue'};
    cursor: ${props=>props.time>=6000?'not-allowed':'pointer'};
`
const HourContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Hour=styled.h1`
    margin: 0px 10px;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function Time({removeForm}) {
    const [dataForms,setDataForms]=useState({
        questoin:'Nous estimons une durée de 43h30 de service, cela vous convient-il ?',
        answer:0
    })
    //time minutes
    const setTime=(value)=>{
        const a=dataForms;
        a.answer=value;
        setDataForms({...dataForms,a})
    }
  return (
    <Container>
        <HighlightOffIcon1 onClick={removeForm}/>
        <Title>Garde de chat</Title>
        <Question>
            {dataForms.questoin}
        </Question>
        <HourContainer>
            <RemoveIcon1 onClick={()=>dataForms.answer<=0?setTime(0):setTime(dataForms.answer-30)} time={dataForms.answer}/>
            <Hour>
                {Math.floor(dataForms.answer/60)>=10?Math.floor(dataForms.answer/60):'0'+Math.floor(dataForms.answer/60)}h:{dataForms.answer%60>10?dataForms.answer%60:'0'+dataForms.answer%60}m
            </Hour>
            <AddIcon1 onClick={()=>dataForms.answer>=6000?setTime(6000):setTime(dataForms.answer+30)} time={dataForms.answer}/>
        </HourContainer>
    </Container>
  )
}

export default Time
