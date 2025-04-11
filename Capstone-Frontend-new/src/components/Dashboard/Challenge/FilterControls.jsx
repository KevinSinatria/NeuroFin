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
        className="border px-2 py-3 rounded"
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
        className="border w-50 px-2 py-1 rounded"
      />
      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="border px-2 py-1 rounded"
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
        className="border px-2 py-1 rounded"
      />
      <input
        type="text"
        placeholder="Max. Pengeluaran"
        value={formatNumber(maxAmount)}
        onChange={(e) => setMaxAmount(e.target.value.replace(/\D/g, ""))}
        className="border px-2 py-1 rounded"
      />
    </div>
  );
};

export default FilterControls;
