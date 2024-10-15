import { IoIosCube } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="mt-2 flex justify-center items-center gap-48 p-5 uppercase text-white border-2 rounded-xl backdrop-blur-xl cursor-pointer">
      <p>vision ui free</p>
      <ul className="flex gap-10 ">
        <li className="flex items-center gap-2">
          <IoIosCube />
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="flex items-center gap-2">
          <FaUser />
          <p>Profile</p>
        </li>
        <li className="flex items-center gap-2">
          <FaRegUserCircle />
          <Link to="/">Sign Up</Link>
        </li>
        <li className="flex items-center gap-2">
          <IoKeySharp />
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
      <button className="bg-blue-500 px-10 py-3 rounded-xl">
        Free Download
      </button>
    </nav>
  );
};

export default NavBar;
