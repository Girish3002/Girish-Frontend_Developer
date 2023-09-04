import React, { useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import SearchForm from "./components/SearchForm/SearchForm";
import DataGrid from "./components/Data/DataGrid";
import Loading from "../src/components/Loading/Loading";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (filters, type, landings) => {
    setLoading(true);
    try {
      const queryParams = [];
      if (filters) {
        queryParams.push(`status=${filters}`);
      }
      if (type) {
        queryParams.push(`type=${type}`);
      }
      if (landings) {
        queryParams.push(`landings=${landings}`);
      }
      const queryString = queryParams.join("&");
      // let apiUrl = 'https://girish-frontend-developer-server.vercel.app/api/capsules';
      let apiUrl =
        "https://girish-frontend-developer-server.vercel.app/api/capsules";

      if (queryString) {
        apiUrl += `?${queryString}`;
      }

      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData("");
  }, []);

  return (
    <div className="App">
      <Banner />
      <SearchForm onSearch={fetchData} />
      {loading ? <Loading /> : <DataGrid data={data} />}
    </div>
  );
}

export default App;
