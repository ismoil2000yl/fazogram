import React from "react";
import { IconMenu, IconSecurity, IconHome } from "assets/images/png";
import ChatUsers from './chat-users'
import { useNavigate } from "react-router-dom";


const sidebar = () => {

  const navigate = useNavigate()

  return (
    <div className="sidebar">
      <div className="menu-box">
        <button className="menu-box__menu menu-box-icon" onClick={() => navigate('/')}>
          <img src={IconHome} alt="" />
        </button>
        <input type="text" placeholder="Search" className="menu-box-input" />
        <button className="menu-box__security menu-box-icon">
          <img src={IconSecurity} alt="" />
        </button>
      </div>
        <ChatUsers />
    </div>
  );
};

export default sidebar;
