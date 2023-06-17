import React from "react";
import { IconMenu, IconSecurity, IconHome } from "assets/images/png";
import ChatUsers from './chat-users'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const sidebar = () => {

  const navigate = useNavigate()

  const [value, setValue] = useState('')

  return (
    <div className="sidebar">
      <div className="menu-box">
        <button className="menu-box__menu menu-box-icon" onClick={() => navigate('/')}>
          <img src={IconHome} alt="" />
        </button>
        <input 
          type="text" 
          placeholder="Search" 
          onChange={e=>setValue(e.target.value)} 
          className="menu-box-input" 
        />
        <button className="menu-box__security menu-box-icon">
          <img src={IconSecurity} alt="" />
        </button>
      </div>
        <ChatUsers value={value}/>
    </div>
  );
};

export default sidebar;
