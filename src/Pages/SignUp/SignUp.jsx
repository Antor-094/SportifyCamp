import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin.jsx/SocialLogin";

const img_hosting_token = import.meta.env.VITE_imgbb;

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData
     
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          createUser(data.email, data.password)
            .then((result) => {
              console.log(result.user);
              updateUserProfile(data.name, imgURL)
              .then(()=>{
                // console.log('user profile info updated')
                const saveUser = {name:data.name,email:data.email,photo:imgURL}
                fetch('http://localhost:5000/users',{
                  method:'POST',
                  headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(saveUser)
                })
                .then(res=>res.json())
                .then(data=>{
                  if(data.insertedId){
                    Swal.fire({
                      position:'top-end',
                      icon:'success',
                      title:'User Created successfully',
                      showConfirmButton:false,
                      timer:1500
                    })
                    navigate('/')
                  }
                })
               
              
              })
              .catch((err) => {
                console.log(err);
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const passwordMismatch = password !== confirmPassword;

  return (
    <div className="py-32 flex justify-center">
      <div className="form-container w-[90%] md:w-[30%]">
        <p className="title">Sign Up</p>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="input-groups">
            <label htmlFor="name">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              placeholder=""
            />
            {errors.name && (
              <span className="text-accent">This field is required</span>
            )}
          </div>
          <div className="input-groups">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder=""
            />
            {errors.email && (
              <span className="text-accent">This field is required</span>
            )}
          </div>

          <div className="input-groups ">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder=""
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span className="text-accent">This field is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-accent">Password must be 6 characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase, and one special character.
              </p>
            )}
          </div>
          <div className="input-groups">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input">
              <input
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder=""
              />
              <button
                type="button"
                className="password-toggle"
                onClick={toggleConfirmPasswordVisibility}
              >
                {confirmPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-accent">This field is required</span>
            )}
            {passwordMismatch && (
              <span className="text-accent">Passwords do not match</span>
            )}
          </div>
          <div className="input-groups">
            <label htmlFor="photo">Photo</label>
            <input
              {...register("photo", { required: true })}
              className="inpdddut"
              name="photo"
              id="photo"
              type="file"
            />
            {errors.photo && (
              <span className="text-accent">This field is required</span>
            )}
          </div>
          <div className="flex justify-center mt-5">
            <button className="login">Sign Up</button>
          </div>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Login with social accounts</p>
          <div className="line"></div>
        </div>
        
        <SocialLogin></SocialLogin>
        <p className="signup">
          Already have an account?
          <Link
            rel="noopener noreferrer"
            to={"/login"}
            className="link link-hover link-accent"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;