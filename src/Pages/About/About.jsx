const About = () => {
  return (
    <div  data-aos="fade-up">
      <div
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: "url(https://i.ibb.co/LCTfnnY/images.png)" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto flex items-center justify-center h-full relative">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to our Task Management Platform
            </h2>
            <p className="text-lg">
              Empowering you to manage tasks efficiently and collaboratively.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 mb-8 text-xl">
            We are a dedicated team passionate about providing a modern and
            efficient task management experience.
          </p>
          <div className=" lg:flex justify-center items-center gap-6 w-3/4 mx-auto">
            <img
             data-aos="flip-right"
              src="https://i.ibb.co/tJpCGxX/images-5.jpg" // Replace with your actual team image link
              alt="Team Image"
              className="w-full max-w-lg h-auto object-cover mb-4 rounded-lg shadow-md"
            />
            <div className="text-left"  data-aos="fade-up">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-gray-600">
                Our task management platform is designed to streamline your
                workflow, allowing you to organize tasks. Whether you're a
                student, developer, designer, banker, or teacher, our solution
                adapts to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
