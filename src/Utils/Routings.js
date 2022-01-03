import { Routes, Route } from "react-router-dom";
import { Signin, Signup } from "../Pages";

const Routings = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default Routings;
