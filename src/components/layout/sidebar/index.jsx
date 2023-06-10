import React from "react";
import { IconMenu, IconSecurity } from "assets/images/png";
import MenuActive from './menu-active'
import { useState } from "react";


const sidebar = () => {

  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className="sidebar">
      <div className="menu-box">
        <button className="menu-box__menu menu-box-icon" onClick={() => setMenuActive(!menuActive)}>
          <img src={IconMenu} alt="" />
        </button>
        <input type="text" placeholder="Search" className="menu-box-input" />
        <button className="menu-box__security menu-box-icon">
          <img src={IconSecurity} alt="" />
        </button>
      </div>
      <div className="menu-active-div">
        {
          menuActive ? <MenuActive /> : null
        }
      </div>
    </div>
  );
};

export default sidebar;
