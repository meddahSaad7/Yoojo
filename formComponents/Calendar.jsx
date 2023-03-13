import React,{useState} from 'react'
import styled from 'styled-components'
import DateTimePicker from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container=styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: auto;
  margin: 10px 0px;
  .react-calendar{
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border-color: #dcdcdc;
  }
  padding-top:30px;
  position: relative;
`
const Title=styled.h3`
  color: gray;
`
const Question=styled.h2`
  margin: 10px 0px;
`
const DateTimePicker1=styled(DateTimePicker)`

`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function Calendar({removeForm}) {
  const [dataForms,setDataForms]=useState(
    {
      question:'Quel jour vous convient le mieux ?',
      answer:new Date()
    }
  )
  const editState=(val)=>{
    setDataForms({...dataForms,answer:val})
  }
  return (
    <Container>
      <HighlightOffIcon1 onClick={removeForm}/>
      <Title>Cours d'informatique</Title>
      <Question>Quel jour vous convient le mieux ?</Question>
      <DateTimePicker1 
        dayPlaceholder={'DD'}
        yearPlaceholder={'YYYY'}
        monthPlaceholder={'MM'}
        hourPlaceholder={'HH'}
        minutePlaceholder={'MM'}
        onChange={(val)=>editState(val)}
        isCalendarOpen={true}
        minDate={new Date()}
        onCalendarClose={()=>console.log('calendar closed')}
        onCalendarOpen={()=>console.log('calendar opened')}
        onClockClose={()=>console.log('clock closed')}
        onClockOpen={()=>console.log('clock opened')}
        value={dataForms.answer}
      /> 
    </Container>
  )
}

export default Calendar