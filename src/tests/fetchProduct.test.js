import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste a função fetchProduct', async () => {
    expect(typeof fetchProduct).toBe('function');
  });
  it('fetch é chamado ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalled()
  });
  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect (fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });
  it('A função responsável por realizar uma requisição e retornar os resultados da API.', async () => {
    const productFetch = await fetchProduct('MLB1405519561');
    expect(product).toEqual(productFetch);
  });
  it('Teste se, ao chamar a função sem argumento, retorna um erro', async () => {
    await expect(fetchProduct()).rejects.toThrowError('ID não informado')
  });
}); 