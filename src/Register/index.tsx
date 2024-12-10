import { useState } from 'react';
import TextInput from './TextInput';
import verification from './verification';
import useForm from './useForm';

const Register = () => {
  const { email, password, submitMessage, handleChange, handleSubmit } =
    useForm();

  return (
    <div className="p-1 border-1">
      <TextInput
        label="email"
        testid="email-input"
        value={email}
        onChangeText={email => handleChange('email', email)}
      />
      <TextInput
        label="password"
        testid="password-input"
        value={password}
        onChangeText={password => handleChange('password', password)}
      />
      <button data-testid={'submit'} onClick={handleSubmit}>
        註冊
      </button>
      <p>{submitMessage}</p>
    </div>
  );
};

export default Register;
