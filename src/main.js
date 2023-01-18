import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement, createCustomElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const products = document.querySelector('.products');
try {
  const load = createCustomElement('p', 'loading', 'carregando...');
  products.appendChild(load);
  const listProduct = await fetchProductsList('computador');
  load.remove();
  listProduct.forEach((product) => {
    products.appendChild(createProductElement(product));
  });
} catch (error) {
  const messege = 'Algum erro ocorreu, recarregue a página e tente novamente';
  const erro = createCustomElement('p', 'error', messege);
  products.appendChild(erro);
}
