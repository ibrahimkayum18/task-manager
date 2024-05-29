import { useState } from "react";

const InviteMember = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <button
        onClick={toggleModal}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
      >
        Invite Workspace Members Now
      </button>

      {isModalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Invite Members by Email
            </h2>
            <p className="mb-4">This is the modal content.</p>
            <button
              onClick={toggleModal}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InviteMember;
