import { CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authorizeUser } from "../../store/reducers/auth";

import "./style.css";

const Register = () => {
  const dispatch = useDispatch();

  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const args = {
      type: "register",
      user: data,
    };

    dispatch(authorizeUser(args));
  };

  const password = watch("password");
  const confirmPassword = watch("password_confirmation");

  const passwordMatch = password === confirmPassword;

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="register-form-wrapper">
      <div className={"register-form-container"}>
        <h2 className={"register-title"}>Register</h2>
        <div className={"register-form"}>
          {error && (
            <p className="error" role="alert">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="form-field">
                <label>First Name</label>
                <input
                  type={"text"}
                  {...register("first_name", {
                    required: "First Name is required",
                  })}
                  aria-invalid={errors.first_name ? "true" : "false"}
                />
                {errors.first_name && (
                  <p className="error" role="alert">
                    {errors.first_name?.message}
                  </p>
                )}
              </div>
              <div className="form-field">
                <label>Last Name</label>
                <input
                  type={"text"}
                  {...register("last_name")}
                  aria-invalid={errors.last_name ? "true" : "false"}
                />
                {errors.last_name && (
                  <p className="error" role="alert">
                    {errors.last_name?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="form-group">
              <div className="form-field">
                <label>Username</label>
                <input
                  type={"text"}
                  {...register("username", {
                    required: "Username is required",
                  })}
                  aria-invalid={errors.username ? "true" : "false"}
                />
                {errors.username && (
                  <p className="error" role="alert">
                    {errors.username?.message}
                  </p>
                )}
              </div>
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
            </div>

            <div className="form-group">
              <div className="form-field">
                <label>Password</label>
                <input
                  type={"password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="error" role="alert">
                    {errors.password?.message}
                  </p>
                )}
              </div>
              <div className="form-field">
                <label>Confirm Password</label>
                <input
                  type={"password"}
                  {...register("password_confirmation", {
                    required: "Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  aria-invalid={errors.password_confirmation ? "true" : "false"}
                />
                {errors.password_confirmation && (
                  <p className="error" role="alert">
                    {errors.password_confirmation?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="form-field form-button">
              {isLoading ? (
                <CircularProgress />
              ) : (
                <input
                  type="submit"
                  value={"Create"}
                  disabled={!passwordMatch}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
