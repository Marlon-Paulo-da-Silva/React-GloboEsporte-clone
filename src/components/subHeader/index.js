import React from "react";
import { FaBars } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

import "./styles.css";

export default function SubHeader() {
  return (
    <div className="sub-header">
      <div className="sub-header-item">
        <nav className="nav-icons-header">
          <FaBars size={22} />
          <h3>MENU</h3>
          <span></span>
          <FiShield size={26} />
          <h3>TIMES</h3>
        </nav>
      </div>
      <div className="sub-header-item">
        <h1>globoesporte.com</h1>
      </div>
      <div className="sub-header-item">
        <div className="input-sub-header">
          <input type="text" placeholder="BUSCAR" />
        </div>
      </div>
    </div>
  );
}
