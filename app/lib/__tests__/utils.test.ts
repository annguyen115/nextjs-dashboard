import { formatCurrency, formatDateToLocal, generateYAxis, generatePagination } from '../utils';

describe('utils', () => {
  test('formatCurrency formats cents to USD', () => {
    expect(formatCurrency(1234)).toBe('$12.34');
  });

  test('formatDateToLocal formats ISO date to locale string', () => {
    expect(formatDateToLocal('2023-01-01')).toBe('Jan 1, 2023');
  });

  test('generateYAxis returns topLabel and labels', () => {
    const data = [
      { month: 'Jan', revenue: 6000 },
      { month: 'Feb', revenue: 8000 },
    ];
    const { yAxisLabels, topLabel } = generateYAxis(data as any);
    expect(topLabel).toBe(8000);
    expect(yAxisLabels[0]).toBe('$8K');
    expect(yAxisLabels[yAxisLabels.length - 1]).toBe('$0K');
  });

  test('generatePagination handles small page counts', () => {
    expect(generatePagination(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test('generatePagination adds ellipsis when near start', () => {
    expect(generatePagination(2, 10)).toEqual([1, 2, 3, '...', 9, 10]);
  });

  test('generatePagination adds ellipsis when near end', () => {
    expect(generatePagination(9, 10)).toEqual([1, 2, '...', 8, 9, 10]);
  });

  test('generatePagination adds ellipsis when in middle', () => {
    expect(generatePagination(5, 10)).toEqual([1, '...', 4, 5, 6, '...', 10]);
  });
});
