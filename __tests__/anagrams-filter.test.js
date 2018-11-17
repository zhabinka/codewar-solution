import filterAnagrams from '../src/anagrams-filter';

test('Anagrams filter 0', () => {
  expect(filterAnagrams('laser', ['lazing', 'lazy', 'lacer'])).toEqual([]);
});

test('Anagrams filter 1', () => {
  expect(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual(['aabb', 'bbaa']);
});

test('Anagrams filter 2', () => {
  expect(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(['carer', 'racer']);
});
