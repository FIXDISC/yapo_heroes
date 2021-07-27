const { busca } = require('./public/busca')
let axios = require('axios')
const heroes = 'heroes.json'

jest.mock('axios');

describe('TESTS HEROES', function () {

    it('Obtiene el nombre del primer registro', async () => {
      axios.get.mockResolvedValue({
        data: [
          {
            id: 1,
            name: 'Black Widow'
          }
        ]
      });

      const title = await busca('IRONMAN');
      expect(title).toEqual('Black Widow');
    });
})