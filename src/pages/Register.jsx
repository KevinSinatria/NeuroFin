import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Envelope,
  Eye,
  EyeSlash,
  Lock,
  LockKey,
  User,
} from "@phosphor-icons/react";
import Footer from "../components/Footer";
import { register } from "../api/authApi";
import { showToast } from "../components/alerts/alerts";
import { useNavigate } from "react-router";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerValue, setRegisterValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleConfirmPassword = (e) => {
    if (e.target.value !== password) {
      setError("Password tidak cocok!");
    } else {
      setError("");
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await register(registerValue);
      showToast({ title: `${response.data.message}` });

      navigate("/emailverify", {
        state: { email: registerValue.email },
      });
    } catch (err) {
      showToast({ title: err.message, icon: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center my-16 md:my-0 px-6 sm:px-10 md:px-20 md:py-2">
        <div className="w-full sm:w-[90%] md:w-xl flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 py-6 sm:py-8 gap-3">
          <div className="flex flex-col items-center">
            <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">
              Daftar
            </h1>
            <h1 className="text-base sm:text-lg font-medium mb-4 sm:mb-5">
              Selamat datang di{" "}
              <span className="font-bold">
                Neuro<span className="text-sky-400">Fin</span>
              </span>
              !
            </h1>
          </div>
          <form
            id="formRegister"
            className="flex flex-col w-full justify-center px-2"
            onSubmit={registerHandler}
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <User size={35} sm:size={45} weight="duotone" />
              <input
                type="text"
                placeholder="Username"
                className="w-full py-2 px-3 border-b-2 focus:border-b-blue-700 transition-all mb-4 sm:mb-6 focus:outline-none"
                value={registerValue.username || ""}
                onChange={(e) => {
                  setRegisterValue({
                    ...registerValue,
                    username: e.target.value,
                  });
                }}
                required
              />
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <Envelope size={35} sm:size={45} weight="duotone" />
              <input
                type="email"
                placeholder="Email"
                className="w-full py-2 px-3 border-b-2 focus:border-b-blue-700 transition-all mb-4 sm:mb-6 focus:outline-none"
                value={registerValue.email || ""}
                onChange={(e) => {
                  setRegisterValue({ ...registerValue, email: e.target.value });
                }}
                required
              />
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <LockKey size={35} sm:size={45} weight="duotone" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={async (e) => {
                  const newPassword = e.target.value;
                  setPassword(newPassword);
                  setRegisterValue({ ...registerValue, password: newPassword });
                }}
                className="w-full py-2 px-3 border-b-2 focus:border-b-blue-700 transition-all mb-4 sm:mb-6 focus:outline-none"
                minLength="8"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus-visible:outline"
              >
                {showPassword ? <EyeSlash size={25} /> : <Eye size={25} />}
              </button>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              {error ? (
                <Lock
                  size={35}
                  sm:size={45}
                  weight="duotone"
                  color="red"
                  className="animate-bounce"
                />
              ) : (
                <Lock size={35} sm:size={45} weight="duotone" />
              )}

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Konfirmasi Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handleConfirmPassword}
                className={`w-full py-2 px-3 ${
                  !error ? "border-b-2" : "border-b-2 border-red-600"
                } focus:border-b-blue-700 transition-all mb-4 sm:mb-5 focus:outline-none`}
                minLength="8"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="focus-visible:outline"
              >
                {showConfirmPassword ? (
                  <EyeSlash size={25} />
                ) : (
                  <Eye size={25} />
                )}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="flex items-center gap-4 my-4 sm:gap-6">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label
                htmlFor="terms"
                className="text-[10px] sm:text-xs text-gray-700"
              >
                Dengan mendaftar, saya menyatakan telah membaca dan menyetujui{" "}
                {""}
                <a
                  href="/termsandconditions"
                  className="text-blue-600 hover:underline"
                >
                  Syarat & Ketentuan dari NeuroFin.
                </a>
              </label>
            </div>
            <button
              disabled={error !== ""}
              className="rounded-lg flex items-center justify-center py-2 sm:py-3 mb-4 sm:mb-6 bg-sky-500 font-semibold hover:bg-sky-600 transition-all duration-300 text-white"
              type="submit"
            >
              {!isLoading ? (
                "Daftar"
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
              Sudah punya akun?{" "}
              <a
                href="/login"
                className="font-semibold text-blue-700 md:hover:text-blue-800 transition-all duration-300"
              >
                Masuk sekarang
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
