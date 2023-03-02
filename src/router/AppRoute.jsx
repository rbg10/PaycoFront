import { Route, Routes } from 'react-router-dom';

import { Login } from '../components/security/Login/Login';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import Siderbar from '../components/layout/sidebar/SideBar';



export const AppRoute = () => {
  return (
    <>

        <Routes>
            
            <Route path="login/*" element={
                <PublicRoute>
                  <Routes>
                    <Route path="/*" element={<Login />} />
                  </Routes>
                </PublicRoute>
              }
            />
            
            
            <Route path="/*" element={
              <PrivateRoute>
                <Siderbar />
              </PrivateRoute>
            } />

          

        </Routes>
    
    </>
  )
}
