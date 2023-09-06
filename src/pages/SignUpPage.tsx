import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../utils/axios";

const schemaValidation = yup.object({
  username: yup
    .string()
    .required("Please enter your username")
    .max(10, "User name must be less than 10 characters"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  gender: yup
    .string()
    .required("Please choose your gender")
    .oneOf(["male", "female"]),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .min(8, "Password must be 8 characters or more")
    .required("Please enter your password"),
  term: yup
    .boolean()
    .required("Please accept terms and conditions")
    .oneOf([true], "The terms and conditions must be accepted."),
});

const SignupPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  const onSubmitHandler = async (values: {
    username: String;
    email: String;
    password: String;
  }) => {
    const REGISTER_URL = "api/Auth/register";
    try {
      const response = await axios.post(
        REGISTER_URL,
        (values = {
          username: values.username,
          email: values.email,
          password: values.password,
        })
      );
      return response?.data;
    } catch (error: any) {
      console.error(error?.response?.data);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="border border-primary rounded-lg p-10 block lg:w-[500px]  max-w-[500px] mx-auto my-10 text-xl mt-32"
    >
      <div className="flex items-center justify-center text-2xl font-bold text-white mb- 10">
        Sign Up Now
      </div>
      {/* UserName */}
      <div className="flex flex-col gap-3 mt-10 mb-5">
        <label htmlFor="username" className="text-white cursor-pointer">
          Username
        </label>
        <input
          id="username"
          placeholder="Enter your username"
          type="text"
          className="px-2 py-1 rounded-lg outline-none"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="text-white cursor-pointer ">
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          className="px-2 py-1 rounded-lg outline-none"
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="text-white cursor-pointer ">
          Password
        </label>
        <input
          type="password"
          className="px-2 py-1 rounded-lg outline-none"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Gender */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="text-white cursor-pointer ">Gender</label>
        <div className="flex items-center gap-5 ">
          <input
            type="radio"
            value="male"
            id="male"
            defaultChecked={true}
            className="cursor-pointer "
            {...register("gender")}
          ></input>
          <label htmlFor="male" className="text-white cursor-pointer">
            Male
          </label>
          <input
            type="radio"
            id="female"
            value="female"
            className="cursor-pointer"
            {...register("gender")}
          ></input>
          <label htmlFor="female" className="text-white cursor-pointer">
            Female
          </label>
        </div>
      </div>
      {errors.gender && (
        <p className="text-sm text-red-500">{errors.gender.message}</p>
      )}

      {/* Terms and conditions */}
      <div className="w-full">
        <input
          type="checkbox"
          className="text-white "
          {...register("term")}
          defaultChecked={true}
        ></input>{" "}
        <span className="ml-3 text-white">
          I accept the terms and conditions
        </span>
      </div>
      {errors.term && (
        <p className="text-sm text-red-500">{errors.term.message}</p>
      )}

      {/* Button */}
      <button
        type="submit"
        className={`w-full p-5 text-white font-semibold mt-5 rounded-lg mb-5  bg-primary`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
      <div className="w-full text-center text-white">
        <span>Already have account? </span>
        <span className="underline hover:text-primary">
          <Link to="/login">Sign In</Link>
        </span>
      </div>
    </form>
  );
};

export default SignupPage;
