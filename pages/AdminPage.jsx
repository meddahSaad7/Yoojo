import React,{useState} from 'react'
import styled from 'styled-components';
import Navbar from '../adminComponents/Navbar';
import Dashboard from '../adminComponents/Dashboard';
import AddServices from '../adminComponents/AddServices';
import Statistics from '../adminComponents/Statistics';
import Notifications from '../adminComponents/Notifications';
import Profile from '../adminComponents/Profile';
import AddAdmins from '../adminComponents/AddAdmins';
import { Routes,Route } from 'react-router-dom';
const Container=styled.div`
  width: 100vw;
  height: 100vh;
`
const Wrapper=styled.div`
  width: 100%;
  height: calc(100% - 62px);
  padding-top: 62px;
  display: flex;
  overflow: hidden;
`
function AdminPage() {
  return (
    <Container>
      <Wrapper>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/statistics' element={<Statistics/>}/>
          <Route path='/addservices' element={<AddServices/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/addadmins' element={<AddAdmins/>}/>
        </Routes>
      </Wrapper>
    </Container>
  )
}
export default AdminPage
