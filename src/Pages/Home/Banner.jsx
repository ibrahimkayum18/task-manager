import { TypeAnimation } from "react-type-animation";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = ({ input }) => {

  console.log(input);
  return (
    <div
    data-aos="flip-right"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/p0RZVjt/15-Best-Task-Management-Software-For-Teams-In-2022.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
      className="h-screen w-full"
    >
      <div className="bg-[rgba(0,0,0,0.6)] w-full  h-full flex  items-center">
        <div className="text-left px-5 md:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
            Task <span className="text-[#FF3611]">Manager</span>
          </h2>
          <div className="my-2">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "We Provide On Site Jobs",
                1000,
                "We Provide Remote Jobs",
                1000,
                "We Provide Hybrid Jobs",
                1000,
                "We Provide Part-time Jobs",
                1000,
              ]}
              speed={50}
              // style={{ fontSize: "2em", color:'white', textAlign:'left'}}
              repeat={Infinity}
              className="text-2xl lg:text-5xl font-bold text-left text-white"
            />
          </div>
              <div>
                <Link to={'/dashboard/projects'}>
                <button className="btn btn-primary">Let's Explore</button>
                </Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;