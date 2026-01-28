import React, { useEffect, useState } from "react";
import { loadData, processData } from "./utils/dataProcessor";
import KPICards from "./components/KPICards";
import EVTypeChart from "./components/EVTypeChart";
import TopMakesChart from "./components/TopMakesChart";
import YearlyTrendChart from "./components/YearlyTrendChart";
import TopModelsChart from "./components/TopModelsChart";
import CountyChart from "./components/CountyChart";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await loadData();
        const processedData = processData(rawData);
        setData(processedData);
      } catch (error) {
        console.error("Error loading data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading Dashboard .....</div>;
  }
  if (!data) {
    return <div className="error">Failed to load data</div>;
  }
  return (
    <>
      <div className="app">
        <header className="header">
          <h1>Electric Vehicle Population Dashboard</h1>
          <p>Washington State EV Registration Data Analysis</p>
        </header>
        <main className="dashboard">
          <KPICards
            totalVehicles={data.totalVehicles}
            avgRange={data.avgRange}
            evTypeData={data.evTypeData}
            topMakes={data.topMakes}
          />

          <div className="charts_grid">
            <EVTypeChart data={data.evTypeData} />
            <YearlyTrendChart data={data.yearlyTrend} />
            <TopMakesChart data={data.topMakes} />
            <TopModelsChart data={data.topModels} />
            <CountyChart data={data.countyData} />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
