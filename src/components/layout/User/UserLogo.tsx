import React from "react";

const UserLogo: React.FC = () => {
  return (
    <div className="w-full mx-auto mt-10 text-center">
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        alt="user-logo"
        className="rounded-full w-[70%] mx-auto mb-3"
      />
      <h2>Alex</h2>
    </div>
  );
};

export default UserLogo;
