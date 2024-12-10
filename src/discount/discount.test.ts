import { describe, test, expect } from 'vitest';
import calculateDiscount from './calculateDiscount.ts';

describe('calculateDiscount', () => {
  test('-80%', () => {
    expect(calculateDiscount(100, 0.8)).toBe('80.00');
  });

  test('-0%', () => {
    expect(calculateDiscount(100, 0)).toBe('100.00');
  });

  test('price = 0', () => {
    expect(calculateDiscount(0, 0)).toBe('0.00');
  });

  test('-110', () => {
    expect(() => calculateDiscount(100, 1.1)).toThrowError(
      '請輸入正確折扣金額',
    );
  });

  test('price < 0', () => {
    expect(() => calculateDiscount(-100, 1.1)).toThrowError('請輸入正確價格');
  });
});
