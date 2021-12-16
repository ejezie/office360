import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mlogo.png";

function Navbar({handleBar, rotateBar}) {
  const [scrolled, setScrolled] = useState(false);

 window.addEventListener("scroll", ()=>{
     if(window.scrollY > 100){
         setScrolled(true)
     }
     if(window.scrollY < 100){
         setScrolled(false)
     }
 })

  const select1 = useRef(null);
  const select2 = useRef(null);
  const select3 = useRef(null);

  const handleLinkClick1 = () => {
    const div1 = select1.current;
    const div2 = select2.current;
    const div3 = select3.current;
    div1.className = "select";
    div2.className = "";
    div3.className = "";
  };
  const handleLinkClick2 = () => {
    const div1 = select1.current;
    const div2 = select2.current;
    const div3 = select3.current;
    div1.className = "";
    div2.className = "select";
    div3.className = "";
  };
  const handleLinkClick3 = () => {
    const div1 = select1.current;
    const div2 = select2.current;
    const div3 = select3.current;
    div1.className = "";
    div2.className = "";
    div3.className = "select";
  };

  return (
    <div className={`navbar ${scrolled && "fixed"}`}>
      <div className={`wrap`}>
        <div className="menu" onClick={handleBar}>
          <div className={`bar ${rotateBar && "one"}`}></div>
          <div className={`bar ${rotateBar && "two"}`}></div>
          {rotateBar && "close"}
        </div>
        <img className="logo" src={logo} alt="logo" />
        <div className="links">
          <Link onClick={handleLinkClick1} to={"/"}>
            Home <div ref={select1} className="select"></div>
          </Link>
          <Link onClick={handleLinkClick2} to={"/"}>
            Office Space <div ref={select2} className=""></div>
          </Link>
          <Link onClick={handleLinkClick3} to={"/"}>
            About <div ref={select3} className=""></div>
          </Link>
        </div>
        <a className="call" href="tel:08142074224">
          <i class="fas fa-headset"></i>
        </a>
      </div>
      <div className={`drawer ${rotateBar && "show"}`}>
        <div className="links">
          <Link onClick={handleBar} to={"/"}>Home</Link>
          <Link onClick={handleBar} to={"/"}>Office Spaces</Link>
          <Link onClick={handleBar} to={"/"}>About</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
