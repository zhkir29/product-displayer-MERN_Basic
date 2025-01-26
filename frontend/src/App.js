import React, { useState } from "react";
import axios from "axios";

const NestedObjectDisplay = ({ obj }) => {
  if (!obj || typeof obj !== "object") return null;

  return (
    <div>
      {Object.keys(obj).map((key) => (
        <div key={key}>
          <span style={{ fontWeight: "bold" }}>{key}:</span>
          {typeof obj[key] === "object" && obj[key] !== null ? (
            <div style={{ marginLeft: "20px", borderLeft: "2px dashed #ccc", paddingLeft: "10px" }}>
              <NestedObjectDisplay obj={obj[key]} />
            </div>
          ) : (
            <span> {obj[key]}</span>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Please try again later.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1>Display Product and Response Data from Database Through API</h1>
      <button onClick={fetchData} style={{ marginBottom: "20px", padding: "10px", cursor: "pointer" }}>
        Display Product and Response Data
      </button>
      <div>
        {data ? (
          Array.isArray(data) ? (
            data.map((item, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <NestedObjectDisplay obj={item} />
              </div>
            ))
          ) : (
            <NestedObjectDisplay obj={data} />
          )
        ) : (
          <p>No data to display. Click "Display Product and Response Data" to load data.</p>
        )}
      </div>
    </div>
  );
};

export default App;
