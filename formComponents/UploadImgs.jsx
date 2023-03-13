import React,{useState} from 'react'
import styled from 'styled-components';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const Container=styled.div`
    width: 95%;
    height: auto;
    margin: 10px 0px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
    padding-top: 30px;
`
const Title=styled.h3`
    
`
const Question=styled.h1`

`
const ImgContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 150px;
    margin-top: 20px;
`
const Label=styled.label`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Input=styled.input`
    
`
const AddPhotoAlternateIcon1=styled(AddPhotoAlternateIcon)`
    font-weight: bold;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 8px;
    background-color: #e4e4e4;
`
const HighlightOffIcon2=styled(HighlightOffIcon)`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 80%;
    padding: 5px;
    color: gray;
`
const Image=styled.img`
    width: 100%;
    height: 100%;
    z-index: 6;
`
const Wrapper=styled.div`
    width: 30%;
    height: 100%;
    border-radius: 20px;
    border: 2px dashed gray;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`
const HighlightOffIcon1=styled(HighlightOffIcon)`
    position:absolute;
    top: 0;
    right: 0;
    color:gray;
    font-size: 20px;
`
function UploadImgs({removeForm}) {
    const [dataForms,setDataForms]=useState([
        {
            imgNumbers:3,
            question:'Souhaitez-vous ajouter des photos ? (optionnel)',
            answer:[]
        }
    ])
    const removeByIndex=(array,index)=>{
        var a=[]
        array.map((data,idx)=>{
            if(index===idx){
                a.push(null)
            }else{
                a.push(data)
            }
        })
        return a
    }
    const updateState=(file,idxImg)=>{
        const a=dataForms[0].answer;
        a[idxImg]=file[0];
        const newData={...dataForms[0],answer:a}
        setDataForms([newData])
    }

    const cancelImg=(idxImg)=>{
        var a=dataForms[0].answer;
        a=removeByIndex(a,idxImg)
        const newData={...dataForms[0],answer:a}
        setDataForms([newData])
    }
  return (
    <Container>
        <HighlightOffIcon1 onClick={removeForm}/>
        <Title>Montage de meubles IKEA</Title>
        <Question>Souhaitez-vous ajouter des photos ? (optionnel)</Question>
        {
            <ImgContainer>
                    {
                        [1,2,3].map((answer,i)=>(
                            <Wrapper key={i}>
                                <Label htmlFor={`file${i}`}>
                                    {
                                        dataForms[0].answer[i]?<Image src={URL.createObjectURL(dataForms[0].answer[i])}/>:<AddPhotoAlternateIcon1/>
                                    }
                                    <Input type='file' id={`file${i}`} onChange={(e)=>updateState(e.target.files,i)} hidden/>
                                </Label>
                                <HighlightOffIcon2 onClick={()=>cancelImg(i)}/>
                            </Wrapper>
                        ))
                    }
            </ImgContainer>
        }
        
    </Container>
  )
}
export default UploadImgs