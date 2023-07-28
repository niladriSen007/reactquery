import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroes = async () =>
  await axios.get(`http://localhost:4000/superheroes`);


export const useSuperheroesData = () => {
  const onSuccess = (data) => console.log("Success", data);
  const onError = (data) => console.log("Error", data);

  const results = useQuery("super_hero_unique_key", fetchSuperheroes, {
    enabled: false,
    onSuccess: onSuccess,
    onError: onError,
  });
  console.log(results);
  
  return results
};
