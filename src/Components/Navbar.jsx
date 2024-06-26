import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <>
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
        <Link to="/">
          <img
            src={Logo}
            alt="StudyNotion"
            width={160}
            height={32}
            loading="lazy"
          />
        </Link>
        <ul className="text-richblack-25 flex gap-x-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-x-4 text-richblack-100 ">
          {!isLoggedIn && 
            <Link to="/login">
              <button
                className="bg-richblack-800 py-[8px]
                    px-[12px] rounded-[8px] border border-richblack-700  focus:bg-richblack-900 focus:text-slate-100 "
              >
                Log in
              </button>
            </Link>
          }

          {!isLoggedIn && 
            <Link to="/signup">
              <button
                className="bg-richblack-800 py-[8px]
                    px-[12px] rounded-[8px] border border-richblack-700 focus:bg-richblack-900 focus:text-slate-100 "
              >
                Sign up
              </button>
            </Link>
          }

          {isLoggedIn && 
            <Link to="/">
              <button
                className="bg-richblack-800 py-[8px]
            px-[12px] rounded-[8px] border border-richblack-700 "
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out Successfully");
                }}
              >
                Log Out
              </button>
            </Link>
          }

          {isLoggedIn && 
            <Link to="/dashboard">
              <button
                className="bg-richblack-800 text-white py-[8px]
                    px-[12px] rounded-[8px] border border-richblack-700 "
              >
                Dashboard
              </button>
            </Link>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
