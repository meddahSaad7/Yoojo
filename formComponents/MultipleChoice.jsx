import React,{useState} from 'react'
import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container=styled.div`
    width: 95%;
    margin: 10px 0px;
    height: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 20px;
`
const Wrapper=styled.div`
    margin-top: 50px;
`
const Title=styled.h3`

`
const Question=styled.h1`

`
const Type=styled.h4`
    display: flex;
    flex-direction: column;
`
const Labels=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #c5c5c57f;
    margin-top: 10px;
`
const Label=styled.div`

`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function MultipleChoice({removeForm}) {
    const [dataForms,setDataForms]=useState([
        {
            question:'Quel est votre besoin 1 ?',
            labels:["Nettoyage de l'électroménager 1 1 ",'Nettoyage des fenêtres 1 2 ','Repassage 1 3 '],
            answer:[false,false,false]
        }
    ])
    const handelCheck=(index,idx)=>{
        const newData=dataForms.map((data,dataIndex)=>{
            if(index===dataIndex){
                const a=data.answer;
                a[idx]=!a[idx];
                return {...data,answer:a}
            }
            return data
        })
        setDataForms(newData)
    }
  return (
    <Container>
        <HighlightOffIcon1 onClick={removeForm}/>
        {
            dataForms.map((data,index)=>(
                <Wrapper key={index}>
                    <Title>Ménage à domicile</Title>
                    <Question>{data.question}</Question>
                    {console.log(data.answer)}
                    <Type>
                        {
                            data.labels.map((label,idx)=>(
                                <Labels key={idx}>
                                    <Label>
                                        {label}
                                    </Label>
                                    <Checkbox checked={data.answer[idx]} onChange={()=>handelCheck(index,idx)}/>
                                </Labels>
                            ))
                        }
                    </Type>
                </Wrapper>
            ))
        }
        
    </Container>
  )
}

export default MultipleChoice