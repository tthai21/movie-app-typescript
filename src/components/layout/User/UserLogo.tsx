import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-toolkit/store";

const UserLogo: React.FC = () => {
  const user: any = useSelector((state: RootState) => state.user.user);

  return (
    <div className="w-full mx-auto mt-10 text-center">
      {user ? (
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          alt="user-logo"
          className="rounded-full w-[70%] mx-auto mb-3"
        />
      ) : null}
      <h2>{user}</h2>
    </div>
  );
};

export default UserLogo;
