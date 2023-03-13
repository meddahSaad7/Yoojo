import React from 'react'
import styled from 'styled-components';
import TopDashboard from './TopDashboard';
import LeftDashboard from './LeftDashboard';
import RightDashboard from './RightDashboard';
const Container=styled.div`
  flex: 5;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Body=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
function Dashboard() {
  return (
    <Container>
      <TopDashboard/>
      <Body>
        <LeftDashboard/>
        <RightDashboard/>
      </Body>
    </Container>
  )
}

export default Dashboard
