import Cards from "./Cards";
import { FirebaseContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import Toast from "../Toast";
const Body = () => {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((res) => {
        const allProducts = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allProducts);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Toast />
      <h1 className="text-2xl font-medium pl-5 my-5">Fresh Recommedation </h1>
      <div className="max-w-[1324px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-2 px-[25px] mb-10">
        {isLoading
          ? Array.from({ length: 8 })
              .fill("")
              .map((e, index) => {
                return <Skeleton key={index} />;
              })
          : products.map((product) => {
              return <Cards key={product.id} product={product} />;
            })}
      </div>
    </>
  );
};

export default Body;
