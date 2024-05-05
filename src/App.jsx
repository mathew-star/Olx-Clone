import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/context";
import { FirebaseContext } from "./context/context";
import { Header, Footer } from "./components/index";

const App = () => {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  console.log(firebase)
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
