  import React from "react";
  import ReactDOM from "react-dom/client";
  import { RouterProvider } from "react-router-dom";
  import "./index.css";
  import router from "./router";
  import firebase from "./fireBase/config";
  import Context, { FirebaseContext, Post } from "./context/context";


  ReactDOM.createRoot(document.getElementById("root")).render(
    <FirebaseContext.Provider value={{ firebase }}>
      <Context>
        <Post>
        <RouterProvider router={router} />
        </Post>
      </Context>
    </FirebaseContext.Provider>
  );
