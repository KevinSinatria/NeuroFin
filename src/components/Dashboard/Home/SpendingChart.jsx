import { useEffect, useState } from "react";
import React from "react";
import { getSpendingData } from "../../../api/expenseApi";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale, // <--- ini penting buat sumbu X
  LinearScale, // <--- ini buat sumbu Y
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { SyncLoader } from "react-spinners";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

const groupByFormat = {
  harian: "YYYY-MM-DD",
  bulanan: "YYYY-MM",
  tahunan: "YYYY",
};

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 80%, 70%)`;
}

export const SpendingChart = ({ viewMode }) => {
  const [chartData, setChartData] = useState(null);
  const [mode, setMode] = useState("harian");
  const [view, setView] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setView(viewMode);
  }, [viewMode]);

  const chartTitle = [
    { viewMode: "overview", title: `Ringkasan Keuangan (${mode})` },
    {
      viewMode: "expenses",
      title: `Pengeluaran Berdasarkan Kategori (${mode})`,
    },
    {
      viewMode: "compare",
      title: `Perbandingan Pemasukan dan Pengeluaran (${mode})`,
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    getSpendingData()
      .then((expenses) => {
        if (expenses.length === 0) {
          setChartData(null);
          return;
        }

        const grouped = {};
        const categoriesSet = new Set();

        expenses.forEach((item) => {
          const dateKey = dayjs(item.transaction_date).format(
            groupByFormat[mode]
          );
          const category = item.category;
          const expense = parseFloat(item.uangkeluar);
          const income = parseFloat(item.uangmasuk);
          categoriesSet.add(category);

          if (!grouped[dateKey]) grouped[dateKey] = {};
          if (!grouped[dateKey][category])
            grouped[dateKey][category] = { keluar: 0, masuk: 0 };

          grouped[dateKey][category].keluar += expense;
          grouped[dateKey][category].masuk += income;
        });

        const sortedDates = Object.keys(grouped).sort(
          (a, b) => dayjs(a).unix() - dayjs(b).unix()
        );
        const categories = Array.from(categoriesSet);

        const categoryDatasets = categories.map((category) => ({
          label: `Pengeluaran ${category}`,
          data: sortedDates.map(
            (date) => grouped[date]?.[category]?.keluar || 0
          ),
          borderColor: getRandomColor(),
          backgroundColor: "rgba(0,0,0,0.1)",
          tension: 0.4,
          fill: true,
        }));

        const totalExpenseDataset = {
          label: `Total Pengeluaran (${mode}) (Rp)`,
          data: sortedDates.map((date) => {
            const kategoriObj = grouped[date] || {};
            return Object.values(kategoriObj).reduce(
              (acc, val) => acc + val.keluar,
              0
            );
          }),
          borderColor: "#FF6384",
          backgroundColor: "rgba(255, 99, 132, 0.15)",
          borderWidth: 4,
          tension: 0.4,
          fill: true,
          pointRadius: 6,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#FF6384",
          pointHoverRadius: 8,
        };

        const totalIncomeDataset = {
          label: `Total Pemasukan (${mode}) (Rp)`,
          data: sortedDates.map((date) => {
            const kategoriObj = grouped[date] || {};
            return Object.values(kategoriObj).reduce(
              (acc, val) => acc + val.masuk,
              0
            );
          }),
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.15)",
          borderWidth: 4,
          tension: 0.4,
          fill: true,
          pointRadius: 6,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#4CAF50",
          pointHoverRadius: 8,
        };

        if (view === "overview") {
          setChartData({
            labels: sortedDates,
            datasets: [
              totalIncomeDataset,
              totalExpenseDataset,
              ...categoryDatasets,
            ],
          });
        } else if (view === "expenses") {
          setChartData({
            labels: sortedDates,
            datasets: [totalExpenseDataset, ...categoryDatasets],
          });
        } else if (view === "compare") {
          setChartData({
            labels: sortedDates,
            datasets: [totalIncomeDataset, totalExpenseDataset],
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [mode, view]);

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset?.label ?? "Kategori";
            const value = context.raw ?? 0;
            return `${label}: Rp ${value.toLocaleString("id-ID")}`;
          },
        },
      },
      legend: {
        labels: {
          color: "#000",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `Rp ${value.toLocaleString("id-ID")}`,
        },
      },
    },
  };

  return (
    <div className="w-full">
      <div className="px-8 my-2 flex justify-between overflow-auto mb-4">
        <select
          className="uppercase text-xs md:text-sm border-b border-b-gray-300 focus:shadow-lg focus:outline-none focus:shadow-black/10 transition-all rounded-lg shadow px-1 py-2 font-semibold text-gray-500"
          onChange={(e) => setView(e.target.value)}
          value={view}
        >
          {chartTitle.map((item, index) => (
            <option key={index} value={item.viewMode}>
              {item.title}
            </option>
          ))}
        </select>
        <select
          className="text-xs md:text-sm border-b border-b-gray-300 focus:shadow-lg focus:outline-none focus:shadow-black/10 transition-all rounded-lg shadow px-1 py-2 font-semibold text-gray-500"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="harian">Harian</option>
          <option value="bulanan">Bulanan</option>
          <option value="tahunan">Tahunan</option>
        </select>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[1000px] h-[250px]">
          {chartData ? (
            isLoading ? (
              <p className="text-center text-gray-500">
                <SyncLoader color="#000" size={24} />
              </p>
            ) : (
              <Line
                data={chartData}
                options={{
                  ...options,
                  maintainAspectRatio: false,
                  responsive: true,
                  scales: {
                    y: {
                      beginAtZero: true,
                      position: "left",
                    },
                  },
                }}
              />
            )
          ) : (
            <p className="text-center text-gray-500">
              Data belum tersedia, silahkan input data pengeluaran
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
