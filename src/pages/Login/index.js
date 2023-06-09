import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { authorizeUser, setError } from "../../store/reducers/auth";

import "./style.css";
const Login = () => {
  const dispatch = useDispatch();

  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(setError(""));
    // eslint-disable-next-line
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const args = {
      type: "login",
      user: data,
    };

    dispatch(authorizeUser(args));
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login-form-wrapper">
      <div className={"login-form-container"}>
        <h2 className={"login-title"}>Login To Continue</h2>
        <div className={"login-form"}>
          {error && (
            <p className="error" role="alert">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
              <label>Email</label>
              <input
                type={"email"}
                {...register("email", { required: "Email is required" })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="error" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-field">
              <label>Password</label>
              <input
                type={"password"}
                {...register("password", { required: "Password is required" })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="error" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <div className="form-field form-button">
              {isLoading ? (
                <CircularProgress />
              ) : (
                <input type="submit" value={"Login"} />
              )}
            </div>

            <div className="login-footer-text">
              <p>
                Don't have an account?{" "}
                <Link className="link" to="/register">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
