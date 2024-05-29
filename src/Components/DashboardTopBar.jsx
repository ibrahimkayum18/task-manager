import { useContext } from "react";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";
import WorkspaceTop from "../Hooks/WorkspaceTop";

const DashboardTopBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="lg:flex items-center justify-between px-5 py-3 border-b border-black">
      <div className="flex gap-5 items-center">
        <div className="text-3xl font-bold ">
          Made<span className="text-yellow-500">IT</span>
        </div>
        <ul className="flex justify-center items-center gap-7">
          <li className="flex items-center gap-1">
            <WorkspaceTop />
            <IoIosArrowDown />
          </li>
          <li className="flex items-center gap-1">
            Recent
            <IoIosArrowDown />
          </li>
          <li className="flex items-center gap-1">
            Template
            <IoIosArrowDown />
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
              </label>
            </div>
          </li>
          <li className="text-2xl">
            <IoIosNotifications />
          </li>
          <li className="text-2xl">
            <MdInfo />
          </li>
          <li className="text-2xl">
            <div className="flex items-center gap-3 p-2 rounded-full bg-white">
              <img
                src={user.photoURL}
                className="w-10 h-10 rounded-full"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardTopBar;
