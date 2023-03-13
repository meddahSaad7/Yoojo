import React,{useState} from 'react'
import styled from 'styled-components';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import {Link, useNavigate} from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
const Container=styled.div`
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 999;
    background:${props=>props.color};
    border-bottom: 1px solid #e3d6d6;
`
const Wrapper=styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    overflow: hidden;
`
const Wrapper2=styled.div`

`
const Logo=styled.div`
    display: flex;
    justify-content: start;
    flex: .8;
    align-items: center;
    @media (max-width:773px){
        flex: .5;
    }
    @media (max-width:690px){
        flex:.9;
    }
`
const Button=styled.button`
    height: 45px;
    flex: .5;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #6290f9;
    border-radius: 50px 50px;
    font-weight: bold;
    font-size: 15px;
    &:hover{
        background: #463cff;
    }
    @media (max-width:773px){
        font-size: 12px;
    }
    @media (max-width:690px){
        flex:.9;
        font-size: 15px;
    }
    @media (max-width:630px){
        flex:1;
        font-size: 13px;
    }
    @media (max-width:530px){
        flex:1.5;
        font-size: 10px;
    }
    @media (max-width:440px){
        flex:2;
        font-size: 10px;
    }
`
const Ul=styled.ul`
    flex: .9;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`
const Li=styled.li`
    padding:5px 10px;
    border-radius: 20px;
    &:hover{
        background-color: #eeeeee;
    }
`
const Ul2=styled.ul`
    padding-left: 30px;
    height: 135px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    list-style: none;
`
const Li2=styled.li`

`
const Image=styled.img`
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-top:20px;
`
const body=document.getElementById('body')
function NavBar({visibility,setVisibility}) {
    const navigate=useNavigate()
    const [toggle,setToggle]=useState(false)
    const [width,setWidth]=useState(window.innerWidth)
    const [scrollPosition,setScrollPosition]=useState(0)
    window.addEventListener("resize",()=>{
        setWidth(window.innerWidth)
    })
    window.onscroll=function(){
        setScrollPosition(window.scrollY)
    }
    const handleCick=()=>{
        window.scrollTo({top:0})
        body.setAttribute('style','overflow: hidden')
        setVisibility(!visibility)
    }
  return (
    <Container color={scrollPosition<=1&&width>690?'transperent':'white'}>
        <Wrapper>
            <Logo>
                <Link to={'/'}>
                    <Image src='/images/logo.png'/>
                </Link>
            </Logo>
            <Button onClick={()=>navigate('/domandeService')}>
                <ControlPointIcon style={{marginRight:"10px"}}/>
                Demander un service
            </Button>

            {
                width>690?
                <Ul>
                    <Li>
                        <Link className='link' to={'/jober'}>Devenir jobber</Link>
                    </Li>
                    <Li>
                        <Link className='link' to={'#'} onClick={handleCick}>Connexion</Link>
                    </Li>
                    <Li>
                        <Link className='link' to={'/register'}>Inscription</Link>
                    </Li>
                </Ul>
                :
                <Ul style={{justifyContent:"end",marginRight:'10px'}}>
                    <Li><DehazeIcon onClick={()=>setToggle(!toggle)}/></Li>
                </Ul>
                
            }
            
        </Wrapper>
        <Wrapper2>
            {
                toggle&&width<690?
                <Ul2>
                    <Li>
                        <Link className='link' to={'#'}>Devenir jobber</Link>
                    </Li>
                    <Li>
                        <Link className='link' to={'#'} onClick={handleCick}>Connexion</Link>
                    </Li>
                    <Li>
                        <Link className='link' to={'/register'}>Inscription</Link>
                    </Li>
                </Ul2>:''
            }
        </Wrapper2>
    </Container>
  )
}

export default NavBar