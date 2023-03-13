import React from 'react'
import styled from 'styled-components'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
const Container=styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content:space-between;
  padding: 5px 0px;
  align-items: center;
`
const UserName=styled.h2`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Search=styled.div`
  flex: 2;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const SearchIcon1=styled(SearchIcon)`
  font-size: 20px;
  position: absolute;
  left: 5px;
`
const Input=styled.input`
  width: 100%;
  height: 100%;
  padding-left: 30px;
  font-size: 20px;
  outline-color: blue;
  border-radius: 20px;
  border-color: #cecece;
`
const Notifications=styled.div`
  flex: .5;
  display: flex;
  justify-content: end;
  align-items: center;
`
const CircleNotificationsIcon1=styled(CircleNotificationsIcon)`

`
const ImgCover=styled.div`
  flex: .5;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image=styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`
const HelloImg=styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-left: 5px;
`
function TopDashboard() {
  return (
    <Container>
      <UserName>
        Hello, Saad
        <HelloImg src='/images/hello.png'/>
      </UserName>
      <Search>
        <SearchIcon1/>
        <Input placeholder='Search...'/>
      </Search>
      <Notifications>
        <CircleNotificationsIcon1/>
      </Notifications>
      <ImgCover>
        <Image src='/images/person.jpg'/>
      </ImgCover>
    </Container>
  )
}

export default TopDashboard
