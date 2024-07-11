const Boards = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Boards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
          <div className="h-28 flex items-center bg-gray-200 p-5 rounded-lg">
            <h2 className="text-xl font-semibold">Create Template +</h2>
          </div>
          <div className="h-28 w-full flex items-center bg-gray-200 rounded-lg relative">
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/Jx1nG8h/pexels-donald-tong-189296.jpg"
              alt=""
            />
            <div className="absolute h-full w-full rounded-lg bg-black opacity-30"></div>
            <p className="absolute top-3 left-5 font-bold text-white">New</p>
          </div>
          <div className="h-28 w-full flex items-center bg-gray-200 rounded-lg relative">
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/SnjMrnS/download-5.png"
              alt=""
            />
            <div className="absolute h-full w-full rounded-lg bg-black opacity-30"></div>
            <p className="absolute top-3 left-5 font-bold text-white">Blue</p>
          </div>
          <div className="h-28 w-full flex items-center bg-gray-200 rounded-lg relative">
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/jV3xVPq/download-6.png"
              alt=""
            />
            <div className="absolute h-full w-full rounded-lg bg-black opacity-30"></div>
            <p className="absolute top-3 left-5 font-bold text-white">
              Sky mix
            </p>
          </div>
          <div className="h-28 w-full flex items-center bg-gray-200 rounded-lg relative">
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/Yj60wtq/download-7.png"
              alt=""
            />
            <div className="absolute h-full w-full rounded-lg bg-black opacity-30"></div>
            <p className="absolute top-3 left-5 font-bold text-white">
              Black dot
            </p>
          </div>
          <div className="h-28 w-full flex items-center bg-gray-200 rounded-lg relative">
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/phGSFhz/download-8.png"
              alt=""
            />
            <div className="absolute h-full w-full rounded-lg bg-black opacity-30"></div>
            <p className="absolute top-3 left-5 font-bold text-white">
              Navy blue
            </p>
          </div>
          <div className="h-28 w-full flex items-center bg-gray-200 rounded-lg relative">
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/BP8zTHw/download-9.png"
              alt=""
            />
            <div className="absolute h-full w-full rounded-lg bg-black opacity-30"></div>
            <p className="absolute top-3 left-5 font-bold text-white">Stone</p>
          </div>
          <div className="h-28 w-full flex items-center bg-gray-200 rounded-lg relative">
            <img
              className="h-full w-full rounded-lg"
              src="https://i.ibb.co/gZzkn8W/download-10.png"
              alt=""
            />
            <div className="absolute h-full w-full rounded-lg bg-black opacity-30"></div>
            <p className="absolute top-3 left-5 font-bold text-white">Sky</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boards;
