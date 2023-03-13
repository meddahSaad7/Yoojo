import React from 'react'
import styled from 'styled-components'
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
function Forms() {
  return (
    <Container>
      <Transfer/>
    </Container>
  )
}

export default Forms