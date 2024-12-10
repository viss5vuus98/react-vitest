import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import DiscountInput from './discount/index';
import Register from './Register';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <DiscountInput /> */}
        <Register />
      </div>
    </>
  );
}

export default App;
