import { useContext } from "react";
import useProjects from "../../Hooks/useProjects";
import { AuthContext } from "../../Provider/AuthProvider";

const Projects = () => {
    const {user} = useContext(AuthContext)
    const [projects, refetch] = useProjects()
    const muProjects = projects.filter(project => project.email === user.email)
    console.log(muProjects);

  return (
    <div>
      <h2 className="text-4xl text-center my-3 font-semibold">My All Projects</h2>
      <div>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 bg-gray-100 rounded-lg">
                <h2 className="text-xl text-center">To Do</h2>
                <div className="divider"></div>
                <div>
                    {
                        muProjects.map(project => <div key={project._id} draggable className="bg-sky-200 p-5 rounded-lg mt-3">
                            <h2 className="text-xl">{project.title}</h2>
                            <p>{project.description}</p>
                            <p>{project.priority}</p>
                        </div>)
                    }
                </div>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg">
                <h2 className="text-xl text-center">Ongoing</h2>
                <div className="divider"></div>
                <div>
                    
                </div>
            </div>
            <div className="p-5 bg-gray-100 rounded-lg">
                <h2 className="text-xl text-center">Completed</h2>
                <div className="divider"></div>
                <div>
                    
                </div>
            </div>
        </div>
  {/* <table className="table">
    
    <thead>
      <tr>
        <th></th>
        <th>Task Title</th>
        <th>Task Description</th>
        <th>Details</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        muProjects.map((project, index) =><tr key={project._id}>
        <th>{index + 1}</th>
        <td>{project.title}</td>
        <td>{project.description}</td>
        <td><button>Details</button></td>
        <td><button>Delete</button></td>
      </tr> )
      }
      
    </tbody>
  </table> */}
</div>
      </div>
    </div>
  );
};

export default Projects;
