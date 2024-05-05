import { FaRegHeart } from "react-icons/fa";
import { ProductContext } from "../../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { calculateDate } from "../../utils/calculateDate";
const Cards = ({ product }) => {
  const navigate = useNavigate();
  const { setProductDetails } = useContext(ProductContext);
  return (
    <div
      className="relative border border-slate-200 rounded-md shadow-md cursor-pointer"
      onClick={() => {
        setProductDetails(product);
        navigate("/product_details");
      }}
    >
      <img
        className="py-1 mt-1 overflow-hidden h-40 object-contain w-full"
        src={product.imageUrl}
        alt={product.title}
        width={"100%"}
      />
      <div className="absolute top-5 right-6 bg-white rounded-3xl px-2 py-2">
        <FaRegHeart style={{ fontSize: "1.5rem" }} />
      </div>
      <div className="px-6 ">
        <div className="font-bold text-xl my-1">
          ₹ {product.price.toLocaleString()}
        </div>
        <p className="text-gray-700 text-base"></p>
        <h2 className="mb-2">{calculateDate(product.createdAt)}</h2>
      </div>
    </div>
  );
};

export default Cards;
