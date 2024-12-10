const verification = (type: string, value: string) => {
  switch (type) {
    case 'email':
      return {
        validator: emailVerification(value),
        errorMessage: 'email格式錯誤',
      };
    case 'password':
      return {
        validator: passwordVerification(value),
        errorMessage: '密碼格式錯誤',
      };
    default:
      return {
        validator: false,
        errorMessage: '輸入格式錯誤',
      };
  }
};

const emailVerification = (email: string) => {
  const emailRegex = /^[^\s@]+@[a-zA-Z0-9-]+\.[a-zA-Z]{3}$/;
  return emailRegex.test(email);
};

const passwordVerification = (password: string) => {
  const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;

  return passwordRegex.test(password);
};

export default verification;
