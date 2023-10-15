import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSite = () => {
  return (
    <div className="pl-4">
      <div className="mb-10">
      <h2 className="font-bold text-xl mb-4">Login with</h2>
        <div className="flex border mb-2 rounded justify-center p-2 items-center gap-2 ">
          <p className="text-red-400">
            <FaGoogle />
          </p>
          <p>Login with google</p>
        </div>
        <div className="flex border rounded justify-center p-2 items-center gap-2 ">
          <p>
            <FaGithub />
          </p>
          <p>Login with google</p>
        </div>
      </div>
    </div>
  );
};

export default RightSite;
