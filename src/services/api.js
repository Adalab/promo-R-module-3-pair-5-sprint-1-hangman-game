const callToApi = () => {
  return fetch(`https://dev.adalab.es/api/random/word`)
    .then((response) => response.json())
    .then((response) => {
      // La respuesta del API es un objeto que dentro tiene la propiedad word que es un string
      const result = response.word;
      // Retornamos los resultados de la API al componente App
      return result;
    });
};

export default callToApi;
