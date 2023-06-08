import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  // TODO: password validation
  const { signIn } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .then((err) => {
        console.log(err);
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
        <div className="my-8 flex justify-center">
          <button className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
            Continue with Google
          </button>
        </div>
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