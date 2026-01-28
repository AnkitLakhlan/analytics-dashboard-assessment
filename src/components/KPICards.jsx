import React from "react";
import "../CSS/KPICards.css";

const KPICards = ({ totalVehicles, avgRange, evTypeData, topMakes }) => {
  // calculate BEV percentage
  const bevData = evTypeData.find((item) => item.name === "BEV");
  const bevPercent = bevData
    ? Math.round((bevData.value / totalVehicles) * 100)
    : 0;
  const topMake = topMakes.length > 0 ? topMakes[0].name : "N/A";

  return (
    <>
      <div className="kpi_container">
        <div className="kpi_card">
          <span className="kpi_value">{totalVehicles.toLocaleString()}</span>
          <span className="kpi_label">Total EVs</span>
        </div>

        <div className="kpi_card">
          <span className="kpi_value">{bevPercent}</span>
          <div className="kpi_label">Battery Electric (BEV)</div>
        </div>

        <div className="kpi_card">
          <span className="kpi_value">{avgRange}</span>
          <div className="kpi_label">Avg Electric Range</div>
        </div>

        <div className="kpi_card">
          <span className="kpi_value">{topMake}</span>
          <div className="kpi_label">Top Manufacturer</div>
        </div>
      </div>
    </>
  );
};

export default KPICards;
