import React,{useState} from 'react'
import styled from 'styled-components';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CallIcon from '@mui/icons-material/Call';
const styles={
    color:{
        color:'blue',
    },
    direction:{
        width:'35px',
        height:'35px',
        borderRadius:'50%',
        background:'white',
        boxShadow:'2px 3px 8px gray',
        cursor:'pointer'
    }
}
const Container=styled.div`
    width: 100vw;
    position: relative;
    border-bottom: 1px solid #b4c3d0;
    margin-bottom: 20px;
`
const Wrapper=styled.div`
    width: ${props=>props.width};
    height: 50px;
    background-color: #eef1fc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 1000;
    transform: translateX(${props=>props.count*100}vw);
    transition: all 1.5s ease;
`
const Element=styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`
const ToLeft=styled.div`
    position: absolute;
    left: 5vw;
    top: 7px;
    z-index: 55;
`
const ToRight=styled.div`
    position: absolute;
    left: 90vw;
    top: 7px;
    z-index: 55;
`
function Slide() {
    const [widthState,setWidthState]=useState(window.innerWidth)
    const [count,setCount]=useState(0)
    const handleClick=(props)=>{
        if(props==='right'){
            if(count<=-3){
                setCount(0);
            }else{
                setCount(count-1);
            }
        }else{
            if(count>=0){
                setCount(-3)
            }else{
                setCount(count+1)
            }
        }
    }
    window.addEventListener('resize',()=>{
        setWidthState(window.innerWidth)
    })
  return (
    <Container>
        {widthState<717?<ToLeft onClick={()=>handleClick('left')}>
            <KeyboardArrowLeftIcon style={styles.direction}/>
        </ToLeft>:''}
        <Wrapper width={widthState<717?'400vw':'100%'} count={count}>
            
            <Element>
                <HowToRegIcon style={styles.color}/>
                Prestataires qualifiés
            </Element>
            <Element>
                <VerifiedUserIcon style={styles.color}/>
                Prestations assurées
            </Element>
            <Element>
                <AccountBalanceWalletIcon style={styles.color}/>
                Budget respecté
            </Element>
            <Element>
                <CallIcon style={styles.color}/>
                Service encadré
            </Element>
            
        </Wrapper>
        {widthState<717?<ToRight onClick={()=>handleClick('right')}>
            <KeyboardArrowRightIcon style={styles.direction}/>
        </ToRight>:''}
    </Container>
  )
}

export default Slide