import React,{useState,useRef} from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Users from '../Users';
import moment from 'moment';
import { Data1,Data2,Data3,colors } from '../ChartsData';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  AreaChart,
  Area,
  Cell,
    ComposedChart,
    Line
} from "recharts";
const Container=styled.div`
    flex: 5;
    position: relative;
`
const Top=styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
`
const Jobbers=styled.h2`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Customers=styled.h2`
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LeftRightConteiner=styled.div`
    width: 100%;
    height: 60%;
    display:flex;
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
const Left=styled.div`
    width: ${props=>props.width}%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    :hover{
        overflow-y: scroll;
        ::-webkit-scrollbar{
        width: 5px;
        };
        ::-webkit-scrollbar-thumb{
            background-color: gray;
        }
    }
`
const Right=styled.div`
    width: ${props=>props.width}%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    :hover{
        overflow-y: scroll;
        ::-webkit-scrollbar{
        width: 5px;
        };
        ::-webkit-scrollbar-thumb{
            background-color: gray;
        }
    }
    
`

const BarDiv=styled.div`
    width: 10px;
    height: 100%;
    background-color: #fcfc8d;
    position: absolute;
    left: ${props=>props.position}%;
    cursor: col-resize;
`
const Search=styled.div`
    width: 60%;
    height: 40px;
    border-radius: 20px;
    position: relative;
    flex: 3;
`
const Input=styled.input`
    width: 100%;
    height: 100%;
    font-size: 20px;
    padding-left: 30px;
    border-radius: 20px;
    outline-color: blue;
`
const SearchIcon1=styled(SearchIcon)`
    position: absolute;
    top: 8px;
    left: 5px;
`

const Wrapper=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const UserContainer=styled.div`
    width: 90%;
    height: 50px;
    background-color: #e4f8fb;
    margin: 5px 0px;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0px 10px;
    border-radius: 20px;
`
const Image=styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
const UsernameAndAgo=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
`
const Username=styled.h5`

`
const Ago=styled.span`
    font-size: 10px;
    color: gray;
`
const MoreVertIcon1=styled(MoreVertIcon)`
    
`
const Email=styled.div`
    width: 30%;
    display: flex;
    font-size: 10px;
    margin-right: 10%;
    height: 80%;
    align-items: end;
    overflow-x: hidden;
    :hover{
        overflow-x: scroll;
        ::-webkit-scrollbar{
            height: 3px;
        };
        ::-webkit-scrollbar-thumb{
            height: 3px;
            background-color: gray;
        }
    }
`
const A=styled.a`
    
`
const Bottom=styled.div`
    width: ${props=>props.width}px;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        width: 0px;
    }
`
const Wrapperbottom=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
const Charts=styled.div`
    width: auto;
    height: auto;
    margin: 5px;
    border: 2px solid gray;
    border-radius: 20px;
`

function Statistics() {
    
    const [position,setPosition]=useState(50)
    const [down,setDown]=useState(false)
    const [placeholder,setPlaceholder]=useState('Search...')
    var right=100-position;
    var left=100-right;
    const search=useRef();
    const mouseMove=(e)=>{
        if(down){
            setPosition((e.clientX*100)/(window.innerWidth)-10)
                if(position<30){
                    setPlaceholder('Search customer...')
                    search.current.focus()
                }
                if(position>70){
                    setPlaceholder('Search jobber...')
                    search.current.focus() 
                }
        }

    }
    const [newData,setNewData]=useState(Users);
    const Filter=(value)=>{
        const newData=Users.filter(user=>{
            return user.username.includes(value)||user.email.includes(value);
        })
        setNewData(newData)
    }


    return (
        <Container onMouseUp={()=>setDown(false)}>
            <Top>
                <Jobbers>
                    Jobbers
                </Jobbers>
                
                <Search>
                    <SearchIcon1/>
                    <Input ref={search} placeholder={placeholder} onKeyUp={(e)=>Filter(e.target.value)}/>
                </Search>
                <Customers>
                    Customers
                </Customers>
                
            </Top>
            <LeftRightConteiner onMouseMove={(e)=>mouseMove(e)}>
                <BarDiv position={position} onMouseMove={(e)=>mouseMove(e)} onMouseDown={()=>setDown(true)} onMouseUp={()=>setDown(false)}/>
                <Left width={left}>
                    <Wrapper>
                        {
                            newData.map((user,idx)=>(
                                <>
                                    {
                                        user.isJober&&
                                        <UserContainer key={idx}>
                                            <Image src={user.img}/>
                                            <UsernameAndAgo>
                                                <Username>{user.username}</Username>
                                                <Ago>{moment(user.ago).fromNow()}</Ago>
                                            </UsernameAndAgo>
                                            <Email>
                                                <A href='https://mail.google.com/mail/u/0/#inbox?compose=new'>{user.email}</A>
                                            </Email>
                                            <MoreVertIcon1/>
                                        </UserContainer>
                                    }
                                </>
                            ))
                        }
                    </Wrapper>
                </Left>
                <Right width={right}>
                    <Wrapper>
                        {
                            newData.map((user,idx)=>(
                                <>
                                    {
                                        !user.isJober&&
                                        <UserContainer key={idx}>
                                            <Image src={user.img}/>
                                            <UsernameAndAgo>
                                                <Username>{user.username}</Username>
                                                <Ago>{moment(user.ago).fromNow()}</Ago>
                                            </UsernameAndAgo>
                                            <Email>
                                                <A href='https://mail.google.com/mail/u/0/#inbox?compose=new'>{user.email}</A>
                                            </Email>
                                            <MoreVertIcon1/>
                                        </UserContainer>
                                    }
                                </>
                            ))
                        }
                    </Wrapper>
                </Right>
            </LeftRightConteiner>
            <Bottom width={window.innerWidth-260}>
                <Wrapperbottom>
                    <Charts>
                        <PieChart width={200} height={130}>
                        <Pie data={Data1} cx="50%" cy="50%" outerRadius={70}>
                            {
                            Data1.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]}/>
                            ))
                            }
                        </Pie>
                        </PieChart>
                        
                    </Charts>
                    <Charts>
                        <ComposedChart width={730} height={130} data={Data2}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </Charts>
                    <Charts>
                        <AreaChart width={730} height={130} data={Data3}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </Charts>
                    
                </Wrapperbottom>
                
            </Bottom>
        </Container>
    )
}

export default Statistics