import React, { useEffect, useState } from "react";
import axios from "axios";

const Superheroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(`http://localhost:4000/superheroes`);
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-4">
      <h2>Super Heroes Page</h2>
      {data?.map(hero =>  <div key={hero.name}>{hero.name}</div> )}
    </div>
  );
};

export default Superheroes;
