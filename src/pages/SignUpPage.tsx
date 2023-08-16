import React from "react";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

const SignupPage: React.FC = () => {
  return (
    <form
      //   onSubmit={handleSubmit(onSubmitHandler)}
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
          name="username"
          id="username"
          placeholder="Enter your username"
          //   control={control}
          type="text"
          className="px-2 py-1 rounded-lg outline-none"
        />
        {/* {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )} */}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="text-white cursor-pointer ">
          Email
        </label>
        <input
          name="email"
          id="email"
          placeholder="Enter your email"
          className="px-2 py-1 rounded-lg outline-none"
          //   control={control}
          type="email"
        />
        {/* {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )} */}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="text-white cursor-pointer ">
          Password
        </label>

        <input type="password" className="px-2 py-1 rounded-lg outline-none" />
        {/* <InputPasswordToggle control={control}></InputPasswordToggle> */}
        {/* {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )} */}
      </div>

      {/* Gender */}
      <div className="flex flex-col gap-3 mb-5">
        <label className="text-white cursor-pointer ">Gender</label>
        <div className="flex items-center gap-5 ">
          <input
            type="radio"
            // control={control}
            name="gender"
            value="male"
            id="male"
            defaultChecked={true}
            className="cursor-pointer "
          ></input>
          <label htmlFor="male" className="text-white cursor-pointer">
            Male
          </label>
          <input
            type="radio"
            id="female"
            // control={control}
            name="gender"
            value="female"
            className="cursor-pointer"
          ></input>
          <label htmlFor="female" className="text-white cursor-pointer">
            Female
          </label>
        </div>
      </div>
      {/* {errors.gender && (
        <p className="text-sm text-red-500">{errors.gender.message}</p>
      )} */}

      {/* Dropdown */}

      {/* Terms and conditions */}
      <div className="w-full">
        <input
          //   control={control}
          //
          type="checkbox"
          name="term"
          className="text-white "
          //   value={false}
        ></input>{" "}
        <span className="ml-3 text-white">
          I accept the terms and conditions
        </span>
      </div>
      {/* {errors.term && (
        <p className="text-sm text-red-500">{errors.term.message}</p>
      )} */}

      {/* Button */}
      <button
        type="submit"
        className={`w-full p-5 text-white font-semibold mt-5 rounded-lg mb-5  bg-primary`}
        // disabled={isSubmitting}
      >
        {/* {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
        ) : (
          "Submit"
        )} */}
        Submit
      </button>
      <div className="w-full text-center text-white">
        <span>Already register? </span>
        <span className="underline">
          <Link to="/login">Sign In</Link>
        </span>
      </div>
    </form>
  );
};

export default SignupPage;
