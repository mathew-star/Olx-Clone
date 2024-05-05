import { useFormik } from "formik";
import { useState, useContext } from "react";
import { FirebaseContext, AuthContext } from "../context/context";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [img, setImg] = useState(null);
  const date = new Date();
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      images: [],
    },
    onSubmit: async ({ title, price, description, reason, images }) => {
      const uploadImagesToStorage = async () => {
        const uploadPromises = images.map(async (img) => {
          const storageRef = firebase.storage().ref(`/image/${img.name}`);
          await storageRef.put(img);
          return storageRef.getDownloadURL();
        });
        return Promise.all(uploadPromises);
      };
  
      const addProductToFirestore = async (imageUrls) => {
        await firebase.firestore().collection("products").add({
          title: title,
          price: price,
          description: description,
          reason:reason,
          imageUrl: imageUrls,
          userId: user.uid,
          createdAt: new Date().toDateString(), // Corrected date format
        });
      };
  
      try {
        const imageUrls = await uploadImagesToStorage();
        await addProductToFirestore(imageUrls);
        navigate("/");
      } catch (error) {
        console.log("Error:", error);
      }
    },
  });

  
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#eff1f3] ">
      <form
        className="w-[50%] h-[70vh]  flex flex-col justify-center items-center rounded-lg bg-white gap-5"
        encType="multipart/form-data"
        onSubmit={formik.handleSubmit}
      >
        <input
          className="w-[90%] p-3  outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-2 focus:ring-[#001f24] transition duration-300"
          type="text"
          name="title"
          placeholder="Name"
          onChange={formik.handleChange}
        />

        <input
          className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-2 focus:ring-[#001f24] transition duration-300"
          type="number"
          name="price"
          placeholder="Price"
          onChange={formik.handleChange}
        />

        <textarea
          className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-2 focus:ring-[#001f24] transition duration-300"
          type="text"
          name="description"
          placeholder="Description"
          onChange={formik.handleChange}
        />

        <input onChange={formik.handleChange}  type="text" name= "reason"  placeholder="reason for selling" className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-2 focus:ring-[#001f24] transition duration-300" />

        <input
          type="file"
          className="w-[90%] p-3 outline-none rounded-lg border-2 border-[#002f34] ring-2 ring-transparent focus:ring-2 focus:ring-[#001f24] transition duration-300"
          name="images"
          onChange={(e) => {
            const files = e.target.files;
            let myFiles = Array.from(files);
            formik.setFieldValue("images", myFiles);

          }}
          multiple
        />

        

        <button
          className="bg-[#002f34] w-[90%] p-3 rounded-lg capitalize border-4
            border-transparent hover:border-[#002f34] hover:bg-white
            hover:text-[#002f34] text-white relative "
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
