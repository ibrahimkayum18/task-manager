import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const { login, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setEmail(email);

    login(email, password)
      .then((res) => {
        setUser(res.data);
        toast.success("Logged In Successfully");
        navigate(location?.state ? location.state : "/");

        if (user) {
          axiosPublic.post("/users", user).then((res) => {
            if (res.data.success) {
              navigate(location?.state ? location.state : "/");
            }
          });
        }
      })
      .catch((error) => console.log(error));
  };
  const havdleGoogleLogIn = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged In Successfully");
        navigate(location?.state ? location.state : "/");
        if (user) {
          axiosPublic.post("/users", user).then((res) => {
            if (res.data.success) {
              navigate(location?.state ? location.state : "/");
            }
          });
        }
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div data-aos="fade-up" className="flex items-center justify-center py-10">
      <div className="w-full  flex justify-center items-center">
        <div className="p-5 md:p-10 rounded-lg w-7/12 mx-auto bg-base-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center pb-8">
            Log In To MadeIT
          </h2>
          <form onSubmit={handleLogIn}>
            <div className="form-control ">
              <label>
                <span className="text-xl font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered my-2"
                placeholder="Type Email..."
              />
            </div>
            <div className="form-control">
              <label>
                <span className="text-xl font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered my-2"
                placeholder="Type Password..."
              />
            </div>
            <div className="my-5">
              <button
                type="submit"
                className="py-3 w-full bg-blue-700 text-white hover:bg-blue-500 rounded-lg"
              >
                Sign In
              </button>
            </div>
          </form>
          <p>
            new to MadeIT?{" "}
            <Link
              to={"/register"}
              className="text-blue-600 hover:underline font-bold"
            >
              Register
            </Link>
          </p>
          <div className="mt-2">
            <p className="text-center underline">Or Continue With</p>
            <div className="mt-5">
              <button onClick={havdleGoogleLogIn} className="w-full mx-auto ">
                <img
                  className="w-28 h-12 p-2 mx-auto rounded-lg border border-blue-700 "
                  src="https://i.ibb.co/dkKNbz2/download-2.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-3/4 lg:pr-14">
        <img
          className="w-full p-5"
          src="https://i.ibb.co/4Kxk1DV/download-3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
