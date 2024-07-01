import { Navigate, Route, Routes } from 'react-router-dom'
import Burger from './burger/Burger';
import Lagman from './lagman/Lagman';
import Cake from './cake/Cake';
import Drink from './drink/Drink';


const RouteController = () => {
  return (
    <Routes>
        <Route path='Burger' element={<Burger/>} />
        <Route path='Lagman' element={<Lagman/>}/>
        <Route path='Cake' element={<Cake/>}/>
        <Route path='Drink' element={<Drink/>} />
    </Routes>
  )
}

export default RouteController