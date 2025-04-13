import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router";
import { verify } from "../api/authApi";
import { showToast } from "../components/alerts/alerts";

const EmailVerify = () => {
  const [emailVerifyValue, setEmailVerifyValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  useEffect(() => {
    setEmailVerifyValue((prev) => ({
      ...prev,
      email: email,
    }));
  }, [email]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const emailVerifyHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await verify(emailVerifyValue);
      showToast({ title: `${response.message}` });

      navigate("/login");
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
        <div className="w-full sm:w-[90%] md:w-xl flex flex-col justify-center items-center px-2 sm:px-10 md:px-16 py-6 sm:py-8">
          <h1 className="font-semibold text-lg sm:text-xl text-blue-950">
            Verifikasi Email
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            Silakan masukkan kode verifikasi yang dikirim ke email Anda{" "}
            {location.state ? `(${email})` : ``}
          </p>
          <form className="mt-8" onSubmit={emailVerifyHandler}>
            <input
              type="text"
              placeholder="Kode Verifikasi Anda"
              value={emailVerifyValue.code || ""}
              onChange={(e) => {
                setEmailVerifyValue({
                  ...emailVerifyValue,
                  code: e.target.value,
                });
              }}
              className="w-full bg-gray-100 border mb-4 border-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
            />
            <button
              type="submit"
              className="flex items-center justify-center rounded-lg text-sm md:text-base w-full py-1 sm:py-2 mb-4 sm:mb-6 bg-sky-500 font-medium active:scale-97 hover:bg-sky-600 transition-all duration-300 text-white"
            >
              {!isLoading ? (
                "Konfirmasi"
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
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmailVerify;
