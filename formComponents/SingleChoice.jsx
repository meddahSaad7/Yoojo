import React,{useState} from 'react'
import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox';
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
const Question=styled.h1`

`
const Type=styled.h4`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c5c5c57f;
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
function SingleChoice({removeForm}) {
    const [dataForms,setDataForms]=useState(
        {
            question:'Quel est votre besoin ?',
            labels:[
                {
                    label:"Nettoyage de l'électroménager",
                    answer:false
                },
                {
                    label:'Nettoyage des fenêtres',
                    answer:false
                },
                {
                    label:'Repassage',
                    answer:false
                },
                {
                    label:'test',
                    answer:false
                },
                {
                    label:'test22',
                    answer:false
                }
            ]
        }
    )
    const singleChoice=(array,idx)=>{
        array.map((item,index)=>{
            if(idx===index){
                item.answer=true
            }else{
                item.answer=false
            }
        })
    }
    const handelChange=(idx)=>{
        const a=dataForms.labels;
        singleChoice(a,idx)
        const newData={...dataForms,labels:a}
        setDataForms(newData)
    }
    return (
        <Container>
            <HighlightOffIcon1 onClick={removeForm}/>
            <Title>Ménage à domicile</Title>
            <Question>{dataForms.question}</Question>
            {
                dataForms.labels.map((data,index)=>(
                    <Type key={index}>
                        <Label>
                            {data.label}
                        </Label>
                        <Checkbox checked={data.answer} onChange={(e)=>handelChange(index)}/>
                    </Type>
                ))
            }
        </Container>
    )
}
export default SingleChoice