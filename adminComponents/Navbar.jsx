import React,{useEffect} from 'react'
import styled from 'styled-components'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsightsIcon from '@mui/icons-material/Insights';
import WalletIcon from '@mui/icons-material/Wallet';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
const Container=styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    background-color: #ececec;
`
const TopNavbar=styled.div`
    flex: 1;
`
const Title=styled.h2`

`
const CenterNavbar=styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`
const Button=styled.h5`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    color:gray;
    &:hover{
        background-color: #a1f4ff;
        font-size: 20px;
        color: black;
    }
`
const Link1=styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    color:gray;
    &:hover{
        background-color: #a1f4ff;
        color: black;
    }
    text-decoration: none;
`
const BottomNavbar=styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    margin-bottom: 20px;
`
const DashboardIcon1=styled(DashboardIcon)`
    margin-right:10px;
`
const InsightsIcon1=styled(InsightsIcon)`
    margin-right:10px;
`
const WalletIcon1=styled(WalletIcon)`
    margin-right:10px;
`
const MarkChatUnreadIcon1=styled(MarkChatUnreadIcon)`
    margin-right:10px;
`
const PersonAddIcon1=styled(PersonAddIcon)`
    margin-right:10px;
`
const PersonIcon1=styled(PersonIcon)`
    margin-right:10px;
`
const ContactSupportIcon1=styled(ContactSupportIcon)`
    margin-right:10px;
`
const SettingsIcon1=styled(SettingsIcon)`
    margin-right:10px;
`
const LogoutIcon1=styled(LogoutIcon)`
    margin-right:10px;
`
const RoomServiceIcon1=styled(RoomServiceIcon)`
    margin-right:10px;
`
function Navbar() {
  return (
    <Container>
        <TopNavbar>
            <Title>Mubtakar.io</Title>
        </TopNavbar>
        <CenterNavbar>
            <Link1 to={'/admin/dashboard'}>
                <DashboardIcon1/>
                Dashboard
            </Link1>
            <Link1 to={'/admin/statistics'}>
                <InsightsIcon1/>
                Statistics
            </Link1>
            <Link1 to={'/admin/notifications'}>
                <MarkChatUnreadIcon1/>
                Notifications
            </Link1>
            <Link1 to={'/admin/addservices'}>
                <RoomServiceIcon1/>
                add services
            </Link1>
            <Link1 to={'/admin/addadmins'}>
                <PersonAddIcon1/>
                Add admins
            </Link1>
            <Link1 to={'/admin/profile'}>
                <PersonIcon1/>
                Profile
            </Link1>
        </CenterNavbar>
        <BottomNavbar>
            <Link1>
                <ContactSupportIcon1/>
                Support
            </Link1>
            <Link1>
                <SettingsIcon1/>
                Setting
            </Link1>
            <Link1>
                <LogoutIcon1/>
                Log out
            </Link1>
        </BottomNavbar>
    </Container>
  )
}

export default Navbar
