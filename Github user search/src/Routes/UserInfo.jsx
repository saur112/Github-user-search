import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/Logo"

const UserInfo = () => {
  const [user, setUser] = useState([]);
  const [type, setType] = useState("repos");

  let EndPoint = "https://api.github.com/users";
  const { pathname } = useLocation();
  const navigate = useNavigate();

  async function GetUserInfo() {
    const res = await fetch(EndPoint + pathname);
    const data = await res.json();
    setUser(() => [data]);
  }



  useEffect(() => {
    GetUserInfo();

  }, [pathname]);

  return (
    <>
   
    <div className="py-5">
      <button
        onClick={() => navigate("/")}
        className="px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text-gray-200"
      >
        BACK
      </button>
      {user &&
        user.map((uinfo, i) => (
          <div
            key={i}
            className="flex justify-center md:flex-row
             md:px-0 px-4 flex-col gap-10"
          >
            <img
              src={uinfo.avatar_url}
              className="w-[350px] border-4 border-teal-400 md:mx-0 mx-auto"
            />
            <div className="text-lg leading-10 px-3">
              <h1 className="text-3xl pb-4 text-gray-200">{uinfo.name}</h1>
              <h1>
                <span className="text-teal-400">Login_name</span> :<span className="text-gray-200">{uinfo.login}</span>
              </h1>
              <h1>
                <span className="text-teal-400">followers : </span>
                <span className="text-gray-200">{uinfo.followers}</span>
              </h1>
              <h1>
                <span className="text-teal-400">following : </span>
                <span className="text-gray-200">{uinfo.following}</span>
              </h1>
              <h1>
                <span className="text-teal-400">public_repositories : </span>
                <span className="text-gray-200">{uinfo.public_repos}</span>
              </h1>
              <h1>
                <span className="text-teal-400">Join : </span>
                <span className="text-gray-200">{new Date(uinfo.created_at).toLocaleDateString()}</span>
              </h1>
              <a
                href={uinfo.html_url}
                target="_blank"
                className="text-gray-200 
                  font-semibold rounded cursor-pointer  px-4 py-1 bg-teal-600 my-3 tracking-wide"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
       
    </div>
    </>
  );
};

export default UserInfo