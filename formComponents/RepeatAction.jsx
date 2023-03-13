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
const Titlte=styled.h4`

`
const Question=styled.h2`
    
`
const Items=styled.div`
    display: flex;
    flex-wrap:wrap;
`
const Item=styled.div`
    width: auto;
    padding:20px ;
    background: ${props=>props.checked?'#e5e5ff':'#dfdfdf'};
    margin: 5px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    border: ${props=>props.checked?'2px solid #6666ff':''};
    color: ${props=>props.checked?'#6666ff':'black'};
    &:hover{
        background-color: #c6c6c6;
    }
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function RepeatAction({removeForm}) {
    const [dataForms,setDataForms]=useState({
            Question:'Fréquence de la demande ?',
            items:[{
                label:'Just une fois',answer:false
            },
            {
                label:'Deux fois par mois',answer:false
            },
            {
                label:'Une fois par sumaine',answer:false
            },
            {
                label:'Plusieurs fois par sumaine',answer:false
            }]
    })
    const handleClick=(index)=>{
        var a=dataForms.items;
        const newItems=a.map((data,idx)=>{
            if(idx===index){
                return {...data,answer:true}
            }
            return {...data,answer:false}
        })
        setDataForms({...dataForms,items:newItems})
    }
  return (
    <Container>
        <HighlightOffIcon1 onClick={removeForm}/>
        <Titlte>Fréquence de la demande</Titlte>
        <Question>{dataForms.Question}</Question>
        <Items>
            {
                dataForms.items.map((item,idx)=>(
                    <Item checked={item.answer} onClick={()=>handleClick(idx)} key={idx}>{item.label}</Item>
                ))
            }
        </Items>
    </Container>
  )
}

export default RepeatAction