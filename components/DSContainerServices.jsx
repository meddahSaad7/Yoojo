import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Image=styled.img`
    width: 200px;
    height: 200px;
    transition: all 1s ease;
`
const Service=styled.div`
    width: 45%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    align-items: center;
    border: 1px solid #d9d9d97d;
    box-shadow: 2px 3px 20px #d9d9d97d;
    &:hover{
        background: #ededed7c;
    }
    &:hover ${Image}{
        transform: scale(1.2);
    }
    margin: 5px;
    border-radius: 20px;
    @media (max-width:800px) {
        width: 100%;
    }
`
const ImgContainer=styled.div`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const ServiceTitle=styled.h3`
    margin-left: 20px;
    cursor: pointer;
    
`
const ArrowRightIcon1=styled(ArrowRightIcon)`
    display: flex;
`
const ImgTitle=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
function DSContainerServices({Data,setComp,Path,setPath}) {
    const handelClick=(title)=>{
        setComp('categories1')
        setPath([...Path,title])
    }
  return (
    <Container>
        {
            Data.map((element,index)=>(
                <Service key={index} onClick={()=>handelClick(element.title)}>
                    <ImgTitle>
                        <ImgContainer>
                            <Image src={element.img}/>
                        </ImgContainer>
                        <ServiceTitle>
                            {element.title}
                        </ServiceTitle>
                    </ImgTitle>
                    <ArrowRightIcon1/>
                </Service>
            ))
        }
    </Container>
  )
}
export default DSContainerServices