import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
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
const Left=styled.div`
    flex: 2;
`
const Right=styled.div`
    flex: 1;
    display: flex;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Title=styled.h2`
    
`
const Elements=styled.div`
    color: gray;
    display: flex;
`

const AddIcon1=styled(AddIcon)`
    background-color: ${props=>props.answer>=props.max?'#9a9aff':'blue'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    padding: 10px;
    cursor: ${props=>props.answer>=props.max?'not-allowed':'pointer'};
`
const RemoveIcon1=styled(RemoveIcon)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    padding: 10px;
    background-color:${props=>props.answer<=props.min?'#9a9aff':'blue'};
    cursor: ${props=>props.answer<=props.min?'not-allowed':'pointer'};
`
const Numbers=styled.div`
    
`
const Wrapper=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:1px solid #c5c5c57f;
    margin-bottom: 10px;
    padding: 5px 0px;
`
const H5=styled.h5`
    margin-right: 4px;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function Counter({removeForm,forms,setForms}) {
    const [dataForms,setDataForms]=useState([
        {
            max:5,
            min:2,
            title:'Petite taille1',
            elements:['Chaise','tabouret','banc','luminaire','fauteuil'],
            answer:0
        },
        {
            max:10,
            min:0,
            title:'Petite taille2',
            elements:['Chaise','tabouret','banc','luminaire','fauteuil'],
            answer:0
        },
        {
            max:10,
            min:0,
            title:'Petite taille3',
            elements:['Chaise','tabouret','banc','luminaire','fauteuil'],
            answer:0
        },
        {
            max:10,
            min:0,
            title:'Petite taille4',
            elements:['Chaise','tabouret','banc','luminaire','fauteuil'],
            answer:0
        },
        {
            max:10,
            min:0,
            title:'Petite taille5',
            elements:['Chaise','tabouret','banc','luminaire','fauteuil'],
            answer:0
        }
    ])
    const EditStatePlus=(idx,answer)=>{
        const newDate=dataForms.map((data,index)=>{
            if(idx===index){
                return {...data,answer:answer<data.max?answer+1:answer}
            }
            return {...data}
        })
        setDataForms(newDate)
    }
    const EditStateMunis=(idx,answer)=>{
        const newData=dataForms.map((data,index)=>{
            if(idx===index){
                return {...data,answer:answer>data.min?answer-1:answer}
            }
            return {...data}
        })
        setDataForms(newData)
    }

    return (
        <Container id='Counter'>
            <HighlightOffIcon1 onClick={removeForm}/>
            {
                
                dataForms.map((data,index)=>(
                    <Wrapper key={index}>
                        <Left>
                            <Title>{data.title}</Title>
                            <Elements>
                                {data.elements.map((element,idxElement)=>(
                                    <H5 key={idxElement}>
                                        {element+','}
                                    </H5>
                                ))}
                            </Elements>
                        </Left>
                        <Right>
                            <RemoveIcon1 onClick={()=>{EditStateMunis(index,data.answer)}} min={data.min} answer={data.answer}>-</RemoveIcon1>
                            <Numbers>{data.answer}</Numbers>
                            <AddIcon1 onClick={()=>{EditStatePlus(index,data.answer)}} max={data.max} answer={data.answer}>+</AddIcon1>
                        </Right>
                    </Wrapper>
                ))
            }
        </Container>
    )
}

export default Counter