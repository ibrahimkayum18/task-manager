import { useContext, useEffect, useState } from "react";
import useProjects from "../../Hooks/useProjects";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import toast from "react-hot-toast";
import InviteMember from "../../Components/modals/InviteMember";

const Project = () => {
  const { user } = useContext(AuthContext);
  const [projects, refetch] = useProjects();
  const [myProjects, setMyProjects] = useState([]);
  const [todos, setTodos] = useState([]);
  const [ongoings, setOngoing] = useState([]);
  const [finished, setFinished] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (projects) {
      const onlyMyProjects = projects.filter(
        (project) => project.authorEmail == user.email
      );
      setMyProjects(onlyMyProjects);
    }
  }, [projects, user.email]);

  useEffect(() => {
    if (projects) {
      const isTodo = projects.filter((project) => project.process === "todo");
      setTodos(isTodo);
    }
  }, [projects]);
  console.log(todos);
  useEffect(() => {
    if (projects) {
      const isOngoings = projects.filter(
        (project) => project.process === "ongoing"
      );
      setOngoing(isOngoings);
    }
  }, [projects]);
  // console.log(ongoings);
  useEffect(() => {
    if (projects) {
      const isDone = projects.filter(
        (project) => project.process === "finished"
      );
      setFinished(isDone);
    }
  }, [projects]);
  // console.log(done);

  const handleTodoProcess = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to work in this task later?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Move!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/projects/todo/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "I am looking for you!",
              text: "You have moved this task into Todo list!",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleOngoingProcess = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to move this task to Ongoing process!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Move!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/projects/ongoing/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "Your Task Moved To Ongoing Process",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleFinishedProcess = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Check again if anything eft",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Finish task!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/projects/finished/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Congratulations!",
              text: "You have successfully completed this task",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/projects/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleUpdate = (e) => {
    const { id } = useParams();
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    const priority = e.target.priority.value;
    const updatedInfo = { title, description, deadline, priority };
    axiosPublic.put(`/projects/${id}`, updatedInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("Task Updated Successfully");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto py-8">
        <div className="flex space-x-4">
          {/* Board */}
          <div className="bg-white rounded shadow p-4 w-1/3">
            <h2 className="text-xl font-bold mb-4">To Do</h2>
            <div className="space-y-4">
              {/* Card */}
              {todos.map((todo, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-4 rounded shadow relative"
                >
                  <p>
                    <strong>{todo.title}</strong>
                  </p>
                  <p>Desdline: {todo.deadline}</p>
                  <div className="flex justify-between mt-3">
                    <FaArrowLeft
                      className="opacity-50"
                      // onClick={() => handleTodoProcess(todo._id)}
                    />
                    <FaArrowRight
                      onClick={() => handleOngoingProcess(todo._id)}
                    />
                  </div>
                  <div className="absolute top-3 right-3 text-xl">
                    <button
                      className="mr-3"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <RiEdit2Fill />
                    </button>
                    <button
                      className="text-xl font-bold"
                      onClick={() => handleDelete(todo._id)}
                    >
                      <MdDelete />
                    </button>
                    <button className="mr-3">
                      <InviteMember />
                    </button>
                  </div>

                  {/* Update Modal */}
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <form
                        onSubmit={handleUpdate}
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
                            defaultValue={todo.title}
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
                            defaultValue={todo.description}
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

                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </dialog>
                </div>
              ))}
            </div>
          </div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          {/* Board */}
          <div className="bg-white rounded shadow p-4 w-1/3">
            <h2 className="text-xl font-bold mb-4">In Progress</h2>
            <div className="space-y-4">
              {/* Card */}
              {ongoings.map((ongoing, index) => (
                <div key={index} className="bg-gray-200 p-4 rounded shadow">
                  <p>
                    <strong>{ongoing.title}</strong>
                  </p>
                  <p>Desdline: {ongoing.deadline}</p>
                  <div className="flex justify-between mt-3">
                    <FaArrowLeft
                      onClick={() => handleTodoProcess(ongoing._id)}
                    />
                    <FaArrowRight
                      onClick={() => handleFinishedProcess(ongoing._id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Board */}
          <div className="bg-white rounded shadow p-4 w-1/3">
            <h2 className="text-xl font-bold mb-4">Done</h2>
            <div className="space-y-4">
              {finished.map((finish, index) => (
                <div key={index} className="bg-gray-200 p-4 rounded shadow">
                  <p>
                    <strong>{finish.title}</strong>
                  </p>
                  <p>Desdline: {finish.deadline}</p>
                  <div className="flex justify-between mt-3">
                    <FaArrowLeft
                      onClick={() => handleOngoingProcess(finish._id)}
                    />
                    <FaArrowRight
                      onClick={() => handleTodoProcess(finish._id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Project;
