import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passHandle = (e) => {
    setPassword(e.target.value);
  };
  const nameHandle = (e) => {
    setName(e.target.value);
  };
  const usernameHandle = (e) => {
    setuserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://256-crypto-backend.vercel.app/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            name,
            userName,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("signup successfull");
      } else {
        console.log("signup Failed", data.message);
      }
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return (
    <div className="bg-black">
      <div className="h-screen flex justify-center items-center" id="d1">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full backdrop-blur-sm bg-white/10 rounded-lg shadow-2xl  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-100 md:text-2xl ">
                Sign up
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-slate-200 "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    value={name}
                    onChange={nameHandle}
                    className="transparent bg-white/20 border border-gray-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-slate-200 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={emailHandle}
                    className="transparent bg-white/20 border border-gray-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required
                  />
                </div>
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
                    onChange={usernameHandle}
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
                    onChange={passHandle}
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
                      I accept the{" "}
                      <a
                        className="font-medium text-slate-100 hover:underline "
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-violet-800 hover:bg-violet-500 transition-all hover:scale-95 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-slate-100 ">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Login here
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

export default Signup;
