import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const listProduct = await fetchProductsList('computador');
const products = document.querySelector('.products');
listProduct.forEach((product) => {
  products.appendChild(createProductElement(product));
});
