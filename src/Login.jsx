import React, { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://256-crypto-backend.vercel.app/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("username", userName);
        navigate("/profile");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log("error", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  const userNameLog = (e) => {
    setUsername(e.target.value);
  };
  const passwordLog = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="bg-black">
      <div className="h-screen flex justify-center items-center" id="d1">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full backdrop-blur-sm mt-14 bg-white/10 rounded-lg shadow-2xl  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-100 md:text-2xl ">
                Login your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-slate-200 "
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={userName}
                    onChange={userNameLog}
                    placeholder="username"
                    className="transparent bg-white/20 border border-gray-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-slate-200 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={passwordLog}
                    placeholder="••••••••"
                    className="transparent bg-white/20 border border-gray-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-slate-200 "
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-violet-800 hover:bg-violet-500 transition-all hover:scale-95 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Log in
                </button>
                <p className="text-sm font-light text-slate-100 ">
                  Dont have any account?{" "}
                  <Link
                    to={"/signup"}
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Signup here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
