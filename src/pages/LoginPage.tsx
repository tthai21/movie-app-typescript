import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "../utils/axios";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { userUpdateState } from "../redux-toolkit/userSlice";

import { favoriteListFetch } from "../redux-toolkit/favoriteList";

const schemaValidation = yup.object({
  email: yup
    .string()
    // .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .min(8, "Password must be 8 characters or more")
    .required("Please enter your password"),
});

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  interface DecodedToken {
    email: string; // Example claim from JWT payload
    userName: string; // Example claim from JWT payload
    exp: number; // Example claim from JWT payload
  }

  const submitHandler = async (values: { email: String; password: String }) => {
    const LOGIN_URL = "api/Auth/login";

    if (isValid) {
      try {
        const response = await axios.post(LOGIN_URL, values);
        const { token } = response.data;
        localStorage.setItem("token", token);
        const decodedToken: DecodedToken = jwtDecode(token);
        const { email } = decodedToken;
        dispatch(userUpdateState(email));
        const responseFavorite = await axios.get(
          `api/Favorite/fetchFavorites?email=${email}`
        );

        dispatch(favoriteListFetch(responseFavorite.data));
        navigate("/");
        return response.data;
      } catch (error: any) {
        console.log(error);
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="border border-primary rounded-lg p-10 block lg:w-[500px]  max-w-[500px] mx-auto my-10 text-xl mt-32"
    >
      <div className="flex items-center justify-center text-2xl font-bold text-white mb- 10">
        Login
      </div>

      {/* Email */}
      <div className="flex flex-col gap-3 mt-5 mb-5">
        <label htmlFor="email" className="text-white cursor-pointer ">
          Email
        </label>
        <input
          id="email"
          placeholder="Enter your email"
          className="px-2 py-1 rounded-lg outline-none"
          type="text"
          // {...emailController.field}
          {...register("email")}
        />
        {errors?.email && (
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
          // {...passwordController.field}
          {...register("password")}
          className="px-2 py-1 rounded-lg outline-none"
        />
        {errors?.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      {/* Button */}
      <button
        type="submit"
        className={`w-full p-5 text-white font-semibold mt-5 rounded-lg mb-5  bg-primary`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
        ) : (
          "Login"
        )}
      </button>
      <div className="w-full text-center text-white">
        <span>Don't have account? </span>
        <span className="underline hover:text-primary">
          <Link to="/sign-up">Sign Up</Link>
        </span>
      </div>
    </form>
  );
};

export default LoginPage;
