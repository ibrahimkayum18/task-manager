const WhyChooseUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center p-8 ">
        {/* Left Side */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Why It Is Beneficial</h2>
          <p className="text-lg text-gray-700">
            Our project management tool "MadeIT" is designed to streamline your
            workflow and enhance team collaboration. It combines the best
            features of popular tools like Trello and Microsoft Project to offer
            a comprehensive solution for managing tasks, tracking progress, and
            achieving your goals efficiently.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-4 flex justify-center">
          <img
            src="https://i.ibb.co/9YzdjCx/Forward-with-Made-IT.png"
            alt="Beneficial Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center p-8 bg-blue-50">
        {/* Motivation Text */}
        <div className="mb-6 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-blue-800">
            Unlock Your Team's Potential
          </h2>
          <p className="text-lg text-gray-700">
            Our project management tools empower your team to collaborate
            effectively, stay organized, and achieve your goals faster. Whether
            you're managing a small project or a large-scale operation, our
            tools provide the flexibility and functionality you need to succeed.
          </p>
        </div>

        {/* Call to Action Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Start Your Project
        </button>
      </div>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/YbYF1Sk/business-team-using-tablet-working-table-financial-documents-office.jpg')",
        }}
      >
        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Centered Container */}
        <div className="relative flex items-center justify-center h-full">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Welcome to MadeIT
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              MadeIT is your ultimate project management tool designed to
              enhance collaboration, streamline workflows, and drive success.
              Whether you're managing a small team or a large enterprise, MadeIT
              provides the features and flexibility you need to keep your
              projects on track and your team aligned.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
