import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userUpdateState } from "../redux-toolkit/userSlice";
import { useNavigate } from "react-router-dom";
import {
  favoriteListFetch,
} from "../redux-toolkit/favoriteList";

const LogoutPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
  });
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(userUpdateState(null));
    dispatch(favoriteListFetch([]));
    navigate("/");
  };

  return <div></div>;
};

export default LogoutPage;
