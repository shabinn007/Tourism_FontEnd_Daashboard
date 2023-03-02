import '../App.css'
import {Home, Store, Report, Mail, DynamicFeed, ChatBubble,} from '@mui/icons-material/';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { HiUserGroup } from "react-icons/hi";
import { ImTicket } from "react-icons/im";
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className='SideBar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">

          <Link className='p-0' to={'/home'} style={{textDecoration:'none' ,color:"grey"}}>
            <li className="SideBarListItem ">
              <Home className='sidebarIcon'/>
              Home
            </li>
            </Link>

            <Link className='p-0' to={'/places'} style={{textDecoration:'none' ,color:"grey"}}>
            <li className="SideBarListItem">
              <FaMapMarkedAlt className='sidebarIcon'/>
              Places
            </li>
            </Link>

          <Link className='p-0' to={'/tickets'} style={{textDecoration:'none' ,color:"grey"}}>
            <li className="SideBarListItem">
              <ImTicket className='sidebarIcon'/>
              Tickets
            </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">

          <Link className='p-0' to={'/customers'} style={{textDecoration:'none' ,color:"grey"}}>
            <li className="SideBarListItem ">
              <HiUserGroup className='sidebarIcon'/>
              Customers
            </li>
            </Link>

          <Link className='p-0' to={'/places'} style={{textDecoration:'none' ,color:"grey"}}>
            <li className="SideBarListItem">
              <Store className='sidebarIcon'/>
              Sales
            </li>
            </Link>

            <li className="SideBarListItem">
              <Report className='sidebarIcon'/>
              Reports
            </li>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">

            <li className="SideBarListItem ">
              <Mail className='sidebarIcon'/>
              Mail
            </li>

            <li className="SideBarListItem">
              <DynamicFeed className='sidebarIcon'/>
              Feedback
            </li>

            <li className="SideBarListItem">
              <ChatBubble className='sidebarIcon'/>
              Messages
            </li>

          </ul>
        </div>
       
        
      </div>
    </div>
  )
}
