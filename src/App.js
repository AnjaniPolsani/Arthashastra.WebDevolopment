import React, { useState } from "react";
import "./App.css";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Label,
} from "recharts";

const dummyData = [
  {
    Id: 1,
    Year: 2004,
    Medals: 1,
  },
  {
    Id: 2,
    Year: 2008,
    Medals: 3,
  },
  {
    Id: 3,
    Year: 2012,
    Medals: 6,
  },
  {
    Id: 4,
    Year: 2016,
    Medals: 2,
  },
  {
    Id: 5,
    Year: 2020,
    Medals: 7,
  },
];

function App() {
  const [showTable, setShowTable] = useState(true);

  return (
    <div className="App">
      <div className="toggle-buttons">
        <button
          className={`custom-button ${
            showTable ? "show-table-button" : "show-chart-button"
          }`}
          onClick={() => setShowTable(true)}
        >
          Table
        </button>
        <button
          className={`custom-button ${
            !showTable ? "show-table-button" : "show-chart-button"
          }`}
          onClick={() => setShowTable(false)}
        >
          Line Chart
        </button>
      </div>
      {showTable ? (
        <Table data={dummyData} />
      ) : (
        <div>
          <h1 className="head">Medals Won by India in Olympics</h1>{" "}
          <Chart data={dummyData} />
        </div>
      )}
    </div>
  );
}

function Table({ data }) {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>id</th>
          <th>Year</th>
          <th>Medals</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.Id}>
            <td>{item.Id}</td>
            <td>{item.Year}</td>
            <td>{item.Medals || 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Chart({ data }) {
  return (
    <LineChart
      width={800}
      height={500}
      data={data}
      margin={{ right: 20, top: 20 }}
    >
      <XAxis dataKey="Year" interval={0} height={40} textAnchor="middle">
        <Label value="Years" position="insideBottom" />
      </XAxis>
      <YAxis
        tickCount={8}
        axisLine={false}
        label={{ value: "Medals Won", angle: -90, position: "insideLeft" }}
      />
      <CartesianGrid stroke="darkgray" vertical={false} />
      <Line type="linear" dataKey="Medals" stroke="blue" name="Medals" />
      <Tooltip />
    </LineChart>
  );
}

export default App;
