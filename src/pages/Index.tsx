


import React, { useEffect,useState } from 'react'



const Index = () => {
    const [data, setData] = useState([]);

useEffect(() => {
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular')
    .then((res) => res.json())
    .then((newData) => {
      if (!newData || !newData.results || !Array.isArray(newData.results)) {
        throw new Error('Dados da API estão em um formato inesperado.');
      }
      setData(newData.results);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);
console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Index
