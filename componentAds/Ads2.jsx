import React,{useState} from 'react'
import styled from 'styled-components';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container=styled.div`
    width: 100%;
    display: flex;
    background: #eef1fc;
    flex-direction: column;
    margin-right:30px;
`
const Image=styled.img`
    width: 90%;
    align-self: center;
`
const H3=styled.h3`
    color: gray;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px 40px;
    cursor: pointer;
`
function Ads2() {
    const [visebility,setVisebility]=useState(true)
  return (
    <>
        {
            visebility?
                <Container>
                    <H3>Google ads <HighlightOffIcon style={{color:'red'}} onClick={()=>{setVisebility(false)}}/></H3>
                    <Image src='https://tpc.googlesyndication.com/daca_images/simgad/3813549485961162596'/>
                </Container>
            :
            ''
        }
    </>
  )
}

export default Ads2
