import React from "react";

const FilterControls = ({
  category,
  setCategory,
  year,
  setYear,
  month,
  setMonth,
  minAmount,
  setMinAmount,
  maxAmount,
  setMaxAmount,
}) => {
  const categories = [
    "Semua Kategori",
    "Makanan",
    "Tagihan",
    "Transportasi",
    "Belanja",
    "Hiburan",
    "Kesehatan",
    "Tabungan",
    "Investasi",
    "Donasi",
    "Pendidikan",
    "Hadiah",
    "Lainnya",
  ];

  // Fungsi untuk format angka ke rupiah tanpa simbol "Rp"
  const formatNumber = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("id-ID").format(value);
  };

  return (
    <div className="flex flex-col gap-4 mb-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full bg-gray-100 border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:shadow-lg transition-all"
      >
        {categories.map((category, index) => (
          <option
            key={index}
            value={category === "Semua Kategori" ? "" : category}
          >
            {category}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Tahun (contoh: 2025)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="w-full bg-gray-100 border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:shadow-lg transition-all"
      />
      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="w-full bg-gray-100 border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:shadow-lg transition-all"
      >
        <option value="" disabled>
          Pilih Bulan
        </option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i} value={(i + 1).toString().padStart(2, "0")}>
            {new Date(2025, i).toLocaleString("id-ID", { month: "long" })}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Min. Pengeluaran"
        value={formatNumber(minAmount)}
        onChange={(e) => setMinAmount(e.target.value.replace(/\D/g, ""))}
        className="w-full bg-gray-100 border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:shadow-lg transition-all"
      />
      <input
        type="text"
        placeholder="Max. Pengeluaran"
        value={formatNumber(maxAmount)}
        onChange={(e) => setMaxAmount(e.target.value.replace(/\D/g, ""))}
        className="w-full bg-gray-100 border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:shadow-lg transition-all"
      />
    </div>
  );
};

export default FilterControls;