const test = require('ava');
const { successOrFail } = require('../reduce')
const testCase = [
  {
    success: true,
    id: 1,
  },
  {
    success: false,
    id: 2,
  },
  { 
    success: false, 
    id: 3 
  },
  { 
    success: true, 
    id: 4 
  },
  { 
    success: false, 
    id: 5 
  },
  { 
    success: false, 
    id: 6 
  },
  { 
    success: false, 
    id: 7 
  },
  { 
    success: true, 
    id: 8 
  },
  { 
    success: true, 
    id: 9 
  },
];

test('Reduces an array of objects between success true or false and returns IDs in an object with successful or failed IDs', async t => {
  const result = successOrFail(testCase, 'success', 'id');
  const expected = { 
    success: [ 1, 4, 8, 9 ],
    failure: [ 2, 3, 5, 6, 7 ] 
  };
  t.deepEqual(result, expected);
})