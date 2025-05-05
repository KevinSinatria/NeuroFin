import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Envelope, Eye, EyeSlash, LockKey, User } from "@phosphor-icons/react";
import { useNavigate } from "react-router";
import { login } from "../api/authApi";
import { showToast } from "../components/alerts/alerts";
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../api/baseApi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginValue, setLoginValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated, isAuthenticated, setUser } = useAuth();

  useEffect(() => {
    setIsAuthenticated(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await login(loginValue);
      showToast({ title: `${response.data.message}` });

      const user = await api.get("/me");
      setUser(user.data.data);
      setIsAuthenticated(true);
    } catch (err) {
      showToast({ title: err.message, icon: "error" });
    } finally {
      setIsLoading(false);
    }
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
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-full justify-center px-2"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <Envelope size={35} sm:size={45} weight="duotone" />
              <input
                type="email"
                placeholder="Email"
                value={loginValue.email || ""}
                onChange={(e) =>
                  setLoginValue({ ...loginValue, email: e.target.value })
                }
                className="w-full py-2 px-3 border-b-2 focus:border-b-blue-700 transition-all mb-6 sm:mb-8 focus:outline-none"
                required
              />
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <LockKey size={35} sm:size={45} weight="duotone" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={loginValue.password || ""}
                onChange={(e) =>
                  setLoginValue({ ...loginValue, password: e.target.value })
                }
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
            <button
              className="flex items-center justify-center rounded-lg py-1 sm:py-2 mb-4 sm:mb-6 bg-sky-500 font-medium active:scale-97 hover:bg-sky-600 transition-all duration-300 text-white"
              type="submit"
            >
              {!isLoading ? (
                "Masuk"
              ) : (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Memuat...
                </>
              )}
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
