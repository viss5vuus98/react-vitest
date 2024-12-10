import { describe, test, expect, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Register from '.';

describe('register input', () => {
  let emailInputNode: HTMLElement;
  let passwordInputNode: HTMLElement;
  beforeEach(() => {
    render(<Register />);
    emailInputNode = screen.getByTestId('email-input');
    passwordInputNode = screen.getByTestId('password-input');
  });

  test('message should be correct initial state', () => {
    expect(screen.queryByText('註冊成功!')).not.toBeInTheDocument();
    expect(screen.queryByText('email格式錯誤')).not.toBeInTheDocument();
    expect(screen.queryByText('密碼格式錯誤')).not.toBeInTheDocument();
  });

  test('input in validation', async () => {
    await typeField(emailInputNode, 'a9123@gmail.com');
    await typeField(passwordInputNode, 'Aa123456');

    await userEvent.click(screen.getByTestId('submit'));
    expect(screen.getByText('註冊成功!')).toBeVisible();
  });
  test('input invalidation email', async () => {
    await typeField(emailInputNode, 'a9123gmail.com');
    await typeField(passwordInputNode, 'Aa123456');

    await submit();
    shouldBeVisibleText('email格式錯誤');

    await typeField(emailInputNode, 'a9123gmail@.gom');
    await submit();
    shouldBeVisibleText('email格式錯誤');

    await userEvent.clear(emailInputNode);
    await submit();
    shouldBeVisibleText('email格式錯誤');
  });
  test('input invalidation password', async () => {
    await typeField(emailInputNode, 'a9123@gmail.com');
    await typeField(passwordInputNode, 'aa123456');

    await submit();
    shouldBeVisibleText('密碼格式錯誤');

    await typeField(passwordInputNode, 'aa1234');
    await submit();
    shouldBeVisibleText('密碼格式錯誤');

    await typeField(passwordInputNode, 'AAaaBBbb');
    await submit();
    shouldBeVisibleText('密碼格式錯誤');

    await userEvent.clear(passwordInputNode);
    await submit();
    shouldBeVisibleText('密碼格式錯誤');
  });

  const shouldBeVisibleText = (text: string) => {
    expect(screen.getByText(text)).toBeVisible();
  };

  const typeField = async (field: HTMLElement, text: string) => {
    await userEvent.clear(field);
    await userEvent.type(field, text);
  };

  const submit = async () => {
    await userEvent.click(screen.getByTestId('submit'));
  };
});
