import { useSuperheroesData } from "../hooks/useSuperheroesData";

const RQSuperheroes = () => {

  const results = useSuperheroesData()
  

  const { isLoading, data, isError, error, refetch } = results;

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-4">
      <h2>Super Heroes Page</h2>
      <button className="p-2 bg-red-600 text-white" onClick={refetch}>
        Fetch Superheroes
      </button>
      {data?.data?.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </div>
  );
};

export default RQSuperheroes;
