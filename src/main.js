import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement, createCustomElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

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

const lista = document.querySelector('.cart__products');
const totalFinal = document.querySelector('.total-price');

const carrinho = async () => {
  const itens = getSavedCartIDs();

  const array = [];
  let total = 0;
  itens.forEach((item) => array.push(fetchProduct(item)));
  const produtos = await Promise.all(array);
  produtos.forEach((item) => {
    const elemento = createProductElement(item);
    lista.appendChild(elemento);
    total += item.price;
  });
  totalFinal.innerText = total.toFixed(2);
};
carrinho();
