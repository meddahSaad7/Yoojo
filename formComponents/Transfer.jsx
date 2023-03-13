import React,{useState} from 'react'
import styled from 'styled-components'
import { Autocomplete, verify } from '@lob/react-address-autocomplete'
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
    padding-top: 33px;
`
const appStyles = {
  padding: '1em',
  width: '32em'
}
const Cercle=styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color:${props=>props.color};
    position: absolute;
    top: ${props=>props.top}px;
    left: 5%;
    z-index: 111;
`
const Line=styled.div`
    width: 3px;
    height: 55px;
    background-color: gray;
    position: absolute;
    top: 40px;
    left: 33px;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
  position:absolute;
  top: 0;
  right: 0;
  color:gray;
  font-size: 20px;  
`
const Autocomplete1Container=styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position: relative;
`
const Autocomplete1=styled(Autocomplete)`
    width: 90%;
    margin-top: 10px;
    margin-left: 45px;
`
function Transfer({removeForm}) {
    const [selectedAddress, setSelectedAddress] = useState({})
    const [verificationResult, setVerificationResult] = useState(null)
    const verifyAddress = () =>
        verify("YOUR_API_KEY", selectedAddress)
        .then((result) => {
            const summary = `This address is ${result.deliverability}`
            setVerificationResult(summary)
    }).catch((errorData) => setVerificationResult(errorData.message))
    return (
        <Container>
            <HighlightOffIcon1 onClick={removeForm}/>
            <Autocomplete1Container className="App" style={appStyles}>
                <Cercle top={35} color='green'/>
                <Autocomplete1
                    apiKey="YOUR_API_KEY"
                    onSelection={(selected) => setSelectedAddress(selected.value)}
                />
                <Line/>
                <Cercle top={85} color='gray'/>
                <Autocomplete1
                    apiKey="YOUR_API_KEY"
                    onSelection={(selected) => setSelectedAddress(selected.value)}
                />
            </Autocomplete1Container>
        </Container>
    )
}

export default Transfer
