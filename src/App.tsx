import { useNavigate } from 'react-router';
import './App.css'
import { getStorageValue } from './hooks/useLocalStorage';
import DogsPage from './pages/DogsPage'

function App() {
  const userData = getStorageValue("user");
  const navigate = useNavigate();
  console.log(userData);
  if (!userData) {
    navigate("/signup");
  }
  return (
    <>
      <DogsPage />
    </>
  );
}

export default App
