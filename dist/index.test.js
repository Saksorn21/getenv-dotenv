
const app = require('./index.cjs.js')
app.config('.env')
// ,{
//   env, 
//   getAllEnv,
//   getOneEnv,
// getIdxEnv}
describe('Config .env return nv return Object parsed ',
() => {
test('Config .env return Object parsed ', () => {
  const mock = {
    parsed: {
        PORT: '3000',
        test: 'saksorn',
      }
  }
  expect(app.config('.env'))
    .toEqual(mock)
});
  test('Config default return Object parsed ', () => {
  const mock = {
    parsed: {
        PORT: '3000',
        test: 'saksorn',
      }
  }
  expect(app.config())
    .toEqual(mock)
});
});

describe('test main function', () => {
  test('getOne return value', () => {
expect(app.getOne('test')).toMatch('saksorn');
expect(app.getOne('PORT')).toBe('3000');
});
  test('getOne return value', () => {
expect(app.getIdx('test')).toMatch('test');
expect(app.getIdx('PORT')).toBe('PORT');
});
  

})
describe('test function no variable return undefined ', () => {
  test('getLocalEnv', () => {   expect(app.getLocal())
    .toBeUndefined()
  });
  test('getOneEnv', () => {   expect(app.getOne())
    .toBeUndefined()
  });
  test('getIdxEnv', () => {   expect(app.getIdx())
    .toBeUndefined()
  });
  
})

describe('test function variable return Object ', () => {
  const mocks = {
    search: {
        PORT: '3000',
        test: 'saksorn',
      }
  }
  test('getLocalEnv', () => {   expect(app.getLocal('.env'))
    .toEqual(mocks)
  });
  
  test('getIdxEnv', () => {   expect(app.getIdx('test'))
    .toEqual('test')
  });

  test('getAllEnv', () => {   expect(app.getAll())
  .toEqual(
    expect.not
    .objectContaining({ 
      test: expect.any(String)     }))
  });
  it('getOneEnv', () => {   expect(app.getOne('PORT')).toBe('3000');
expect(app.getOne('test')).toBe('saksorn');                        
  });
});