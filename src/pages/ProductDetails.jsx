import { FirebaseContext, ProductContext } from "../context/context";
import { useContext, useEffect, useState } from "react";
import { ImageSlide, Details } from "../components/index";
const ProductDetails = () => {
  const { firebase } = useContext(FirebaseContext);
  const { productDetails } = useContext(ProductContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", productDetails.userId)
      .get()
      .then((res) => {
        setUserDetails(res.docs[0].data()); //User detail , only one user will get in the res , so no need for forEach
      });
  }, []);
  return (
    <div className="w-full flex items-center flex-col pt-20 bg-[#f2f4f5] pb-10">
      <ImageSlide imageUrl={productDetails.imageUrl} />
      <Details {...productDetails} user={userDetails} />
    </div>
  );
};

export default ProductDetails;
