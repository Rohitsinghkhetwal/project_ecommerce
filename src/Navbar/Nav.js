import React from "react";
import Logo from "../Assets/websitelogo.png";
import { Link } from "react-router-dom";
import {BiCartAlt} from "react-icons/bi";
import { useStore}  from "../Store/Store";

const Nav = () => {
  const {cart} = useStore();
  console.log(cart);
  return (
    <>
      <nav className="flex justify-between items-center px-3  ">
        <div className="w-10 my-3">
          <img src={Logo} alt="error" />
        </div>
        <div className=" ">
          <ul className="flex pl-1.5">
            <li className="px-4"> <Link to="/home">HOME</Link></li>
         
            <li className="px-4"> <Link to="/journey">THE JOURNEY</Link></li>
          
            <li className="px-4"> <Link to="/team">TEAM</Link></li>
          
            <li className="px-4"> <Link to="/store">STORE</Link></li>
         
            <li className="px-4"> <Link to="/contact">CONTACT</Link></li>
          </ul>
          
        </div>
       
        <div className="flex flex-row px-3 mx-2 justify-center items-center ">
         
          <div className="px-5 w-3 flex">
          <span><BiCartAlt/></span>
          <span>{cart?.length}</span>

        </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
