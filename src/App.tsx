import './App.css'
import { getStorageValue } from './hooks/useLocalStorage';
import DogsPage from './pages/DogsPage'
import Signup from './pages/SignUp'

function App() {
  const userData = getStorageValue("user");
  console.log(userData);
  return (
    <>
    {userData && userData.length > 0
      ? <>  <DogsPage />
      </>
      : <Signup />
    }
    </>
  );
}

export default App
