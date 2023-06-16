import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../Shared/SocialLogin.jsx/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome, ${result.user.displayName}!`,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="py-32 flex justify-center">
      <div className="form-container w-[90%] md:w-[30%]">
        <p className="title">Login</p>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="input-groups">
            <label htmlFor="username">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="username"
              placeholder=""
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="input-groups">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                {...register("password", { required: true })}
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder=""
              />
              {errors.password && <span>This field is required</span>}
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <button className="login"> Login</button>
          </div>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Login with social accounts</p>
          <div className="line"></div>
        </div>
        <SocialLogin></SocialLogin>
        <p className="signup">
          Do not have an account?
          <Link
            rel="noopener noreferrer"
            to={"/signup"}
            className="link link-hover link-accent"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
