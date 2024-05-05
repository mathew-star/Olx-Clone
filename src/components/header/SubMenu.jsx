import { FaAngleDown } from "react-icons/fa6";
import { subMenu } from "../../constants/constants";

const SubMenu = () => {
  return (
    <div className="mt-16  p-3 flex max-sm:flex-col  justify-center shadow-md">
      <div className="flex items-center ml-2">
        <h1 className="pr-1">All Categories</h1>
        <FaAngleDown style={{ marginTop: "2px" }} />
      </div>
      <ul className="ml-2 flex gap-3 max-sm:flex-col max-sm:gap-1 *:text-md cursor-pointer ">
        {subMenu.map((item, index) => {
          return (
            <li className="hover:text-cyan-500" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubMenu;
