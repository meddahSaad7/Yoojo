import React,{useState} from 'react'
import styled from 'styled-components'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import DSContainerServices from '../components/DSContainerServices';
import DSCategory1 from '../components/DSCategory1';
import DSCategory2 from '../components/DSCategory2';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Container=styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
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
`

const SearchContainer=styled.div`
    width: 76%;
    height: 45px;
    padding: 30px;
    position: relative;
`
const SearchInput=styled.input`
    width: 97%;
    height: 100%;
    border: none;
    background: #ededed;
    border-radius: 5px;
    padding-left: 30px;
    outline-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`
const SearchIcon1=styled(SearchIcon)`
    position: absolute;
    top: 40px;
    left: 35px;
`
const H4=styled.h4`
    color: ${props=>props.idx!==props.length-1?'#4d4dff':'black'};
    cursor: pointer;
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
function DomandeService() {
    const Data=require('../Data');
    const [comp, setcomp] = useState('');
    const [path,setpath]=useState(["services"])
    const ObjectT=()=>{
        switch(comp){
            case 'categories1':return <DSCategory1 setComponent={setcomp} setPath={setpath} Path={path}/>;
            case 'categories2':return <DSCategory2/>;
            default:return <DSContainerServices Data={Data} setComp={setcomp} setPath={setpath} Path={path}/>;
        }
    }
    const handleClick=(idx)=>{
        if(idx!==path.length-1){
            if(idx===0){
                setcomp('')
                setpath(['services'])
            }else{
                setcomp('categories1')
                setpath(['services',path[idx]])
            }
        }
    }
    return (
            <Container>
                <SearchContainer>
                    <SearchIcon1/>
                    <SearchInput placeholder='Rechercher un service'/>
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
                </SearchContainer>
                {((ObjectT()))}
            </Container>
    )
}

export default DomandeService