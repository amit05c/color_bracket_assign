import React from "react";
import Home from "./Home";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import ReqAuth from "../ReqAuth/ReqAuth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Home />
          </ReqAuth>
        }
      />
      <Route
        path="/recipe/:_id"
        element={
          <ReqAuth>
            <Recipe />
          </ReqAuth>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
