const callToApi = () => {
    return fetch(`https://adalab-api.herokuapp.com/api/random/word/`)
      .then((response) => response.json())
      .then((response) => {
        // La respuesta del API es un objeto que dentro tiene la propiedad results que es un array
        // Recorremos el array results obteniendo solo el nombre
        // Esto lo hacemos para limpiar la respuesta de la API antes de devolverla al componente App
        // Esto es opcional pero recomendado
        const result = response.word
        // Retornamos los resultados de la API al componente App
        return result;
      });
  };
  
  export default callToApi;