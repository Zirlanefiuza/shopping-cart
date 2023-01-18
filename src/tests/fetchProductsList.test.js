import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', async () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
   await fetchProductsList ('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
   await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

   it('A função responsável por realizar uma requisição e retornar os resultados da API.', async () => {
  const list = await fetchProductsList('computador')
    expect(computadorSearch).toEqual(list);
  });
  
  it('Teste se, ao chamar a função sem argumento, retorna um erro', async () => {
   await expect(fetchProductsList()).rejects.toThrowError('Termo de busca não informado')
  });
});
