import InviteMember from "../../Components/modals/InviteMember";

const Members = () => {
  return (
    <div>
      <div className="min-h-24 flex justify-between items-center my-10 px-20">
        <div className="flex items-center gap-7 ">
          <h2 className="h-28 w-28 rounded-xl bg-blue-600 text-white flex justify-center items-center text-5xl">
            MT
          </h2>
          <div>
            <h2>MadeIT Workspace</h2>
          </div>
        </div>
        <div>
          <InviteMember />
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-1 bg-gray-200">
          <h2>Collaboration 2/5</h2>
          <h2>Workshop Members(2)</h2>
          <p>Guest(0)</p>
          <hr />
          <p>Join Request(0)</p>
        </div>
        <div className="col-span-3">
          <ul className="list-none">
            <li className="py-2 border-b border-gray-200">
              <div className="flex items-center">
                <img className="w-8 h-8 rounded-full mr-2" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium"></span>
                  <span className="text-xs text-gray-500">@</span>
                </div>
                <span className="ml-auto">View boards </span>
              </div>
              <button className="text-red-500 hover:text-red-700 ml-auto">
                Leave Workspace
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Members;
