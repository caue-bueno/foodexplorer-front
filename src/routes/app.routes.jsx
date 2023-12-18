/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details'
import { EditDish } from '../pages/EditDish'
import { NewDish } from '../pages/NewDish'
import { Favorites } from '../pages/Favorites'
import { History } from '../pages/History'
import { Order } from '../pages/Order'
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home /> } />
      <Route path='/details' element={<Details /> } />
      <Route path='/editdish' element={<EditDish /> } />
      <Route path='/newdish' element={<NewDish /> } />
      <Route path='/favorites' element={<Favorites /> } />
      <Route path='/history' element={<History /> } />
      <Route path='/order' element={<Order /> } />

      <Route path='*' exact={true} element={<NotFound /> } />
    </Routes>
  )
}