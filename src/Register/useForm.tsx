import { useState } from 'react';
import verification from './verification';

const useForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitObj, setSubmitObj] = useState<{
    status: boolean;
    message: string;
  }>({
    status: false,
    message: '',
  });

  const handleChange = (type: string, text: string) => {
    switch (type) {
      case 'email':
        setEmail(text);
        break;
      case 'password':
        setPassword(text);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const formFields = {
      email,
      password,
    };

    for (const [field, value] of Object.entries(formFields)) {
      const rule = verification(field, value);
      if (!rule.validator) {
        setSubmitObj({
          status: false,
          message: rule.errorMessage,
        });
        return;
      }
    }

    setSubmitObj({
      status: true,
      message: '註冊成功!',
    });
  };

  return {
    email,
    password,
    submitMessage: submitObj.message,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
