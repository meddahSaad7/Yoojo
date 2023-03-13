import React,{useState} from 'react'
import styled from 'styled-components'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Users from '../Users';
import moment from 'moment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';

const Container=styled.div`
    flex: 5;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper=styled.div`
    width: 80%;
    height: 80%;
`
const SearchBar=styled.div`
    width: 90%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const SearchInput=styled.input`
    width: 100%;
    height: 100%;
    font-size: 20px;
    padding-top: 3px;
    padding-left: 30px;
    border-radius: 20px;
    outline-color: blue;
    border: 1px solid gray;
`
const PersonSearchIcon1=styled(PersonSearchIcon)`
    position: absolute;
    top: 2px;
    left: 5px;
`
const UsersDiv=styled.div`
    width: 90%;
    height: 90%;
    overflow-y: scroll;
    margin-top: 10px;
    ::-webkit-scrollbar{
        width: 3px;
    }
    ::-webkit-scrollbar-thumb{
        width: 3px;
        background-color: gray;
    }
`

const Email=styled.div`
    width: 40%;
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
const UserContainer=styled.div`
    width: 95%;
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
const SubmitDiv=styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: end;
    align-items: end;
`
const Submit=styled.button`
    padding: 10px 30px;
`
const MoreVertIcon1=styled(MoreVertIcon)`
    
`
function AddAdmins() {
    const [newUsers,setNewUsers]=useState(Users)
    const handleChange=(e,idx)=>{
        const newData=newUsers.map((user,index)=>{
            if(index===idx){
                return {...user,isAdmin:e.target.checked}
            }
            return user
        })
        setNewUsers(newData)
    }
    const Filter=(value)=>{
        const newData=Users.filter((user,idx)=>{
            return user.username.includes(value)||user.email.includes(value)
        })
        setNewUsers(newData)
    }
  return (
    <Container>
        <Wrapper>
            <SearchBar>
                <PersonSearchIcon1/>
                <SearchInput placeholder='Search...' onChange={(e)=>Filter(e.target.value)}/>
            </SearchBar>
            <UsersDiv>
                {
                    newUsers.map((user,idx)=>(
                        <UserContainer key={idx}>
                                            <Image src={user.img}/>
                                            <UsernameAndAgo>
                                                <Username>{user.username}</Username>
                                                <Ago>{moment(user.ago).fromNow()}</Ago>
                                            </UsernameAndAgo>
                                            <Email>
                                                <A href='https://mail.google.com/mail/u/0/#inbox?compose=new'>{user.email}</A>
                                            </Email>
                                            <Checkbox
                                                checked={user.isAdmin}
                                                onChange={(e)=>handleChange(e,idx)}
                                                inputProps={{ 'aria-label': 'controlled' }}
                                            />
                        </UserContainer>    
                    ))
                }
            </UsersDiv>
            <SubmitDiv>
                <Submit>Save</Submit>
            </SubmitDiv>
            
        </Wrapper>
    </Container>
  )
}

export default AddAdmins