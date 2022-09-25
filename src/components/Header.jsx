import React from "react";
function Header() {
    return (
      <div>
        <header>
          <nav className="nav">
            <img src={require("../react.png")} alt="react-images" />
            <h3>React Facts</h3>
            <h4 >React Course - Project 1</h4>
          
          </nav>
        </header>
      </div>
  
    )
  };

  export default Header;