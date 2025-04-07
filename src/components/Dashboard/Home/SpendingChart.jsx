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

export const SpendingChart = () => {
  const [chartData, setChartData] = useState(null);
  const [mode, setMode] = useState("harian");

  useEffect(() => {
    getSpendingData().then((expenses) => {
      const grouped = {};
      const categoriesSet = new Set();

      expenses.forEach((item) => {
        const dateKey = dayjs(item.transaction_date).format(
          groupByFormat[mode]
        );
        const category = item.category;
        const nominal = parseFloat(item.uangkeluar);
        categoriesSet.add(category);

        if (!grouped[dateKey]) grouped[dateKey] = {};
        if (!grouped[dateKey][category]) grouped[dateKey][category] = 0;

        grouped[dateKey][category] += nominal;
      });

      const sortedDates = Object.keys(grouped).sort(
        (a, b) => dayjs(a).unix() - dayjs(b).unix()
      );
      const categories = Array.from(categoriesSet);

      const categoryDatasets = categories.map((category) => ({
        label: category,
        data: sortedDates.map((date) => grouped[date]?.[category] || 0),
        borderColor: getRandomColor(),
        backgroundColor: "rgba(0,0,0,0.1)",
        tension: 0.4,
        fill: true,
      }));

      const totalDataset = {
        label: `💰 Total Pengeluaran (${mode}) (Rp)`,
        data: sortedDates.map((date) => {
          const kategoriObj = grouped[date] || {};
          return Object.values(kategoriObj).reduce((acc, val) => acc + val, 0);
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

      setChartData({
        labels: sortedDates,
        datasets: [totalDataset, ...categoryDatasets],
      });
    });
  }, [mode]);

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
      <div className="px-8 my-2 flex justify-between mb-4">
        <h2 className="uppercase font-semibold text-gray-500">
          Grafik Pengeluaran
        </h2>
        <select
          className="border text-sm rounded-md px-3 py-1"
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
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
      </div>
    </div>
  );
};
