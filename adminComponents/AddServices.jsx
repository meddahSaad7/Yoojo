import React,{useState} from 'react'
import styled from 'styled-components'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Tooltip from '@mui/material/Tooltip';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DescriptionIcon from '@mui/icons-material/Description';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddForms from './AddForms';

const Container=styled.div`
  width: 100%;
  display: flex;
`
const Left=styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Right=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title=styled.h2`

`
const Services=styled.div`
  width: 95%;
  height: 90%;
  overflow-y: hidden;
  &:hover{
    overflow-y: scroll;
    ::-webkit-scrollbar{
      width: 5px;
      border: 1px solid #ebebeb;
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      width: 2px;
      background-color: #c9c9c9;
      border-radius: 20px;
    }
  }
`
const Service=styled.div`
  width: 95%;
  height:60px;
  margin-top:5px;
  background-color: #dfdddd;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  border-radius:10px;
  cursor: pointer;
`
const Wrapper=styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
const ContRemoveUpdate=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
`
const DeleteIcon1=styled(DeleteIcon)`
  color: #fb6767;
`
const BorderColorIcon1=styled(BorderColorIcon)`
  color: #00d600;
`
const ContImgTitle=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImgCover=styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
`
const Image=styled.img`

`
const TitleService=styled.h3`
  margin-left: 10px;
`
const ContInput=styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 20px 0px;
`
const Input=styled.input`
  width: 100%;
  height: 100%;
  font-size: 20px;
  padding: 5px 5px 5px 30px;
  outline-color: blue;
  border-radius: 10px;
  border: 1px solid #e4e4e4;
`
const LabelContainer=styled.div`
  width: 90%;
  height: 160px;
  position: relative;
`
const Label=styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
`
const UploadImg=styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
`
const DesignServicesIcon1=styled(DesignServicesIcon)`
  position: absolute;
  left: -13px;
  top: 13px;
  color: gray;
`
const Description=styled.textarea`
  max-width: 86.5%;
  min-width: 86.5%;
  max-height: 100%;
  height: 90%;
  padding: 20px 20px 20px 30px;
  outline-color: blue;
  border-radius: 10px;
  border: 1px solid #e4e4e4;
  font-size: 20px;
`
const ContDesc=styled.div`
  width: 90%;
  height: 150px;
  position: relative;
`
const DescriptionIcon1=styled(DescriptionIcon)`
  position: absolute;
  top: 20px;
  left: 5px;
  color: gray;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 999;
  padding: 2px;
  color: gray;
`
const PathContainer=styled.div`
  display: flex;
  width: 40%;
  justify-content: left;
`
const Path=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  &:hover{
    text-decoration: underline;
  }
`
const H4=styled.h4`
  color: ${props=>props.idx!==props.length-1?'#4d4dff':'black'};
  cursor: pointer;
`
function AddServices() {
  const Data=require('../Data')
  const DataCategories1=require('../DataCategories1');
  const DataCategories2=require('../DataCategories2')
  const [comp,setComp]=useState(0)
  const myComp=()=>{
    switch(comp){
      case 1:return DataCategories1;
      case 2:return DataCategories2;
      default:return Data;
    }
  }
  const [path,setPath]=useState(['services'])
  const [file,setFile]=useState([])
  const handelChange=(value)=>{
    setFile(value.target.files)
  }
  const handleClick=(idx)=>{
    setPath(path.slice(0,idx+1))
    if(idx<4){
      setComp(idx)
    }
  }
  const setName=(title)=>{
    setComp(comp+1)
    if(path.length>3){
      setPath(path)
    }else{
      setPath([...path,title])
    }
  }
  return (
    <Container>
      {
        comp===3?
        <AddForms/>
        :
      <>
          <Left>
          <PathContainer>
              {
                path.length>1&&path.map((P,index)=>(
                  <Path onClick={()=>handleClick(index)} key={index}>
                      <H4 key={index} length={path.length} idx={index}>{P}</H4>
                      <ChevronRightIcon/>
                  </Path>
                ))
              }
          </PathContainer>
          <Services>
            {
              myComp().map((data,index)=>(
                <Service key={index} onClick={()=>setName(data.title)}>
                  <ContImgTitle>
                    <ImgCover>
                      <Image src={data.img}/>
                    </ImgCover>
                    <TitleService>{data.title}</TitleService>
                  </ContImgTitle>
                  <ContRemoveUpdate>
                    <Tooltip title='Update service' placement='top' arrow followCursor>
                      <BorderColorIcon1/>
                    </Tooltip>
                    <Tooltip title='Delete service' placement='top' arrow followCursor>
                      <DeleteIcon1/>
                    </Tooltip>
                  </ContRemoveUpdate>
                </Service>
              ))
            }
          </Services>
        </Left>
        <Right>
          <Title>Add Services</Title>
          <Wrapper>
            <LabelContainer>
              <HighlightOffIcon1 onClick={()=>setFile([])}/>
              <Label htmlFor='file'>
                <UploadImg src={file[0]?URL.createObjectURL(file[0]):'/images/Upload.png'}/>
                <Input type='file' id='file' hidden onChange={(e)=>handelChange(e)}/>
              </Label>
            </LabelContainer>
            <ContInput>
              <Tooltip title='Service name' arrow followCursor>
                <DesignServicesIcon1/>
              </Tooltip>
              <Input placeholder='Write your service here'/>
            </ContInput>
            <ContDesc>
              <Tooltip title='Service Description' arrow followCursor>
                <DescriptionIcon1/>
              </Tooltip>
              <Description placeholder='Write your description of service'/>
            </ContDesc>
          </Wrapper>
        </Right>
      </>
      }
    </Container>
  )
}

export default AddServices
