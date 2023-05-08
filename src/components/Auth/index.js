import { Navigate } from "react-router-dom";
import Layout from "../Layout";

const Auth = () => {
  const token = localStorage.getItem("token");
  return !!token ? <Layout /> : <Navigate to={"/login"} />;
};

export default Auth;
