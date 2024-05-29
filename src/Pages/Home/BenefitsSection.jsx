const BenefitsSection = () => {
  const benefitsData = [
    {
      category: "Students",
      description:
        "Stay organized with your assignments, projects, and deadlines.",
      image:
        "https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=sph",
    },
    {
      category: "Developers",
      description:
        "Efficiently manage your coding tasks and project timelines.",
      image: "https://i.ibb.co/BZ63D1Y/download.jpg", // Replace with actual image link
    },
    {
      category: "Web Designers",
      description:
        "Keep track of design projects and collaborate seamlessly with your team.",
      image: "https://i.ibb.co/mbfPj0m/download-1.jpg", // Replace with actual image link
    },
    {
      category: "Bankers",
      description:
        "Organize your financial tasks, meetings, and deadlines in one place.",
      image: "https://i.ibb.co/hLCStYQ/download-2.jpg", // Replace with actual image link
    },
    {
      category: "Teachers",
      description:
        "Streamline lesson planning, grading, and classroom organization.",
      image: "https://i.ibb.co/84DkNSq/download-3.jpg", // Replace with actual image link
    },
  ];

  return (
    <div className="bg-gray-100 py-16" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Who Benefits Most?
        </h2>
        <p className="text-gray-600 mb-8">
          Discover how our task management website can enhance productivity for
          different professionals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md mx-5 lg:mx-0"
              data-aos="flip-right"
            >
              <img
                src={benefit.image}
                alt={`${benefit.category} Image`}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2">{benefit.category}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
