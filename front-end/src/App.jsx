import React from 'react';
import './App.css'
import {privateRoutesAdmin} from "./Routes/AdminRoute"
import {privateRoutesUser} from "./Routes/UserRoute"
import {routes, Navbar, Footer} from "./Routes/Routes.js"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GlobalStateContextProvider from './Components/Context/GlobalStateContext';
import AdminProtectedRoutes from './Routes/AdminProtectedRoutes';
import UserProtectedRoutes from './Routes/UserProtectedRoutes';

function App() {

  return (
    <GlobalStateContextProvider>
      <BrowserRouter>
          <Routes>
            <Route element={<Navbar/>}>
              {
                routes.map(({id, path, Component}) =>(
                  <Route key={id} path={path} element={<Component/>}/>
                ))
              }
              <Route element={<AdminProtectedRoutes/>}>
                {
                  privateRoutesAdmin.map(({id, path, Component}) =>(
                    <Route key={id} path={path} element={<Component/>}/>
                  ))
                }
              </Route>
              <Route element={<UserProtectedRoutes/>}>
                {
                  privateRoutesUser.map(({id, path, Component}) =>(
                    <Route key={id} path={path} element={<Component/>}/>
                  ))
                }
              </Route>
            </Route>
            <Route path='*' element={<Navigate to="/home" />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </GlobalStateContextProvider>
    
  )
}

export default App
