import { Lock, SignOut } from "@phosphor-icons/react";
import React from "react";
import { logout } from "../../../api/authApi";
import { showToast } from "../../alerts/alerts";
import { useAuth } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router";

const Content = () => {
  const { setIsAuthenticated, setUser, user } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await logout();
      showToast({ title: `${response.data.message}` });

      setIsAuthenticated(false);
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout gagal:", err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center px-2 md:px-10 py-2 md:py-10 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
        Profil Akun
      </h2>

      {/* Info akun */}
      <section className="bg-white rounded-2xl shadow-md p-3 md:p-6 border mb-8 w-full transition hover:shadow-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-5 border-b pb-2">
          Informasi Akun
        </h3>
        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-10">
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="text-sm md:text-base font-medium text-gray-800">{user.username}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-sm md:text-base font-medium text-gray-800">{user.email}</p>
          </div>
        </div>
      </section>

      {/* Logout button */}
      <div className="flex justify-end w-full mt-10">
        <button
          onClick={logoutHandler}
          className="flex text-sm md:text-base items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow transition duration-200"
        >
          <SignOut className="rotate-180" size={18} />
          Keluar
        </button>
      </div>
    </div>
  );
};

export default Content;
