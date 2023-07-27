import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperheroes = async()=> await axios.get(`http://localhost:4000/superheroes`)

const RQSuperheroes = () => {
    const results = useQuery("super_hero_unique_key",fetchSuperheroes)
    console.log(results)
    const {isLoading,data,isError,error} = results;
    
    if (isLoading) {
        return <h2>Loading...</h2>;
      }
    
      return (
        <div className="p-4">
          <h2>Super Heroes Page</h2>
          {data?.data?.map(hero =>  <div key={hero.name}>{hero.name}</div> )}
        </div>
      );
}

export default RQSuperheroes