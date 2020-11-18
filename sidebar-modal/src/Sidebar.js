import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

import {AppContext, useGlobalContext} from './context';

const Sidebar = () => {
  const {isSidebarOpen,closeSidebar} = useGlobalContext(AppContext);
  return <aside className={`sidebar ${isSidebarOpen?'show-sidebar':''}`}>
    <div className="sidebar-header">
      <img src={logo} className="logo" alt="" />
      <button className="close-btn" onClick={closeSidebar}>
        <FaTimes/>
      </button>
    </div>
    <ul className="links">
      {links.map((link)=>{
        const {id,url, text,icon} =link;
        return (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        )
      })}
    </ul>
    <ul className="social-icons">
      {social.map((link)=>{
        const {id,url,icon}=link;
        return <li key={id}>
          <a href={url} target="_blank">
            {icon}
          </a>
        </li>
      })}
    </ul>
  </aside>
}

export default Sidebar