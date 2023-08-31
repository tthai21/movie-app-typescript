import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userUpdateState } from "../redux-toolkit/userSlice";
import { useNavigate } from "react-router-dom";

const LogoutPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
  });
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(userUpdateState(null));
    navigate("/");
  };

  return <div></div>;
};

export default LogoutPage;
