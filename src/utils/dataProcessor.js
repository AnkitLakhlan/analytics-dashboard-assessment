import Papa from "papaparse";

// fetches and parses the CSV file
export const loadData = async () => {
  const response = await fetch("/Electric_Vehicle_Population_Data.csv");

  if (!response.ok) {
    throw new Error(`Failed to fetch CSV: ${response.status}`);
  }

  const csvText = await response.text();

  const { data } = Papa.parse(csvText, {
    header: true, // First row becomes keys
    skipEmptyLines: true,
  });

  return data;
};

// aggregate raw data into chart-ready formats
export const processData = (data) => {
  // safety check for null/undefined data
  if (!data || !Array.isArray(data)) {
    return null;
  }

  // total count
  const totalVehicles = data.length;
  // BEV vs PHEV
  const evTypeCounts = {};
  data.forEach((row) => {
    const type = row["Electric Vehicle Type"];
    evTypeCounts[type] = (evTypeCounts[type] || 0) + 1;
  });

  const evTypeData = Object.entries(evTypeCounts).map(([name, value]) => ({
    name: name.includes("Battery") ? "BEV" : "PHEV",
    fullName: name,
    value,
  }));

  // top makes ( manufacturers)
  const makeCounts = {};
  data.forEach((row) => {
    const make = row["Make"];
    makeCounts[make] = (makeCounts[make] || 0) + 1;
  });

  const topMakes = Object.entries(makeCounts)
    .sort((a, b) => b[1] - a[1]) // sort decending
    .slice(0, 10)
    .map(([name, count]) => ({ name, count }));

  // yearly trend ( by model year )
  const yearCounts = {};
  data.forEach((row) => {
    const year = row["Model Year"];
    if (year && year >= 2010) {
      yearCounts[year] = (yearCounts[year] || 0) + 1;
    }
  });

  const yearlyTrend = Object.entries(yearCounts)
    .sort((a, b) => a[0] - b[0])
    .map(([year, count]) => ({ year, count }));

  //   top models
  const modelCounts = {};
  data.forEach((row) => {
    const model = `${row["Make"]} ${row["Model"]}`;
    modelCounts[model] = (modelCounts[model] || 0) + 1;
  });

  const topModels = Object.entries(modelCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => ({ name, count }));

  //   county distribution
  const countyCounts = {};
  data.forEach((row) => {
    const county = row["County"];
    countyCounts[county] = (countyCounts[county] || 0) + 1;
  });

  const countyData = Object.entries(countyCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, count]) => ({ name, count }));

  //   Average electric range (exclude 0 values )
  const ranges = data
    .map((row) => parseInt(row["Electric Range"]) || 0)
    .filter((range) => range > 0);

  const avgRange =
    ranges.length > 0
      ? Math.round(ranges.reduce((a, b) => a + b, 0) / ranges.length)
      : 0;

  //   CAFV Eligibility breakdown
  const cafvCounts = {};
  data.forEach((row) => {
    const status = row["Clean Alternative Fuel Vehicle (CAFV) Eligibility"];
    cafvCounts[status] = (cafvCounts[status] || 0) + 1;
  });

  const cafvData = Object.entries(cafvCounts).map(([name, value]) => ({
    name,
    value,
  }));

  return {
    totalVehicles,
    evTypeData,
    topMakes,
    yearlyTrend,
    topModels,
    countyData,
    avgRange,
    cafvData,
  };
};
