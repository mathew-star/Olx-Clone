import { IoIosFlash } from "react-icons/io";
const Details = ({ title, price, description,reason,user }) => {
  return (
    <div className="mt-5 px-10">
      <div className="flex gap-10 max-md:flex-col ">
        <div className="w-full md:max-w-[65%] py-4 bg-white rounded-lg pl-4 flex flex-col justify-center px-24">
          <span className="px-2 w-24 h-8 text-xs uppercase py-0.5 rounded-sm bg-[#ffce32] font-semibold  flex items-center justify-around">
            <IoIosFlash />
            featured
          </span>
          <span className="text-4xl font-bold mt-2">{title}</span>
        </div>

        <div className="bg-white w-full md:max-w-[40%] rounded-lg p-4 mr-10 flex flex-col max-md:gap-3 justify-between box-border gap-2 items-center">
          <span className="text-5xl font-bold text-[#002f34]">
            ₹{price.toLocaleString()}
          </span>
          <button className="w-full max-w-48  bg-[#002f34] text-white py-2 rounded-md border-4 hover:bg-white border-[#002f34] text-base font-semibold hover:text-[#002f34] hover:font-bold">
            Make offer
          </button>
        </div>
      </div>

      <div className="Border-solid border-black">
        <p>{reason}</p>
      </div>

      <div className="mt-5 flex justify-between flex-col mb-10">
        <div className="w-full md:max-w-[55%] h-16 flex items-center text-2xl font-bold text-[#406367] bg-white rounded-t-lg pl-4 border-b-2 border[#d8dfe0]">
          <span>Seller</span>
        </div>
        <ul className="w-full md:max-w-[55%] bg-white rounded-b-lg pl-5 py-4 text-[#406367] text-base">
          <li>Name : {user?.userName}</li>
          <li>Phone : {user?.mobile}</li>
        </ul>
      </div>

      <div className="mt-5 flex justify-between flex-col mb-10">
        <div className="w-full md:max-w-[55%] h-16 flex items-center text-2xl font-bold text-[#406367] bg-white rounded-t-lg pl-4 border-b-2 border[#d8dfe0]">
          <span>Description</span>
        </div>
        <div className="w-full md:max-w-[55%] bg-white rounded-b-lg pl-5 py-4 text-[#406367] text-base">
          <ul>
            {description.split(" ").map((sentance) => (
              <li key={sentance}>{sentance}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
