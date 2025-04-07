import React, { useEffect, useState } from "react";
import { SpendingChart } from "./SpendingChart";
import { getFinanceNews } from "../../../api/newsApi";

const Content = () => {
  const [news, setNews] = useState([]);

  const fetchFinanceNews = async () => {
    try {
      const result = await getFinanceNews();

      if (result && Array.isArray(result)) {
        setNews(result);
      } else {
        console.error("Data dari API bukan array!", result);
        setNews([]);
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setNews([]);
    }
  };

  useEffect(() => {
    fetchFinanceNews();
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-slate-100 lg:py-4 lg:px-4 w-auto overflow-y-auto">
      <div className="bg-white py-2 px-1 w-full h-83 rounded-xl shadow-lg">
        <SpendingChart />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-3 text-gray-700">
          📰 Berita Finansial Terkini
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2 w-full h-auto rounded-xl">
          {news.length === 0 ? (
            <p>Loading berita...</p>
          ) : (
            news.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white py-2 px-1 w-full h-full rounded-xl hover:bg-slate-100 shadow-xl"
              >
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}
                <h4 className="font-semibold text-sm text-gray-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {new Date(item.published_at).toLocaleString("id-ID")}
                </p>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
