import useProjects from "../../Hooks/useProjects";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, refetch] = useProjects();
  const axiosPublic = useAxiosPublic();

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

  return (
    <div>
      <h2 className="text-4xl text-center my-3 font-semibold">
        My All Projects
      </h2>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Task Title</th>
              <th>Task Description</th>
              <th>Deadline</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project._id}>
                <th>{index + 1}</th>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.deadline}</td>
                <td>
                  <Link to={`/update/${project._id}`}>
                  <button
                    className="text-xl font-bold"
                  >
                    <RiEdit2Fill />
                  </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="text-xl font-bold"
                    onClick={() => handleDelete(project._id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Projects;
