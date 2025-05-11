<<<<<<< HEAD
import React from "react";
import NeoLogoDark from "../assets/icon/NeoLogoHDdark.png";
import {
  DeviceMobile,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer
      className="bg-[#0D263B] mt-10"
      style={{ boxShadow: "-1px -3px 24px 0px rgba(66, 68, 90, 1)" }}
    >
      <div className="flex flex-col gap-10 px-4 md:px-16 lg:px-24 py-12 lg:py-20">
        <div className="flex @max-xs:px-12 @max-xs:py-8 flex-col lg:flex-row gap-20 justify-between">
          <div className="flex flex-col gap-6 flex-1">
            <figure>
              <a href="#">
                <img src={NeoLogoDark} alt="img" className="max-w-[240px]" />
              </a>
            </figure>
            <p className="text-sm text-white">
              NeuroFin adalah platform pencatatan keuangan yang membantu
              generasi muda dan siapa saja mencatat pengeluaran serta membangun
              kebiasaan finansial sehat secara bertahap untuk mengelola keuangan
              dengan lebih bijak.
            </p>
            <div className="flex gap-4 pr-10">
              <a
                href=""
                className="p-1 bg-slate-700 rounded-full hover:scale-115 hover:bg-slate-600 transition-all"
              >
                <InstagramLogo size={30} color="white" />
              </a>
              <a
                href=""
                className="p-1 bg-slate-700 rounded-full hover:scale-115 hover:bg-slate-600 transition-all"
              >
                <YoutubeLogo size={30} color="white" weight="fill" />
              </a>
              <a
                href=""
                className="p-1 bg-slate-700 rounded-full hover:scale-115 hover:bg-slate-600 transition-all"
              >
                <XLogo size={30} color="white" />
              </a>
              <a
                href=""
                className="p-1 bg-slate-700 rounded-full hover:scale-115 hover:bg-slate-600 transition-all"
              >
                <FacebookLogo size={30} color="white" />
              </a>
            </div>
          </div>
          <div className="flex-1 px-8">
            <h2 className="text-xl text-white font-semibold mb-12">
              Navigasi Cepat
            </h2>
            <ul className="flex flex-col text-sm gap-4 list-none">
              <li className="text-white hover:underline">
                <a href="/#">Beranda</a>
              </li>
              <li className="text-white hover:underline">
                <a href="#finTest">Cek Keuangan</a>
              </li>
              <li className="text-white hover:underline">
                <a href="#aboutUs">Tentang Kami</a>
              </li>
              <li className="text-white hover:underline">
                <a href="#howToUse">Cara Penggunaan</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <h2 className="text-xl text-white font-semibold mb-12">
              Kontak Kami
            </h2>
            <ul className="flex flex-col text-sm gap-4 list-none">
              <li className="flex gap-2 text-white hover:underline">
                <Envelope size={24} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=neurofin14@gmail.com&su=Bantuan%20NeuroFin&body=Halo%20tim%20NeuroFin,"
                  target="_blank"
                >
                  neurofin14@gmail.com
                </a>
              </li>
              <li className="flex gap-2 text-white hover:underline">
                <DeviceMobile size={24} />
                <a href="https://wa.me/6281339872645" target="_blank">
                  +62 813-3987-2645
                </a>
              </li>
              <li className="flex gap-2 text-white hover:underline">
                <MapPin size={24} />
                <a
                  href="https://www.google.com/maps/place/Kabupaten+Bandung,+Jawa+Barat/@-7.0626751,107.2614789,10z/data=!3m1!4b1!4m6!3m5!1s0x2e68eeb88c17d7b1:0x301e8f1fc28b8e0!8m2!3d-7.1340702!4d107.6215321!16zL20vMDdqeDNw?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  Kab. Bandung, Indonesia.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-white" />
        <div className="flex text-xs justify-between">
          <p className="text-white">
            © Hak Cipta NeuroFin 2025. Seluruh Hak Dilindungi.
          </p>
          <p className="text-white">
            <a href="/termsandconditions" className="hover:underline">
              Syarat & Ketentuan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
import React from "react";
import NeoLogoDark from "../assets/icon/NeoLogoHDdark.png";
import {
  DeviceMobile,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer
      className="bg-[#0D263B] mt-10"
      style={{ boxShadow: "-1px -3px 24px 0px rgba(66, 68, 90, 1)" }}
    >
      <div className="flex flex-col gap-10 px-4 md:px-16 lg:px-24 py-12 lg:py-20">
        <div className="flex @max-xs:px-12 @max-xs:py-8 flex-col lg:flex-row gap-20 justify-between">
          <div className="flex flex-col gap-6 flex-1">
            <figure>
              <a href="#">
                <img src={NeoLogoDark} alt="img" className="max-w-[240px]" />
              </a>
            </figure>
            <p className="text-sm text-white">
              NeuroFin adalah platform pencatatan keuangan yang membantu
              generasi muda dan siapa saja mencatat pengeluaran serta membangun
              kebiasaan finansial sehat secara bertahap untuk mengelola keuangan
              dengan lebih bijak.
            </p>
            <div className="flex gap-4 pr-10">
              <a
                href=""
                className="p-1 bg-slate-700 rounded-full hover:scale-115 hover:bg-slate-600 transition-all"
              >
                <InstagramLogo size={30} color="white" />
              </a>
              <a
                href=""
                className="p-1 bg-slate-700 rounded-full hover:scale-115 hover:bg-slate-600 transition-all"
              >
                <YoutubeLogo size={30} color="white" weight="fill" />
              </a>
              <a
                href=""
                className="p-1 bg-slate-700 rounded-full hover:scale-115 hover:bg-slate-600 transition-all"
              >
                <XLogo size={30} color="white" />
              </a>
              <a
                href=""
                className="p-1 bg-slate-700 rounded-full hover:scale-115 hover:bg-slate-600 transition-all"
              >
                <FacebookLogo size={30} color="white" />
              </a>
            </div>
          </div>
          <div className="flex-1 px-8">
            <h2 className="text-xl text-white font-semibold mb-12">
              Navigasi Cepat
            </h2>
            <ul className="flex flex-col text-sm gap-4 list-none">
              <li className="text-white hover:underline">
                <a href="/#">Beranda</a>
              </li>
              <li className="text-white hover:underline">
                <a href="#finTest">Cek Keuangan</a>
              </li>
              <li className="text-white hover:underline">
                <a href="#aboutUs">Tentang Kami</a>
              </li>
              <li className="text-white hover:underline">
                <a href="#howToUse">Cara Penggunaan</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-8">
            <h2 className="text-xl text-white font-semibold mb-12">
              Kontak Kami
            </h2>
            <ul className="flex flex-col text-sm gap-4 list-none">
              <li className="flex gap-2 text-white hover:underline">
                <Envelope size={24} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=neurofin14@gmail.com&su=Bantuan%20NeuroFin&body=Halo%20tim%20NeuroFin,"
                  target="_blank"
                >
                  neurofin14@gmail.com
                </a>
              </li>
              <li className="flex gap-2 text-white hover:underline">
                <DeviceMobile size={24} />
                <a href="https://wa.me/6281339872645" target="_blank">
                  +62 813-3987-2645
                </a>
              </li>
              <li className="flex gap-2 text-white hover:underline">
                <MapPin size={24} />
                <a
                  href="https://www.google.com/maps/place/Kabupaten+Bandung,+Jawa+Barat/@-7.0626751,107.2614789,10z/data=!3m1!4b1!4m6!3m5!1s0x2e68eeb88c17d7b1:0x301e8f1fc28b8e0!8m2!3d-7.1340702!4d107.6215321!16zL20vMDdqeDNw?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  Kab. Bandung, Indonesia.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-white" />
        <div className="flex text-xs justify-between">
          <p className="text-white">
            © Hak Cipta NeuroFin 2025. Seluruh Hak Dilindungi.
          </p>
          <p className="text-white">
            <a href="/termsandconditions" className="hover:underline">
              Syarat & Ketentuan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> 77455b3b90678c57d60f997c39d264eee681d72b
