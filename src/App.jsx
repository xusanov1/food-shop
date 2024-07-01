import './App.css';
import { useLocation } from 'react-router-dom';
import Home from './components/home/Home.jsx'
import RouteController from './routes';



function App() {
  
  const { pathname } = useLocation();

  return (
    <>
      <Home/>
      <RouteController/>

    </>
  )
}

export default App
