import React,{useState} from 'react'
import styled from 'styled-components'
import CreatableSelect from 'react-select/creatable';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const MOptions = [
  { value: '5', label: '5m'},
  { value: '10', label: '10m' },
  { value: '15', label: '15m' },
  { value: '20', label: '20m' },
  { value: '25', label: '25m' },
  { value: '30', label: '30m' },
  { value: '35', label: '35m' },
  { value: '40', label: '40m' },
  { value: '45', label: '45m' },
  { value: '50', label: '50m' },
  { value: '55', label: '55m' },
  { value: '60', label: '60m' },
  { value: '65', label: '65m' },
  { value: '70', label: '70m' },
  { value: '75', label: '75m' }
]
const M2Options = [
  { value: '5', label: '5m2'},
  { value: '10', label: '10m2' },
  { value: '15', label: '15m2' },
  { value: '20', label: '20m2' },
  { value: '25', label: '25m2' },
  { value: '30', label: '30m2' },
  { value: '35', label: '35m2' },
  { value: '40', label: '40m2' },
  { value: '45', label: '45m2' },
  { value: '50', label: '50m2' },
  { value: '55', label: '55m2' },
  { value: '60', label: '60m2' },
  { value: '65', label: '65m2' },
  { value: '70', label: '70m2' },
  { value: '75', label: '75m2' }
]
const KmOptions = [
  { value: '5', label: '5km'},
  { value: '10', label: '10km' },
  { value: '15', label: '15km' },
  { value: '20', label: '20km' },
  { value: '25', label: '25km' },
  { value: '30', label: '30km' },
  { value: '35', label: '35km' },
  { value: '40', label: '40km' },
  { value: '45', label: '45km' },
  { value: '50', label: '50km' },
  { value: '55', label: '55km' },
  { value: '60', label: '60km' },
  { value: '65', label: '65km' },
  { value: '70', label: '70km' },
  { value: '75', label: '75km' }
]
const Km2Options = [
  { value: '5', label: '5km2'},
  { value: '10', label: '10km2' },
  { value: '15', label: '15km2' },
  { value: '20', label: '20km2' },
  { value: '25', label: '25km2' },
  { value: '30', label: '30km2' },
  { value: '35', label: '35km2' },
  { value: '40', label: '40km2' },
  { value: '45', label: '45km2' },
  { value: '50', label: '50km2' },
  { value: '55', label: '55km2' },
  { value: '60', label: '60km2' },
  { value: '65', label: '65km2' },
  { value: '70', label: '70km2' },
  { value: '75', label: '75km2' }
]
const Container=styled.div`
  width: 95%;
  height: auto;
  padding-top:30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3333;
`
const CreatableSelect1=styled(CreatableSelect)`
  width: 70%;
`
const Buttons=styled.div`
  width: 40%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Button=styled.button`
  padding: 5px 10px;
  border: none;
  margin-bottom: 10px;
  background-color: ${props=>props.option===props.state?'#4d94ff':''};
  color: ${props=>props.option===props.state?'white':''};
  border-radius: 5px;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
  position:absolute;
  top: 0;
  right: 0;
  color:gray;
  font-size: 20px;  
`
function Scale({removeForm}) {
  const [state,setState]=useState('m2')
  const Options=(state)=>{
    switch(state){
      case 'm' :return MOptions;
      case 'm2':return M2Options;
      case 'Km':return KmOptions;
      case 'Km2':return Km2Options;
      default :return M2Options;
    }
  }
  return (
    <Container>
      <HighlightOffIcon1 onClick={removeForm}/>
      <Buttons>
        <Button onClick={()=>setState('m')} option='m' state={state}>Meters</Button>
        <Button onClick={()=>setState('m2')} option='m2' state={state}>M2</Button>
        <Button onClick={()=>setState('Km')} option='Km' state={state}>Km</Button>
        <Button onClick={()=>setState('Km2')} option='Km2' state={state}>Km2</Button>
      </Buttons>
      <CreatableSelect1 isClearable options={Options(state)} />
    </Container>
  )
}
export default Scale
