import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "../components/Navbar";
import { CheckCircle, Rewind, Warning } from "@phosphor-icons/react";
import { NavLink } from "react-router";
import Footer from "../components/Footer";

const questions = [
  {
    question:
      "Berapa persen dari uang saku/gaji yang kamu tabung setiap bulan?",
    options: ["<10%", "10-20%", "20-30%", ">30%"],
    correct: 3,
    correctMessage:
      "Luar biasa! Kamu memiliki kebiasaan menabung yang sangat baik, ini akan membantu finansialmu di masa depan.",
    inCorrectMessage:
      "Cobalah meningkatkan jumlah tabunganmu, idealnya lebih dari 30% uang saku/gaji agar memiliki keamanan finansial yang lebih baik.",
  },
  {
    question: "Apakah kamu memiliki dana darurat yang mencukupi?",
    options: [
      "Tidak ada",
      "Kurang dari 1 bulan pengeluaran",
      "3 bulan pengeluaran",
      "6 bulan pengeluaran atau lebih",
    ],
    correct: 3,
    correctMessage:
      "Hebat! Dana darurat yang cukup akan memberikan keamanan dalam situasi tak terduga.",
    inCorrectMessage:
      "Usahakan untuk menabung lebih banyak hingga memiliki dana darurat minimal 6 bulan pengeluaran untuk keadaan darurat.",
  },
  {
    question: "Seberapa sering kamu mencatat pengeluaran?",
    options: ["Tidak pernah", "Kadang-kadang", "Sering", "Selalu"],
    correct: 3,
    correctMessage:
      "Bagus! Mencatat pengeluaran membantumu mengelola keuangan dengan lebih baik.",
    inCorrectMessage:
      "Cobalah mencatat pengeluaran lebih sering agar lebih sadar dengan pola pengeluaranmu.",
  },
  {
    question: "Bagaimana cara kamu mengatur utang/paylater?",
    options: [
      "Tidak punya utang",
      "Membayar cicilan tepat waktu",
      "Sering telat bayar",
      "Terjebak utang berlebihan",
    ],
    correct: 0,
    correctMessage:
      "Sangat baik! Bebas utang memberi fleksibilitas finansial yang lebih tinggi.",
    inCorrectMessage:
      "Jika memiliki utang, usahakan untuk selalu membayar tepat waktu dan menghindari utang berlebihan.",
  },
  {
    question: "Apakah kamu memiliki investasi jangka panjang?",
    options: [
      "Tidak punya",
      "Punya sedikit",
      "Punya cukup",
      "Punya banyak dan beragam",
    ],
    correct: 3,
    correctMessage:
      "Keren! Investasi yang beragam membantu mengurangi risiko dan meningkatkan peluang keuntungan.",
    inCorrectMessage:
      "Mulailah berinvestasi untuk menyiapkan masa depan finansial yang lebih baik.",
  },
  {
    question: "Seberapa sering kamu membeli barang berdasarkan keinginan sesaat (impulsif)?",
    options: ["Sering", "Kadang-kadang", "Jarang", "Hampir tidak pernah"],
    correct: 3,
    correctMessage:
      "Disiplin yang luar biasa! Mengontrol belanja impulsif membantu menghemat lebih banyak uang.",
    inCorrectMessage:
      "Cobalah untuk lebih bijak dalam berbelanja dan hindari keputusan impulsif agar keuangan lebih sehat.",
  },
  {
    question: "Apakah kamu memiliki asuransi kesehatan atau jiwa?",
    options: [
      "Tidak punya",
      "Hanya BPJS",
      "Asuransi kesehatan saja",
      "Punya asuransi lengkap",
    ],
    correct: 3,
    correctMessage:
      "Mantap! Perlindungan asuransi akan sangat berguna di masa depan.",
    inCorrectMessage:
      "Sebaiknya pertimbangkan untuk memiliki asuransi kesehatan dan jiwa agar lebih terlindungi.",
  },
  {
    question: "Seberapa disiplin kamu dalam membayar tagihan bulanan?",
    options: [
      "Sering telat",
      "Kadang-kadang telat",
      "Hampir selalu tepat waktu",
      "Selalu tepat waktu",
    ],
    correct: 3,
    correctMessage:
      "Bagus! Membayar tagihan tepat waktu menghindarkanmu dari denda dan masalah keuangan.",
    inCorrectMessage:
      "Usahakan untuk membayar tagihan tepat waktu agar tidak terkena denda atau masalah finansial lainnya.",
  },
  {
    question: "Apakah kamu memiliki perencanaan pensiun?",
    options: ["Tidak", "Sedikit", "Cukup", "Sudah matang"],
    correct: 3,
    correctMessage: "Kamu sudah siap menghadapi masa pensiun dengan baik!",
    inCorrectMessage:
      "Sebaiknya mulai merencanakan dana pensiun sejak dini agar lebih nyaman di masa tua.",
  },
  {
    question: "Bagaimana kebiasaan kamu dalam membuat anggaran bulanan?",
    options: ["Tidak pernah", "Kadang-kadang", "Sering", "Selalu"],
    correct: 3,
    correctMessage:
      "Sangat baik! Mengelola anggaran dengan disiplin membantu menjaga keuangan tetap sehat.",
    inCorrectMessage:
      "Cobalah untuk mulai membuat anggaran setiap bulan agar keuangan lebih terkontrol.",
  },
];

const colors = ["#FF4C4C", "#FFD700", "#4CAF50"];

export default function FinancialCheck() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult1, setShowResult1] = useState(false);

  const handleAnswer = (index) => {
    setAnswers([...answers, index]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult1(true);
    }
  };

  const correctAnswers = answers.filter(
    (ans, i) => ans === questions[i].correct
  ).length;
  const incorrectAnswers = questions.length - correctAnswers;

  const percentage = correctAnswers * 10;

  const getFinancialMessage = (percentage) => {
    if (percentage <= 20)
      return "Kondisi finansialmu kurang sehat, coba mulai menabung lebih banyak untuk kestabilan keuangan.";
    if (percentage <= 40)
      return "Kamu sudah cukup baik dalam mengelola keuangan, tapi masih bisa lebih optimal dalam menabung.";
    if (percentage <= 60)
      return "Keuanganmu dalam kondisi sehat! Kamu cukup seimbang antara menabung dan pengeluaran.";
    if (percentage <= 80)
      return "Kondisi finansialmu sangat baik! Kamu sudah menabung dengan disiplin dan bijak.";
    return "Luar biasa! Kamu sangat bijak dalam mengatur keuangan dan memiliki kestabilan finansial yang kuat.";
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 space-y-6 mb-12 mt-6">
        {!showResult1 ? (
          <div className="border p-6 rounded-lg shadow-md bg-white">
            <h2 className="text-base lg:text-xl font-bold mb-8 text-gray-800">
              {questions[currentQuestion].question}
            </h2>
            <div className="flex flex-col gap-4 mt-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-slate-600 hover:bg-emerald-400 text-white text-xs md:text-sm p-[8px] rounded transition-all"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <h5 className="position relative left-1">
                {(currentQuestion / questions.length) * 100}%
              </h5>
              <div className="w-full bg-gray-200 rounded h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all"
                  style={{
                    width: `${(currentQuestion / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="border p-4 rounded shadow-md">
              <h2 className="text-xl font-bold text-center">
                Hasil Analisis Keuangan
              </h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={[
                      { name: "Kurang", value: incorrectAnswers },
                      { name: "Ideal", value: correctAnswers },
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {[incorrectAnswers, correctAnswers].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col justify-center items-center mb-8">
                <h2 className="font-bold text-xl">{correctAnswers * 10}%</h2>
                <h2 className="text-base">Kondisi Finansialmu</h2>
                <div className="px-4 py-2 relative bg-slate-900 text-white rounded-2xl max-w-xl mx-auto mt-3">
                  <p>{getFinancialMessage(percentage)}</p>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-slate-900"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded shadow-xl border">
                  <h3 className="font-bold text-center mb-4">
                    Apa yang perlu kamu perbaiki
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {answers.map(
                      (ans, i) =>
                        ans !== questions[i].correct && (
                          <li
                            key={i}
                            className="px-2 py-2 text-sm md:text-base bg-[#FEE7BC] rounded-xl"
                          >
                            <Warning size={24} weight="fill" />
                            {questions[i].inCorrectMessage}
                          </li>
                        )
                    )}
                  </ul>
                </div>
                <div className="p-4 rounded shadow-xl border">
                  <h3 className="font-bold text-center mb-4">
                    Sudah ideal, pertahankan ya!
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {answers.map(
                      (ans, i) =>
                        ans === questions[i].correct && (
                          <li
                            key={i}
                            className="px-2 py-2 text-sm md:text-base bg-[#9FFFD4] rounded-xl"
                          >
                            <CheckCircle size={24} weight="fill" />
                            {questions[i].correctMessage}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <NavLink to="/">
              <button className="fixed left-8 font-semibold bottom-6 px-2 py-2 lg:px-4 lg:py-2 bg-sky-500 rounded-2xl hover:bg-sky-700 hover:scale-102 active:scale-95 transition-all text-white">
                <div className="flex gap-4 text-sm lg:text-base justify-center items-center">
                  <div className="shake-horizontal">
                    <Rewind size={24} weight="fill" />
                  </div>
                  <span>Kembali</span>{" "}
                </div>
              </button>
            </NavLink>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}