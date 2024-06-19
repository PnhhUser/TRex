import { NavLink } from "react-router-dom";
import { MdClass, MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

export default function Navbar() {
  return (
    <ul>
      <li className="h-14 w-full flex justify-center lg:justify-start lg:ps-2 items-center">
        <NavLink to="/" className="flex items-end ">
          <MdSpaceDashboard className="text-[#EEEEEE]" fontSize={30} />
          <p className="text-[#EEEEEE] ps-2 hidden lg:block text-sm">
            Dashboard
          </p>
        </NavLink>
      </li>
      <li className="h-14 w-full flex justify-center lg:justify-start lg:ps-2 items-center ">
        <NavLink to="/users" className="flex items-end">
          <FaUsers className="text-[#EEEEEE]" fontSize={30} />
          <p className="text-[#EEEEEE] ps-2 hidden lg:block text-sm"> Users </p>
        </NavLink>
      </li>
      <li className="h-14 w-full flex justify-center lg:justify-start lg:ps-2 items-center ">
        <NavLink to="/categories" className="flex items-end">
          <MdClass className="text-[#EEEEEE]" fontSize={30} />
          <p className="text-[#EEEEEE] ps-2 hidden lg:block text-sm">
            Categories
          </p>
        </NavLink>
      </li>
      <li className="h-14 w-full flex justify-center lg:justify-start lg:ps-2 items-center ">
        <NavLink to="/users" className="flex items-end">
          <AiFillProduct className="text-[#EEEEEE]" fontSize={30} />
          <p className="text-[#EEEEEE] ps-2 hidden lg:block text-sm">
            Products
          </p>
        </NavLink>
      </li>
    </ul>
  );
}
