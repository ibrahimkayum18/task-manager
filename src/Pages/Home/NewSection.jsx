const NewSection = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Trello Clone</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8">
        <div className="flex space-x-4">
          {/* Board */}
          <div className="bg-white rounded shadow p-4 w-1/3">
            <h2 className="text-xl font-bold mb-4">To Do</h2>
            <div className="space-y-4">
              {/* Card */}
              <div className="bg-gray-200 p-4 rounded shadow">
                <p>Task 1</p>
              </div>
              <div className="bg-gray-200 p-4 rounded shadow">
                <p>Task 2</p>
              </div>
            </div>
          </div>

          {/* Board */}
          <div className="bg-white rounded shadow p-4 w-1/3">
            <h2 className="text-xl font-bold mb-4">In Progress</h2>
            <div className="space-y-4">
              {/* Card */}
              <div className="bg-gray-200 p-4 rounded shadow">
                <p>Task 3</p>
              </div>
            </div>
          </div>

          {/* Board */}
          <div className="bg-white rounded shadow p-4 w-1/3">
            <h2 className="text-xl font-bold mb-4">Done</h2>
            <div className="space-y-4">
              {/* Card */}
              <div className="bg-gray-200 p-4 rounded shadow">
                <p>Task 4</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewSection;
