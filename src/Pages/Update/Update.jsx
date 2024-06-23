import { useNavigate, useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";
import { useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Update = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [projects] = useProjects();
  const uProject = projects.find((item) => item._id === id);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    const priority = e.target.priority.value;
    const updatedInfo = { title, description, deadline, priority };
    axiosPublic.put(`/projects/${id}`, updatedInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Task Updated Successfully");
        navigate("/dashboard/my-projects");
      }
    });
  };

  return (
    <div className="px-5">
      <h2 className="text-center text-4xl font-semibold mt-5 lg:mt-14">
        Update Task {uProject.title}
      </h2>
      <form onSubmit={handleUpdate} className="max-w-md mx-auto mt-8">
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
            defaultValue={uProject.title}
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
            rows="4"
            defaultValue={uProject.description}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-600"
          >
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-600"
          >
            Priority
          </label>

          <select
            className="mt-1 p-2 w-full border rounded-md"
            name="priority"
            defaultValue={uProject.priority}
          >
            <option value="" disabled>
              Select Priority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
