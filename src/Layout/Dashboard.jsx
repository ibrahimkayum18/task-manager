import { Link, Outlet } from "react-router-dom";
import { FaHome, FaPhone, FaPlus, FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { RiMenu2Line } from "react-icons/ri";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { control, handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    axiosPublic.post("/projects", data).then((res) => {
      if (res.data.insertedId) {
        toast.success("Task Addeded Successfully");
      }
    });
  };

  const navlinks = (
    <>
      <li>
        <Link to={"/dashboard/projects"}>
          <GrProjects />
          Projects
        </Link>
      </li>
      <li>
        <Link to={"/dashboard/my-projects"}>
          <GrProjects />
          My Projects
        </Link>
      </li>
      <div className="divider"></div>
      <div className="flex items-center gap-3 p-2 rounded-full bg-white">
      <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="" />
      <p className="">{user.displayName}</p>
      </div>
      
      <li>
        <Link to={"/"}>
          <FaHome />
          Home
        </Link>
      </li>
      <li>
        <Link to={"/contact"}>
          <FaPhone />
          Contact
        </Link>
      </li>
      
      <li>
        <button onClick={() => logOut()}>
          <FaUser />
          Log Out
        </button>
      </li>
    </>
  );

  return (
    <div className="lg:flex gap-5" >
      <div className="drawer lg:drawer-open w-64 lg:w-80"  data-aos="fade-up">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-blue-700 text-white ml-[385px] md:ml-0 md:mr-44 mt-2 drawer-button lg:hidden"
          >
            <RiMenu2Line />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-center">
            <h2 className="text-4xl">Task Manager</h2>
            <li
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <button className="flex justify-left items-center py-2 mt-5 rounded-lg ">
                <span>
                  <FaPlus />
                </span>
                Create Project
              </button>
            </li>
            {navlinks}
          </ul>
        </div>
      </div>

      <div className="w-full"  data-aos="fade-up">
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Create New Project</p>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto mt-8"
              >
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    {...register("title")}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="deadline"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Deadline
                  </label>
                  <input
                    type="deadline"
                    id="deadline"
                    name="deadline"
                    {...register("deadline")}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    {...register("description")}
                    rows="4"
                    className="mt-1 p-2 w-full border rounded-md"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="priority"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Priority
                  </label>
                  <Controller
                    name="priority"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <select
                        {...field}
                        className="mt-1 p-2 w-full border rounded-md"
                      >
                        <option value="" disabled>
                          Select Priority
                        </option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    )}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
