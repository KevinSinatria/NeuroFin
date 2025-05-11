import React, { useEffect, useState } from "react";
import { SpendingChart } from "./SpendingChart";
import { getFinanceNews } from "../../../api/newsApi";

const Content = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const STORAGE_KEY = "financeNews";
  const LAST_FETCH_KEY = "lastFetchTime";
  const THIRTY_MINUTES = 30 * 60 * 1000;

  const fetchFinanceNews = async () => {
    const now = new Date().getTime();
    const lastFetch = localStorage.getItem(LAST_FETCH_KEY);
    const cachedNews = localStorage.getItem(STORAGE_KEY);

    if (lastFetch && cachedNews && now - lastFetch < THIRTY_MINUTES) {
      setNews(JSON.parse(cachedNews));
      setLoading(false);
      return;
    }

    try {
      const result = await getFinanceNews();

      if (result && Array.isArray(result)) {
        setNews(result);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        localStorage.setItem(LAST_FETCH_KEY, now.toString());
        setLoading(false);
      } else {
        console.error("Data dari API bukan array!", result);
        setLoading(true);
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setNews([]);
    }
  };

  useEffect(() => {
    fetchFinanceNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-4 bg-slate-100 lg:py-4 lg:px-4 w-auto overflow-y-auto">
      <div className="bg-white py-2 px-1 w-full h-83 rounded-xl shadow-lg">
        <SpendingChart viewMode="overview" />
      </div>
      <div>
        <h2 className="text-sm md:text-base font-semibold mb-3 text-gray-700">
          📰 Berita Finansial Terkini
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2 w-full h-auto rounded-xl">
          {loading ? (
            <p>Loading berita...</p>
          ) : (
            news.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white py-2 px-1 w-full h-full rounded-xl hover:bg-slate-50 hover:ring hover:ring-gray-500 shadow-xl"
              >
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                )}
                <div className="px-2">
                  <h3 className="font-semibold text-xs md:text-sm text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-500">
                    {item.source} -{" "}
                    {new Date(item.published_at).toLocaleString("id-ID")}
                  </p>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;