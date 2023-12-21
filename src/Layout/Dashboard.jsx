import { Link, Outlet } from "react-router-dom";
import { FaHome, FaPhone, FaPlus, FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { RiMenu2Line } from "react-icons/ri";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const priority = form.priority.value;
    const email = user.email;
    const name = user.displayName;

    const projectsInfo = {
      title,
      description,
      priority,
      email,
      name,
    };

    axiosPublic.post("/projects", projectsInfo)
    .then((res) => {
      if(res.data.insertedId){
        toast.success('Task Addeded Successfully')
        form.reset(' ')
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
        <Link to={"/dashboard/new-projects"}>
          <GrProjects />
          My Projects
        </Link>
      </li>
      <div className="divider"></div>
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
    <div className="lg:flex gap-5">
      <div className="drawer lg:drawer-open w-64 lg:w-80">
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

      <div className="w-full">
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Create New Project</p>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="block">Task Title</label>
                  <input
                    type="text"
                    name="title"
                    className="input input-bordered w-full my-3"
                    placeholder="Task title..."
                  />
                </div>
                <div>
                  <label className="block">Task Description</label>
                  <input
                    type="text"
                    name="description"
                    className="input input-bordered w-full my-3"
                    placeholder="Task description..."
                  />
                </div>
                <div>
                  <label>Task Priority</label>
                  <select
                    name="priority"
                    className="input input-bordered w-full my-3"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div>
                  <button className="btn btn-primary w-full" type="submit">
                    Submit
                  </button>
                </div>
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