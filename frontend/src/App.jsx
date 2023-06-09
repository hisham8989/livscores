import "./App.css";
import Table from "./components/Table";
import scoreManager from "./manager/scoreManager";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const response = await scoreManager.getScoreInfo();
      setData(response.data);
      setLoading(false);
    };

    try {
      fetchScores();
    } catch (err) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Image</h1>
        <h3>loading...</h3>
      </div>
    );
  }
  return (
    <div style={{ padding: 30 }}>
      {data.map(({ name, matches }, index) => (
        <div key={`sports-container-${index + 1}`}>
          <h1>{name}</h1>
          <Table key={index} tableData={matches} />
        </div>
      ))}
    </div>
  );
}

export default App;
