import React, { useEffect, useState } from "react";
import {
  createSpendingData,
  deleteSpendingData,
  getSpendingData,
  updateSpendingData,
} from "../../../api/expenseApi";
import FilterControls from "./FilterControls";
import {
  CheckFat,
  Funnel,
  FunnelX,
  PencilSimple,
  PlusCircle,
  Robot,
  TrashSimple,
  WarningCircle,
  X,
} from "@phosphor-icons/react";
import Modal from "../../modal/Modal";
import { NumericFormat } from "react-number-format";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import { showToast } from "../../alerts/alerts";
import { useAuth } from "../../../../contexts/AuthContext";
import { SyncLoader } from "react-spinners";

const SpendingTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [filterTrigger, setFilterTrigger] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [createValue, setCreateValue] = useState([]);
  const [editValue, setEditValue] = useState([]);
  const [deleteValue, setDeleteValue] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPage = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const { user } = useAuth();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await getSpendingData();

      if (result && Array.isArray(result)) {
        setData(result);
      } else {
        console.error("Data dari API bukan array!", result);
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (user?.id && createValue.id_user !== user.id) {
      setCreateValue((prevState) => ({
        ...prevState,
        id_user: user.id,
      }));
    }
  }, [user, createValue]);

  // Filter data berdasarkan parameter yang ada
  useEffect(() => {
    if (filterTrigger === 0) return;
    let filtered = [...data];

    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }
    if (year) {
      filtered = filtered.filter((item) =>
        item.transaction_date.startsWith(year)
      );
    }
    if (month) {
      filtered = filtered.filter(
        (item) => item.transaction_date.slice(5, 7) === month
      );
    }
    if (minAmount) {
      filtered = filtered.filter(
        (item) => item.uangkeluar >= parseInt(minAmount)
      );
    }
    if (maxAmount) {
      filtered = filtered.filter(
        (item) => item.uangkeluar <= parseInt(maxAmount)
      );
    }

    setFilteredData(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterTrigger]);

  const resetFilterHandler = () => {
    try {
      setSelectedCategory("");
      setYear("");
      setMonth("");
      setMinAmount("");
      setMaxAmount("");
    } catch (err) {
      console.error("Error: ", err.massage);
    }
  };

  const applyFilterHandler = () => {
    setShowFilter(false);
    setFilterTrigger((prev) => prev + 1);
    setCurrentPage(1);
    try {
      showToast({ title: "Berhasil menerapkan filter!", timer: 2500 });
    } catch (err) {
      showToast({
        title: `Gagal menerapkan filter: ${err.message}`,
        icon: "error",
        timer: 2500,
      });
    }
  };

  const categories = [
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

  const openCreateModalHandler = () => {
    setOpenCreateModal(true);
  };

  const openEditModalHandler = (dataItem) => {
    setOpenEditModal(true);
    setEditValue(dataItem);
  };

  const openDeleteModalHandler = (itemId) => {
    setOpenDeleteModal(true);
    setDeleteValue(itemId);
  };

  const closeCreateModalHandler = () => {
    setOpenCreateModal(false);
    setCreateValue([]);
  };

  const closeEditModalHandler = () => {
    setOpenEditModal(false);
    setEditValue([]);
  };

  const closeDeleteModalHandler = () => {
    setOpenDeleteModal(false);
    setDeleteValue([]);
  };

  const createHandler = async (e) => {
    e.preventDefault();
    try {
      await createSpendingData(createValue);
      showToast({ title: "Berhasil membuat data!" });

      await fetchData();
    } catch (err) {
      showToast({ title: `${toString(err.message)}`, icon: "error" });
    } finally {
      closeCreateModalHandler();
    }
  };

  const updateHandler = async (itemId, e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { expenseid, id_user, createdAt, updatedAt, ...editData } = editValue;
    try {
      await updateSpendingData(itemId, editData);
      showToast({ title: "Berhasil mengubah data!" });

      await fetchData();
    } catch (err) {
      showToast({ title: `${toString(err.message)}`, icon: "error" });
    } finally {
      closeEditModalHandler();
    }
  };

  const deleteHandler = async (itemId, e) => {
    e.preventDefault();
    try {
      await deleteSpendingData(itemId);
      showToast({ title: "Berhasil menghapus data!" });

      await fetchData();
    } catch (err) {
      showToast({ title: `${toString(err.message)}`, icon: "error" });
    } finally {
      closeDeleteModalHandler();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-auto overflow-y-auto">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 md:gap-4">
          <button
            onClick={openCreateModalHandler}
            className="flex items-center md:text-sm text-xs whitespace-nowrap gap-2 md:gap-3 px-2 md:px-6 py-1.5 mb-2 rounded-xl text-gray-100 font-medium bg-green-500 hover:bg-green-600 active:scale-97 transition-all hover:shadow cursor-pointer"
          >
            <span className="md:text-base text-sm">
              <PlusCircle size={24} weight="duotone" />
            </span>
            Buat Data
          </button>
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center md:text-sm text-xs gap-2 md:gap-3 px-2 md:px-8 py-1.5 mb-2 rounded-xl text-gray-900 font-medium bg-gray-200 hover:bg-gray-300 active:scale-97 transition-all hover:shadow cursor-pointer"
          >
            <span>
              <Funnel size={24} weight="duotone" />
            </span>
            Filter
          </button>
        </div>
        <p className="text-[10px] md:text-xs text-gray-700">
          Halaman {currentPage} dari {totalPage} halaman
        </p>
      </div>

      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 md:top-13 right-0 h-full w-96 bg-white shadow-2xl z-5000 md:z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <Funnel size={24} weight="duotone" />
              <h2 className="text-lg font-semibold">Filter Pengeluaran</h2>
              <button
                className="hover:bg-gray-300 rounded transition-all"
                onClick={() => setShowFilter(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* ⬇️ Munculkan FilterControls di sidebar */}
            <FilterControls
              category={selectedCategory}
              setCategory={setSelectedCategory}
              year={year}
              setYear={setYear}
              month={month}
              setMonth={setMonth}
              minAmount={minAmount}
              setMinAmount={setMinAmount}
              maxAmount={maxAmount}
              setMaxAmount={setMaxAmount}
            />

            <button
              className="w-full mt-8 font-medium text-sm flex gap-2 items-center justify-center bg-gray-400 text-gray-50 py-2 rounded-lg hover:bg-gray-500 active:scale-97 transition-all"
              onClick={resetFilterHandler}
            >
              <FunnelX weight="bold" size={24} />
              <span>Reset Filter</span>
            </button>
            <button
              className="w-full mt-4 font-medium flex gap-2 items-center justify-center text-sm bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 active:scale-97 transition-all"
              onClick={applyFilterHandler}
            >
              <CheckFat size={24} /> <span>Terapkan Filter</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tabel Pengeluaran */}
      <div className="max-h-[760px] md:max-h-[440px] 2xl:max-h-[600px] w-full overflow-y-auto bg-white rounded-2xl shadow-xl ring-1 ring-gray-200">
        <table className="w-full text-xs border-separate border-spacing-0">
          <thead className="sticky top-0 z-10 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 shadow">
            <tr className="text-gray-700 font-semibold uppercase tracking-wide">
              <th className="py-4 px-3 text-center border-b border-gray-300">
                No.
              </th>
              <th className="py-4 px-3 text-center border-b border-gray-300">
                Kategori
              </th>
              <th className="py-4 px-3 text-right border-b border-gray-300">
                Uang Masuk
              </th>
              <th className="py-4 px-3 text-right border-b border-gray-300">
                Uang Keluar
              </th>
              <th className="py-4 px-3 text-right border-b border-gray-300">
                Saldo Akhir
              </th>
              <th className="py-4 px-3 text-left border-b border-gray-300">
                Deskripsi
              </th>
              <th className="py-4 px-3 text-center border-b border-gray-300">
                Tanggal
              </th>
              <th className="py-4 px-3 text-center border-b border-gray-300">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {isLoading ? (
              <tr>
                <td colSpan="9" className="text-center">
                  <div className="flex justify-center my-4 items-center">
                    <SyncLoader color="#000" size={12} />
                  </div>
                </td>
              </tr>
            ) : currentItems.length !== 0 ? (
              currentItems.map((item, index) => (
                <tr
                  key={item.expenseid}
                  className="hover:bg-blue-50 transition duration-150 group"
                >
                  <td className="p-4 text-center border-b border-gray-200">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="p-4 text-center border-b border-gray-200">
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold py-1 px-3 rounded-full group-hover:bg-emerald-200">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-4 text-right text-gray-700 border-b border-gray-200">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(item.uangmasuk)}
                  </td>
                  <td className="p-4 text-right text-gray-700 border-b border-gray-200">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(item.uangkeluar)}
                  </td>
                  <td className="p-4 text-right text-green-600 font-semibold border-b border-gray-200">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(item.uangakhir)}
                  </td>
                  <td className="p-4 text-gray-600 border-b border-gray-200">
                    {item.description}
                  </td>
                  <td className="p-4 text-center text-gray-500 whitespace-nowrap border-b border-gray-200">
                    {new Date(item.transaction_date).toLocaleDateString(
                      "id-ID",
                      {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </td>
                  <td className="p-4 flex justify-center gap-2 items-center border-b border-gray-200">
                    <button
                      className="p-2 rounded-full hover:bg-orange-100 transition"
                      onClick={() => openEditModalHandler(item)}
                      title="Edit"
                    >
                      <PencilSimple
                        size={20}
                        weight="duotone"
                        color="#F97316"
                      />
                    </button>
                    <button
                      className="p-2 rounded-full hover:bg-red-100 transition"
                      onClick={() => openDeleteModalHandler(item.expenseid)}
                      title="Hapus"
                    >
                      <TrashSimple size={20} weight="duotone" color="#EF4444" />
                    </button>
                  </td>
                </tr>
              ))
            ) : data.length !== 0 ? (
              <tr>
                <td
                  className="w-full text-center py-4 text-base font-medium text-gray-500"
                  colSpan="9"
                >
                  <div className="flex flex-col items-center justify-center">
                    <FunnelX size={48} weight="duotone" />
                    <p>
                      Hmm... datanya gak ketemu nih, kayaknya filter kamu
                      terlalu ketat.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              <tr>
                <td
                  className="w-full text-center py-4 text-base font-medium text-gray-500"
                  colSpan="9"
                >
                  <div className="flex flex-col items-center justify-center">
                    <Robot size={48} weight="duotone" />
                    <p>
                      Belum ada data yang tersedia. Kamu bisa mulai dengan
                      membuat satu data.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1  bg-gray-100 rounded hover:bg-gray-200 hover:shadow transition-all"
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {Array.from(
          { length: Math.ceil(filteredData.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white shadow hover:shadow-none transition-all"
                  : "bg-gray-100 hover:bg-gray-200 hover:shadow transition-all"
              }`}
            >
              {i + 1}
            </button>
          )
        )}

        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(filteredData.length / itemsPerPage))
            )
          }
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 hover:shadow transition-all"
          disabled={
            currentPage === Math.ceil(filteredData.length / itemsPerPage)
          }
        >
          {">"}
        </button>
      </div>

      <Modal
        open={openCreateModal}
        onClose={closeCreateModalHandler}
        width={700}
      >
        <h2 className="text-xl flex justify-center font-semibold">BUAT DATA</h2>
        <form className="flex flex-col gap-2" onSubmit={createHandler}>
          <div className="flex flex-col gap-1 justify-center">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-800"
            >
              Kategori
            </label>
            <select
              id="category"
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
              value={createValue.category || ""}
              onChange={(e) =>
                setCreateValue({ ...createValue, category: e.target.value })
              }
              required
            >
              <option value="" disabled>
                Pilih Kategori
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full gap-4 items-center">
            <div className="flex flex-1 flex-col gap-1 justify-center">
              <label
                htmlFor="uangMasuk"
                className="text-sm font-medium text-gray-800"
              >
                Uang Masuk
              </label>
              <NumericFormat
                id="uangMasuk"
                value={createValue.uangmasuk || ""}
                onValueChange={(values) =>
                  setCreateValue({
                    ...createValue,
                    uangmasuk: parseFloat(values.value),
                  })
                }
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp "
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
                decimalScale={2}
                fixedDecimalScale
                autoComplete="off"
                placeholder="Rp 0,00"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1 justify-center">
              <label
                htmlFor="uangKeluar"
                className="text-sm font-medium text-gray-800"
              >
                Uang Keluar
              </label>
              <NumericFormat
                id="uangKeluar"
                value={createValue.uangkeluar || ""}
                onValueChange={(values) =>
                  setCreateValue({
                    ...createValue,
                    uangkeluar: parseFloat(values.value),
                  })
                }
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp "
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
                decimalScale={2}
                fixedDecimalScale
                autoComplete="off"
                placeholder="Rp 0,00"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <label
              htmlFor="saldoAkhir"
              className="text-sm font-medium text-gray-800"
            >
              Saldo Akhir
            </label>
            <NumericFormat
              id="saldoAkhir"
              value={createValue.uangakhir || ""}
              onValueChange={(values) =>
                setCreateValue({
                  ...createValue,
                  uangakhir: parseFloat(values.value),
                })
              }
              thousandSeparator="."
              decimalSeparator=","
              prefix="Rp "
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
              decimalScale={2}
              fixedDecimalScale
              autoComplete="off"
              placeholder="Rp 0,00"
              required
            />
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <label
              htmlFor="deskripsi"
              className="text-sm font-medium text-gray-800"
            >
              Deskripsi
            </label>
            <input
              type="text"
              id="deskripsi"
              value={createValue.description || ""}
              onChange={(e) =>
                setCreateValue({ ...createValue, description: e.target.value })
              }
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
              autoComplete="off"
              placeholder="Contoh: Memborong bitcoin"
              required
            />
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <label htmlFor="date" className="text-sm font-medium text-gray-800">
              Tanggal
            </label>
            <input
              type="date"
              id="date"
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all mb-3"
              value={
                createValue.transaction_date
                  ? new Date(createValue.transaction_date)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              onChange={(e) => {
                setCreateValue({
                  ...createValue,
                  transaction_date: e.target.value,
                });
              }}
              required
            />
          </div>
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={closeCreateModalHandler}
              className="hover:bg-gray-100 border text-gray-700 border-gray-300 transition-all px-8 py-2 rounded-xl"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-8 py-2 text-white bg-green-500 rounded-xl hover:bg-green-600 hover:shadow-2xl transition-all"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>

      <Modal open={openEditModal} onClose={closeEditModalHandler} width={700}>
        <h2 className="text-xl flex justify-center font-semibold">UBAH DATA</h2>
        <form
          className="flex flex-col gap-1"
          onSubmit={(e) => updateHandler(editValue.expenseid, e)}
        >
          <div className="flex flex-col gap-1 justify-center">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-800"
            >
              Kategori
            </label>
            <select
              id="category"
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
              value={editValue.category}
              onChange={(e) =>
                setEditValue({ ...editValue, category: e.target.value })
              }
              required
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex w-full gap-4 items-center">
            <div className="flex flex-1 flex-col gap-1 justify-center">
              <label
                htmlFor="uangMasuk"
                className="text-sm font-medium text-gray-800"
              >
                Uang Masuk
              </label>
              <NumericFormat
                id="uangMasuk"
                value={editValue.uangmasuk}
                onValueChange={(values) =>
                  setEditValue({
                    ...editValue,
                    uangmasuk: parseFloat(values.value),
                  })
                }
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp "
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
                decimalScale={2}
                fixedDecimalScale
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1 justify-center">
              <label
                htmlFor="uangKeluar"
                className="text-sm font-medium text-gray-800"
              >
                Uang Keluar
              </label>
              <NumericFormat
                id="uangKeluar"
                value={editValue.uangkeluar}
                onValueChange={(values) =>
                  setEditValue({
                    ...editValue,
                    uangkeluar: parseFloat(values.value),
                  })
                }
                thousandSeparator="."
                decimalSeparator=","
                prefix="Rp "
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
                decimalScale={2}
                fixedDecimalScale
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <label
              htmlFor="saldoAkhir"
              className="text-sm font-medium text-gray-800"
            >
              Saldo Akhir
            </label>
            <NumericFormat
              id="saldoAkhir"
              value={editValue.uangakhir}
              onValueChange={(values) =>
                setEditValue({
                  ...editValue,
                  uangakhir: parseFloat(values.value),
                })
              }
              thousandSeparator="."
              decimalSeparator=","
              prefix="Rp "
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
              decimalScale={2}
              fixedDecimalScale
              required
            />
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <label
              htmlFor="deskripsi"
              className="text-sm font-medium text-gray-800"
            >
              Deskripsi
            </label>
            <input
              type="text"
              id="deskripsi"
              value={editValue.description || ""}
              onChange={(e) =>
                setEditValue({ ...editValue, description: e.target.value })
              }
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <label htmlFor="date" className="text-sm font-medium text-gray-800">
              Tanggal
            </label>
            <input
              type="date"
              id="date"
              className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:shadow-lg focus:ring-blue-500 transition-all mb-3"
              value={
                editValue.transaction_date
                  ? new Date(editValue.transaction_date)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              onChange={(e) => {
                setEditValue({
                  ...editValue,
                  transaction_date: e.target.value,
                });
              }}
              required
            />
          </div>
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              onClick={closeEditModalHandler}
              className="hover:bg-gray-100 border text-gray-700 border-gray-300 transition-all px-8 py-2 rounded-xl"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-8 py-2 text-white bg-green-500 rounded-xl hover:bg-green-600 hover:shadow-2xl transition-all"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        open={openDeleteModal}
        onClose={closeDeleteModalHandler}
        width={350}
      >
        <div className="text-center">
          <WarningCircle size={48} className="text-red-500 mx-auto mb-2" />
          <h2 className="text-lg font-semibold">Konfirmasi Hapus</h2>
          <p className="text-gray-700 mt-2">
            Apakah Anda yakin ingin menghapus ini?
          </p>
        </div>

        {/* Buttons */}
        <form
          onSubmit={(e) => {
            deleteHandler(deleteValue, e);
          }}
          className="flex justify-end gap-2 mt-6"
        >
          <button
            type="button"
            onClick={closeDeleteModalHandler}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Hapus
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default SpendingTable;
