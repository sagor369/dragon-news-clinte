import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="text-center pt-20 pb-4">
        <img className="mx-auto" src={logo} alt="" />
        <p>
          <small> Journalism Without Fear or Favour </small>
        </p>
        <p>{moment().format("MMM D YYYY")}</p>
      </div>
      <div className="flex gap-4 bg-gray-100 p-4">
        <button className="btn btn-secondary">Button</button>
        <Marquee pauseOnHover={true} speed={80}>
          <p className="font-bold text-neutral-700">
            my name is sahed ul islam saghor santo{" "}
          </p>
        </Marquee>
      </div>
      <div className="grid grid-cols-2 items-center mt-6">
        <div >
          <nav className="float-right flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Career</Link>
          </nav>
        </div>
        <div>
          <nav className="flex gap-4 float-right items-center">
            <FaUser className="h-10 w-10 rounded-full border-black border pt-2 " />
            <Link to='/login' className="btn">Login</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
