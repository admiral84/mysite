import React from "react";
import "./logo.scss";

export const Logo = () => {
  return (
    <div>
      <div className="logo">
        <a href="#intro">
          {" "}
          <svg
            id="logo"
            width="60"
            height="60"
            viewBox="0 0 70 70"
            xmlns="<http://www.w3.org/2000/svg>"
          >
            <title>logo</title>

            <g stroke="green" fill="none" transform="translate(5,5)">
              <path d="M20 45 l0 -30 l20 30 l0 -30" strokeWidth="2" id="n" />
              <polygon
                id="shape"
                stroke="green"
                strokeWidth="2"
                points="30,0 0,20 0 40 30 60 60 40 60 20 30 0 "
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
};
