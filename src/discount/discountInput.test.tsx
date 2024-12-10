import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import DiscountInput from '.';

describe('DiscountInput', () => {
  test('render correctly with initial value', () => {
    render(<DiscountInput />);

    expect(screen.getByTestId('discountResult')).toHaveTextContent('100.00');
  });

  test('price 100, discount = 50%', async () => {
    render(<DiscountInput />);

    const priceInputNode = screen.getByTestId('price');
    const discountInputNode = screen.getByTestId('discount');
    await userEvent.clear(priceInputNode);
    await userEvent.type(priceInputNode, '100');
    await userEvent.clear(discountInputNode);
    await userEvent.type(discountInputNode, '50');
    await waitFor(() => {
      expect(screen.getByTestId('discountResult')).toHaveTextContent('50.00');
    });
  });
});
