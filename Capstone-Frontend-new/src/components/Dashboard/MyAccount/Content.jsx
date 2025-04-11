import { Lock, SignOut } from "@phosphor-icons/react";
import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-10 py-10 w-full max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Profil Akun
      </h2>

      {/* Info akun */}
      <section className="bg-white rounded-2xl shadow-md p-6 border mb-8 w-full transition hover:shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-5 border-b pb-2">
          Informasi Akun
        </h3>
        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-10">
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="font-medium text-gray-800">kevin_rpl10</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">kevin@example.com</p>
          </div>
        </div>
      </section>

      {/* Ganti password */}
      <section className="bg-white rounded-2xl shadow-md p-6 border w-full transition hover:shadow-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-5 flex items-center gap-2">
          <Lock size={20} /> Ganti Password
        </h3>
        <form className="grid gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password Saat Ini
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password Baru
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition duration-200 shadow-sm"
          >
            Update Password
          </button>
        </form>
      </section>

      {/* Logout button */}
      <div className="flex justify-end w-full mt-10">
        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow transition duration-200">
          <SignOut className="rotate-180" size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Content;
