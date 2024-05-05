import Logo from "./Logo";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../context/context";
import { useContext, useState } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  let navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    navigate("/login");
  };
  return (
    <nav className="bg-slate-50 h-16 shadow-md border-2 border-white fixed w-full top-0 z-[999] ">
      <div className="flex justify-between items-center ">
        <div className="flex flex-1 ml-12 mt-2">
          <Logo />
          <div className="flex bg-white items-center p-2 mx-3  max-sm:hidden rounded-md border-2  border-black">
            <input
              className="w-52 focus:outline-none"
              type="text"
              placeholder="India"
            />
            <FaAngleDown />
          </div>
          <input
            className="max-sm:hidden  w-2/4 min-w-0 py-2 px-4 border-2 border-r-0 border-black rounded-md rounded-r-none focus:outline-none"
            type="text"
            placeholder="Search something"
          />
          <button className="max-sm:hidden bg-[#002f34] px-3 rounded-md rounded-l-none">
            <FaSearch style={{ fontSize: "1.5rem", color: "white" }} />
          </button>
        </div>
        <div className="flex gap-2 mr-10 mt-2 max-lg:ml-5 xl:-ml-40 ">
          <div className="flex items-center ">
            <p className="pr-2 lg:pl-4 font-semibold text-black hover:text-opacity-[.8] cursor-pointer">
              ENGLISH
            </p>
            <FaAngleDown />
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative inline-block text-left">
              {user ? (
                <div
                  className="flex flex-col group"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  <span className="cursor-pointer text-md font-semibold">
                    {user.displayName}
                  </span>

                  {isDropdownOpen && (
                    <div className="rounded-md absolute mt-6 mr-4 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="text-lg font-semibold underline hover:no-underline"
                >
                  Login
                </Link>
              )}
            </div>
            <button
              className="px-4 py-1 border-[6px] font-semibold border-t-[#23E5DB] border-r-[#3A77FF]
             border-l-[#FFCE32] border-b-[#3A77FF] divide-y-2 rounded-3xl shadow-xl inline-flex gap-1 items-center"
              onClick={() => navigate("/sell_product")}
            >
              <FaPlus /> Sell
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
