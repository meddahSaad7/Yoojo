import React,{useState} from 'react'
import styled from 'styled-components'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Container=styled.div`
    padding: 40px;
    overflow: hidden;
    margin: 10px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    margin: 10px;
`
const Wrapper=styled.div`
    display: flex;
    justify-content: space-around;
    transform: translate(${props=>props.count}px);
    transition: all 1s ease;
`
const H3=styled.h3`
    color: gray;
    text-decoration: underline;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px 0px;
    cursor: pointer;
`
function Ads1({data}) {
    const [count,setCount]=useState(200)
    const [visibility,setVisibility]=useState(true)
    setTimeout(()=>{
        if(count<-800){
            setCount(200)
        }else{
            setCount(count-100)
        }
    },1000)
  return (
    <Container>
        {
            visibility?
            <>
            <H3>Google ads <HighlightOffIcon style={{color:'red'}} onClick={()=>{setVisibility(false)}}/></H3>
            <Wrapper count={count}>
                {
                    data.map((data,index)=>(
                        <Image src={data.img} key={index}/>
                    ))
                }
            </Wrapper>
            </>
        :''
        }
    </Container>
  )
}

export default Ads1
