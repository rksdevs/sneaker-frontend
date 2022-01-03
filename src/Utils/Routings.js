import { Routes, Route } from "react-router-dom";
import { Signin, Register } from "../Pages";

const Routings = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default Routings;
