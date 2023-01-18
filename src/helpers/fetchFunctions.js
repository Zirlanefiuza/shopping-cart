export const fetchProduct = async (endPoint) => {
  const URL_API = `https://api.mercadolibre.com/items/${endPoint}`;
  if (!endPoint) throw new Error('ID não informado');
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
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
