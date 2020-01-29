import React from "react";

import "./styles.css";

export default function NavTop() {
  return (
    <>
      <div className="nav-header">
        <nav className="nav-left">
          <ul>
            <li>
              <a
                className="nav-left-item"
                style={{ color: "#005CEF" }}
                href=" "
              >
                globo.com
              </a>
            </li>
            <span></span>
            <li>
              <a
                className="nav-left-item"
                style={{ color: "#A80000" }}
                href=" "
              >
                g1
              </a>
            </li>
            <span></span>
            <li>
              <a
                className="nav-left-item"
                style={{ color: "#48892A" }}
                href=" "
              >
                globoesporte
              </a>
            </li>
            <span></span>
            <li>
              <a
                className="nav-left-item"
                style={{ color: "#FF7F00" }}
                href=" "
              >
                gshow
              </a>
            </li>
            <span></span>
            <li>
              <a
                className="nav-left-item"
                style={{ color: "#005CEF" }}
                href=" "
              >
                videos
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-right">
          <ul>
            <li>
              <a className="nav-right-item" href=" ">
                Assine já
              </a>
            </li>
            <li>
              <a className="nav-right-item" href=" ">
                minha conta
              </a>
            </li>
            <li>
              <a className="nav-right-item" href=" ">
                e-mail
              </a>
            </li>
            <li>
              <a className="nav-right-item" href=" ">
                <button>Entrar</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
