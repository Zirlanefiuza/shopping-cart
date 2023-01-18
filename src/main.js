import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement, createCustomElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const products = document.querySelector('.products');
const load = createCustomElement('p', 'loading', 'carregando...');
products.appendChild(load);
const listProduct = await fetchProductsList('computador');
load.remove();
listProduct.forEach((product) => {
  products.appendChild(createProductElement(product));
});
