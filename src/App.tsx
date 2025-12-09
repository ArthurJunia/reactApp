import { useNavigate } from 'react-router';
import './App.css'
import { getStorageValue, useLocalStorage } from './hooks/useLocalStorage';
import DogsPage from './pages/DogsPage'

function App() {
  return (
    <>
      <DogsPage />
    </>
  );
}

export default App
