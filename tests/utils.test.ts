import test from 'node:test';
import assert from 'node:assert/strict';
import { generatePagination } from '../app/lib/utils';

// Total pages <= 7 should list all pages
test('all pages displayed when total pages <= 7', () => {
  assert.deepStrictEqual(generatePagination(1, 5), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(generatePagination(4, 7), [1, 2, 3, 4, 5, 6, 7]);
});

// Current page near the start
test('start pages include leading numbers and ellipsis', () => {
  assert.deepStrictEqual(generatePagination(1, 8), [1, 2, 3, '...', 7, 8]);
  assert.deepStrictEqual(generatePagination(3, 10), [1, 2, 3, '...', 9, 10]);
});

// Current page near the end
test('end pages include trailing numbers and ellipsis', () => {
  assert.deepStrictEqual(generatePagination(8, 8), [1, 2, '...', 6, 7, 8]);
  assert.deepStrictEqual(generatePagination(9, 10), [1, 2, '...', 8, 9, 10]);
});

// Current page in the middle
test('middle pages include surrounding numbers and ellipses', () => {
  assert.deepStrictEqual(generatePagination(5, 10), [1, '...', 4, 5, 6, '...', 10]);
  assert.deepStrictEqual(generatePagination(6, 11), [1, '...', 5, 6, 7, '...', 11]);
});
