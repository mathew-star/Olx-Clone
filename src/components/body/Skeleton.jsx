const Skeleton = () => {
  return (
    <div className=" relative border border-slate-200 animate-pulse h-64 rounded">
      <div className="py-1 mt-3 bg-gray-400 h-40 m-5 "></div>
      <div className="px-6">
        <div className=" my-1"></div>
        <p className="bg-gray-500 h-4 mb-2 w-32"></p>
        <h2 className="mb-2 h-4 bg-gray-500 w-20"></h2>
      </div>
    </div>
  );
};

export default Skeleton;
