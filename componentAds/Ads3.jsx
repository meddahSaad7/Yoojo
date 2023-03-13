import React,{useState} from 'react'
import styled from 'styled-components';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container=styled.div`
    width: 300px;
    height: 400px;
    top: 50px;
    left:550px;
    z-index: 99;
    position: absolute;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    top:0;
    left:110px;
    right: 80px;
    top: 50px;
    z-index: 9;
`
const H3=styled.h3`
    z-index: 9;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 5px;
    color: gray;
    cursor: pointer;
    text-decoration: underline;
`
function Ads3() {
    const [visebility,setVisebility]=useState(true)
  return (
    <>
        {
            visebility?
                <Container>
                    <H3>Google ads <HighlightOffIcon style={{color:'red'}} onClick={()=>{setVisebility(false)}}/></H3>
                    <Image src='/images/ads3.png'/>
                </Container>
            :
            ''
        }
    </>
    
  )
}

export default Ads3
