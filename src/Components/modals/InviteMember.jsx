import { useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";

const InviteMember = () => {
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInviteMember = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setTimeout(() => {
      setMessage(`Invitation sent to ${email} successfully`);
    }, 2000);
    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleModal}
        className=" text-xl ml-3 focus:outline-none"
      >
        <IoMdPersonAdd />
      </button>

      {isModalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white  rounded-lg shadow-lg">
            <div className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg">
              {/* Invite Member Text */}
              <div className="mb-6 max-w-2xl">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Invite New Member
                </h2>
                <p className="text-lg text-gray-700">
                  Invite your team members to join the project and collaborate
                  together. Enter their email address below to send an
                  invitation.
                </p>
              </div>

              {/* Email Input and Invite Button */}
              <form onSubmit={handleInviteMember}>
                <div className="flex flex-col md:flex-row items-center w-full max-w-md">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    className="w-full md:w-3/4 text-black p-3 border border-gray-300 rounded-lg mb-4 md:mb-0 md:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="w-full md:w-1/4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                    Invite
                  </button>
                </div>
              </form>
              {message.length > 5 && (
                <p className="text-green-500">{message}</p>
              )}
              <button
                onClick={toggleModal}
                className="px-4 py-2 mt-5 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InviteMember;
