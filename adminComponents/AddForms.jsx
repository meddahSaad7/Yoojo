import React,{useRef, useState} from 'react'
import { Routes,Route } from 'react-router-dom';

import styled from 'styled-components';
import Counter from '../formComponents/Counter'
import YesOrNo from '../formComponents/YesOrNo'
import UploadImgs from '../formComponents/UploadImgs'
import MultipleChoice from '../formComponents/MultipleChoice'
import RepeatAction from '../formComponents/RepeatAction'
import DetailTextArea from '../formComponents/DetailTextArea'
import Calendar from '../formComponents/Calendar'
import SingleChoice from '../formComponents/SingleChoice'
import NumberOfItems from '../formComponents/NumberOfItems'
import Time from '../formComponents/Time'
import OneQuestion from '../formComponents/OneQuestion'
import Password from '../formComponents/Password'
import Transfer from '../formComponents/Transfer'
import Scale from '../formComponents/Scale'
import Email from '../formComponents/Email'
import Phone from '../formComponents/Phone'
const Container=styled.div`
  flex: 5;
  overflow-y: hidden;
  &:hover{
    overflow-y: scroll;
    ::-webkit-scrollbar{
      width: 5px;
      border: 1px solid #ebebeb;
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      width: 2px;
      background-color: #c9c9c9;
      border-radius: 20px;
    }
  }
`
const Cover=styled.div`
  width: 100%;
  height: 2000px;
  display: flex;
  position: relative;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
const Left=styled.div`
  flex: 2;
  display:flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
  &:hover{
    overflow-y: scroll;
    ::-webkit-scrollbar{
      width: 5px;
      border: 1px solid #ebebeb;
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      width: 2px;
      background-color: #c9c9c9;
      border-radius: 20px;
    }
  }
`
const Right=styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
`
const FormImg=styled.div`
  position: absolute;
  width: 330px;
  height: ${props=>props.height}px;
  top: ${props=>props.top}px;
  left:${props=>props.left}px;
  background: url(${props=>props.url}) no-repeat;
  background-size: 100%;
  cursor: grabbing;
  border: 2px solid red;
`
const Image=styled.img`
  width: 100%;
  height: 100%;
`
const BottomRef=styled.div`
  
`
function AddForms() {
  const [formsImg,setFormsImg]=useState([
    {
      formName:'Counter',
      top:10,
      fixedTop:10,
      left:750,
      img:'/images/Counter.png',
      height:50
    },
    {
      formName:'YesOrNo',
      top:70,
      fixedTop:70,
      left:750,
      img:'/images/YesOrNo.png',
      height:50
    },
    {
      formName:'UploadImgs',
      top:135,
      fixedTop:135,
      left:750,
      img:'/images/UploadImgs.png',
      height:150
    },
    {
      formName:'MultipleChoice',
      top:300,
      fixedTop:300,
      left:750,
      img:'/images/MultipleChoice.png',
      height:150
    },
    {
      formName:'RepeatAction',
      top:470,
      fixedTop:470,
      left:750,
      img:'/images/RepeatAction.png',
      height:100
    },
    {
      formName:'DetailTextArea',
      top:600,
      fixedTop:600,
      left:750,
      img:'/images/DetailTextArea.png',
      height:100
    },
    {
      formName:'Calendar',
      top:710,
      fixedTop:710,
      left:750,
      img:'/images/Calendar.png',
      height:180
    },
    {
      formName:'SingleChoice',
      top:900,
      fixedTop:900,
      left:750,
      img:'/images/SingleChoice.png',
      height:140
    },
    {
      formName:'NumberOfItems',
      top:1060,
      fixedTop:1060,
      left:750,
      img:'/images/NumberOfItems.png',
      height:100
    },
    {
      formName:'Time',
      top:1180,
      fixedTop:1180,
      left:750,
      img:'/images/Time.png',
      height:100
    },
    {
      formName:'OneQuestion',
      top:1300,
      fixedTop:1300,
      left:750,
      img:'/images/OneQuestion.png',
      height:70
    },
    {
      formName:'Password',
      top:1390,
      fixedTop:1390,
      left:750,
      img:'/images/Password.png',
      height:80
    },
    {
      formName:'Transfer',
      top:1490,
      fixedTop:1490,
      left:750,
      img:'/images/fromAtoZ.png',
      height:100
    },
    {
      formName:'Scale',
      top:1610,
      fixedTop:1610,
      left:750,
      img:'/images/Scale.png',
      height:175
    },
    {
      formName:'Email',
      top:1795,
      fixedTop:1795,
      left:750,
      img:'/images/Email.png',
      height:80
    },
    {
      formName:'Phone',
      top:1885,
      fixedTop:1885,
      left:750,
      img:'/images/phoneNumber.png',
      height:80
    },
  ])
  const [mouseDoun,setMouseDoun]=useState({
    formName:'',
    doun:false
  })
  const [forms,setForms]=useState([])
  const [formNameOnDoun,setFormNameOnDoun]=useState('')
  const removeForm=(index)=>{
    const newArray=forms.filter((form,idx)=>{
      if(index!==idx){
        return form
      }
    })
    setForms(newArray)
  }
  const Up=(formName)=>{
    setMouseDoun({formName:formName,doun:false})
    const newData=formsImg.map((formImg)=>{
      if(formImg.left<500){
        setForms([...forms,{form:formName,height:0}])
      }
      return {...formImg,top:formImg.fixedTop,left:750}
    })
    setFormsImg(newData)
  }
  const Doun=(formName)=>{
    setFormNameOnDoun(formName)
    setMouseDoun({formName:formName,doun:true})
  }
  const Onmovemouse=(e)=>{
    const topWindowForDiv=document.getElementById('form').getBoundingClientRect().top;
    if(mouseDoun.doun){
      const newData=formsImg.map((formImg,index)=>{
        if(formImg.formName===mouseDoun.formName){
          if(index===0){
            return {...formImg,top:e.clientY-72,left:e.clientX-(183+30)}
          }
          return {...formImg,top:e.clientY-topWindowForDiv,left:e.clientX-(183+30)}
        }
        return formImg
      })
      setFormsImg(newData)
    }
  }
  const ObjectT=()=>{
    return forms.map((form,idx)=>{
      switch(form.form){
        case 'Counter':return <Counter removeForm={()=>removeForm(idx)} forms={forms} setForms={setForms} key={idx}/>;
        case 'YesOrNo':return <YesOrNo removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'UploadImgs':return <UploadImgs removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'MultipleChoice':return <MultipleChoice removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'RepeatAction':return <RepeatAction removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'DetailTextArea':return <DetailTextArea removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'Calendar':return <Calendar removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'SingleChoice':return <SingleChoice removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'NumberOfItems':return <NumberOfItems removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'Time':return <Time removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'OneQuestion':return <OneQuestion removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'Password':return <Password removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'Transfer':return <Transfer removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'Scale':return <Scale removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'Email':return <Email removeForm={()=>removeForm(idx)} key={idx}/>;
        case 'Phone':return <Phone removeForm={()=>removeForm(idx)} key={idx}/>;
        default:return '';
      }
    })
  }

  return (
    <Container onMouseUp={()=>Up(formNameOnDoun)}>
      <Cover>
        <Left onMouseMove={(e)=>{Onmovemouse(e)}} id="left">
          {((ObjectT()))}
          {
            formsImg.map((formImg,idx)=>(
              <FormImg left={formImg.left} top={formImg.top} onMouseDown={()=>Doun(formImg.formName)} onMouseUp={()=>Up(formImg.formName)} url={formImg.img} height={formImg.height} key={idx} id='form'>
              
              </FormImg>
            ))
          }
        </Left>
        <Right onMouseMove={(e)=>{Onmovemouse(e)}}>

        </Right>
      </Cover>
    </Container>
  )
}

export default AddForms
