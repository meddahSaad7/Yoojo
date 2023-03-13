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
const H3=styled.h3`
    
`
const Elements=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
`
const Element=styled.div`
    width: 60px;
    height: 30px;
    padding: 5px 10px;
    margin: 3px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    background-color: #ebebeb;
    cursor: pointer;
    background-color: ${props=>props.select?'#e8e8ff':''};
    border: ${props=>props.select?'2px solid #6666ff':''};
`
const Start=styled.h3`

`
const To=styled.h3`
    
`
const End=styled.h3`
    
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function NumberOfItems({removeForm}) {
    const [dataForms,setDataForms]=useState({
        question:'Quel est votre besoin ?',
        items:[
            {
                start:2,
                end:5,
                answer:false
            },
            {
                start:3,
                end:8,
                answer:false
            },
            {
                start:1,
                end:6,
                answer:false
            },
            {
                start:8,
                end:9,
                answer:false
            },
            {
                start:3,
                end:7,
                answer:false
            },
            {
                start:2,
                end:5,
                answer:false
            },
            {
                start:6,
                end:9,
                answer:false
            },
            {
                start:3,
                end:7,
                answer:false
            },
            {
                start:2,
                end:5,
                answer:false
            },
            {
                start:6,
                end:9,
                answer:false
            }
        ]
    })
    const singleChoice=(array,idx)=>{
        array.map((item,index)=>{
            if(idx===index){
                item.answer=true
            }else{
                item.answer=false
            }
        })
    }
    const handelClick=(idx)=>{
        const a=dataForms.items;
        singleChoice(a,idx)
        const newData={...dataForms,a}
        setDataForms(newData)
    }
  return (
    <Container>
        <HighlightOffIcon1 onClick={removeForm}/>
        <Title>Nettoyage de vitres</Title>
        <Question>{dataForms.question}</Question>
        <H3>Nombre de fenêtres</H3>
        <Elements>
            {
                dataForms.items.map((data,index)=>(
                    <Element onClick={()=>handelClick(index)} key={index} select={data.answer}>
                        <Start>{data.start}</Start>
                        <To>to</To>
                        <End>{data.end}</End>
                    </Element>
                ))
            }
            
        </Elements>
    </Container>
  )
}

export default NumberOfItems