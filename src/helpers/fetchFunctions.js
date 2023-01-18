export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (endPoint) => {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?q=${endPoint}`;
  if (!endPoint) {
    throw new Error('Termo de busca não informado');
  }
  const response = await fetch(URL_API);
  const { results } = await response.json();
  return results;
};
