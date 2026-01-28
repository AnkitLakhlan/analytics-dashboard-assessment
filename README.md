# MapUp - Analytics Dashboard Assessment

## Live Dashboard

**[View Live Dashboard](https://your-vercel-url.vercel.app)**
*(Update this URL after deployment)*

---

## Overview

This dashboard visualizes Electric Vehicle (EV) population data for Washington State, providing key insights into EV adoption trends, manufacturer market share, popular models, and geographic distribution.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend framework |
| **Recharts** | Data visualization library |
| **PapaParse** | CSV parsing |
| **CSS3** | Styling (no frameworks) |
| **Vercel** | Deployment platform |

## Features

### Key Metrics (KPIs)
- **Total EVs** - Overall count of registered electric vehicles
- **BEV Percentage** - Share of Battery Electric Vehicles vs Plug-in Hybrids
- **Average Range** - Mean electric range across all vehicles
- **Top Manufacturer** - Leading EV manufacturer by registrations

### Visualizations
1. **EV Type Distribution** - Donut chart showing BEV vs PHEV split
2. **EV Registrations by Year** - Area chart showing adoption trend over time
3. **Top 10 Manufacturers** - Horizontal bar chart of leading manufacturers
4. **Top 10 EV Models** - Horizontal bar chart of most popular models
5. **Top 10 Counties** - Geographic distribution of EV registrations

## Insights Derived

- **Tesla dominates** the Washington State EV market with significant lead
- **BEV adoption** outpaces PHEV, indicating consumer preference for full-electric
- **King County** (Seattle area) has the highest EV concentration
- **Sharp growth** in registrations from 2018 onwards, accelerating post-2020
- **Model 3 and Model Y** are the most popular individual models

## Project Structure

```
├── public/
│   └── Electric_Vehicle_Population_Data.csv
├── src/
│   ├── components/
│   │   ├── KPICards.jsx
│   │   ├── EVTypeChart.jsx
│   │   ├── TopMakesChart.jsx
│   │   ├── YearlyTrendChart.jsx
│   │   ├── TopModelsChart.jsx
│   │   └── CountyChart.jsx
│   ├── CSS/
│   │   ├── Charts.css
│   │   └── KPICards.css
│   ├── utils/
│   │   └── dataProcessor.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── README.md
```

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment

Deployed on Vercel:
1. Connect GitHub repository to Vercel
2. Configure build settings (auto-detected for Create React App)
3. Deploy

---

## Dataset

The Electric Vehicle Population dataset is available in the [Electric Vehicle Population Data (CSV)](./data-to-visualize/Electric_Vehicle_Population_Data.csv) within this repository. For more information about the dataset visit [Kaggle dataset](https://www.kaggle.com/datasets/willianoliveiragibin/electric-vehicle-population).

**Dataset contains:**
- ~50,000 vehicle records
- 17 columns including Make, Model, Year, County, Electric Range, EV Type

---

## Original Assessment Instructions

### Tasks

**Dashboard Creation:**
- Create a frontend dashboard that presents key insights from the dataset
- Design the dashboard to effectively communicate important metrics and visualizations
- Include visual representations such as charts, graphs, or tables
- Ensure the dashboard is user-friendly and intuitive

**Deployment:**
- Deploy your frontend dashboard to a hosting platform of your choice
- Make sure the dashboard is publicly accessible

### Evaluation Criteria

- **Analytical Depth:** The depth of your analysis and insights derived from the dataset
- **Dashboard Design:** Clarity, aesthetics, and usability of the frontend dashboard
- **Insightfulness:** Effectiveness in conveying key insights about electric vehicles

### Submission Guidelines

- Fork this repository to your GitHub account
- Complete your analysis and create the frontend dashboard
- Deploy the dashboard to a hosting platform
- Update this README.md file with the URL to your live dashboard
- **Repository Access:** Keep your repository private. Add these collaborators:
  - vedantp@mapup.ai
  - ajayap@mapup.ai
  - atharvd@mapup.ai
- Fill out the Google form received via email to submit for review
