import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Envelope, Eye, EyeSlash, LockKey, User } from "@phosphor-icons/react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuth();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center my-32 md:my-0 px-6 sm:px-10 md:px-20 lg:py-3">
        <div className="w-full sm:w-[90%] md:w-xl flex flex-col justify-center items-center px-2 sm:px-10 md:px-16 py-6 sm:py-8 gap-3">
          <div className="flex flex-col items-center">
            <h1 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-5">
              Masuk
            </h1>
            <h1 className="text-base sm:text-lg font-medium mb-4 sm:mb-5">
              Selamat datang kembali di{" "}
              <span className="font-bold">
                Neuro<span className="text-sky-400">Fin</span>
              </span>
              !
            </h1>
          </div>
          <form action="" className="flex flex-col w-full justify-center px-2">
            <div className="flex items-center gap-4 sm:gap-6">
              <Envelope size={35} sm:size={45} weight="duotone" />
              <input
                type="email"
                placeholder="Email"
                className="w-full py-2 px-3 border-b-2 focus:border-b-blue-700 transition-all mb-6 sm:mb-8 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <LockKey size={35} sm:size={45} weight="duotone" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full py-2 px-3 border-b-2 focus:border-b-blue-700 transition-all mb-6 sm:mb-8 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                {showPassword ? <EyeSlash size={25} /> : <Eye size={25} />}
              </button>
            </div>
            <a
              href="#"
              className="text-end text-[10px] sm:text-xs mb-3 sm:mb-4 hover:underline font-semibold text-blue-700 md:hover:text-blue-800 transition-all duration-300"
            >
              Lupa Password?
            </a>
            <button
              className="rounded-lg py-1 sm:py-2 mb-4 sm:mb-6 bg-sky-500 font-medium active:scale-97 hover:bg-sky-600 transition-all duration-300 text-white"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Masuk
            </button>
            <p className="text-center text-xs sm:text-sm">
              Belum punya akun? Ayo{" "}
              <a
                href="/register"
                className="font-semibold text-blue-700 md:hover:text-blue-800 transition-all duration-300"
              >
                daftar
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
