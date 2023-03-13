import React,{useState} from 'react'
import styled from 'styled-components';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container=styled.div`
    width: 95%;
    height: auto;
    margin: 10px 0px;
    position: relative;
    padding-top: 30px;
`
const Wrapper=styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`
const Question=styled.div`

`
const Buttons=styled.div`
    display: flex;
    justify-content: space-between;
`
const ButtonY=styled.button`
    width: 48%;
    height: 45px;
    border: ${props=>props.answer===true?'2px solid blue':'none'};
    margin-top: 10px;
    &:hover{
        background-color:#cccccc66;
    }
    font-weight: bold;
    font-size: 18px;
`
const ButtonN=styled.button`
    width: 48%;
    height: 45px;
    border: ${props=>props.answer===false?'2px solid blue':'none'};
    margin-top: 10px;
    &:hover{
        background-color:#cccccc66;
    }
    font-weight: bold;
    font-size: 18px;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function YesOrNo({removeForm}) {
    const [dataForms,setDataForms]=useState([
        {
            question:'Voulez-vous que le prestataire débarrasse les cartons ?',
            answer:null
        },
        {
            question:'Voulez-vous que le prestataire débarrasse les cartons 1?',
            answer:null
        },
        {
            question:'Voulez-vous que le prestataire débarrasse les cartons 2?',
            answer:null
        },
        {
            question:'Voulez-vous que le prestataire débarrasse les cartons 3?',
            answer:null
        },
        {
            question:'Voulez-vous que le prestataire débarrasse les cartons 4?',
            answer:null
        }
    ])
    const NoFunction=(idx)=>{
        const newData=dataForms.map((data,index)=>{
            if(idx===index){
                return {...data,answer:false}
            }
            return {...data}
        })
        setDataForms(newData)
    }
    const YesFunction=(idx)=>{
        const newData=dataForms.map((data,index)=>{
            if(idx===index){
                return {...data,answer:true}
            }
            return {...data}
        })
        setDataForms(newData)
    }
    return (
        <Container>
            <HighlightOffIcon1 onClick={removeForm}/>
            {
                dataForms.map((data,index)=>(
                    <Wrapper key={index}>
                        <Question>{data.question}</Question>
                        <Buttons>
                            <ButtonN onClick={()=>NoFunction(index)} answer={data.answer}>Non</ButtonN>
                            <ButtonY onClick={()=>YesFunction(index)} answer={data.answer}>Oui</ButtonY>
                        </Buttons>
                    </Wrapper>
                ))
            }
        </Container>
    )
}

export default YesOrNo