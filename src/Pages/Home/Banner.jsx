// import { TypeAnimation } from "react-type-animation";
// import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      data-aos="flip-right"
      style={{
        backgroundImage: "url(https://i.ibb.co/mH9LCV0/Untitled-design.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      className="h-screen w-full"
    >
      <div className="bg-[rgba(0,0,0,0.2)] w-full  h-full flex  items-center">
        <div className="text-left px-5 md:px-20">
          <h2 className="text-4xl md:text-3xl lg:text-7xl font-bold text-white">
            <span className="text-[#FF3611]">MADEIT</span>-BOARD <br></br>{" "}
            ENHANCEMENT
          </h2>
          <div className="my-3">
            <p className="text-white w-3/4 lg:w-1/2 text-xl">
              Stay organized and boost productivity with our powerful task
              management solution. Effortlessly manage your tasks, set
              priorities, and achieve your goals.
            </p>
          </div>
          <div>
            <Link to={"/dashboard/projects"}>
              <button className="btn btn-primary">LET'S EXPLORE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
