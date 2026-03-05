import { useState } from 'react'
import './App.css'
import { getStorageValue } from './hooks/useLocalStorage';
import DogsPage from './pages/DogsPage'
import Signup from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0);
  const userData = getStorageValue("user");
  console.log(userData);
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>count is {count}</button>
      {userData && userData.length > 0
        ? <DogsPage />
        : <Signup />
      }
    </>
  );
}

export default App
