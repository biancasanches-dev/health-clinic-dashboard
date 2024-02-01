import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import Home from './pages/Home'
import FormLayout from './pages/FormLayout'
import Login from './pages/Login'
import Registration from './pages/Registration'
import PrivateRoute from './utils/PrivateRoute'

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home /> } />
                    <Route element={<PrivateRoute />}>
                        <Route path='/dashboard' element={<Dashboard />} /> 
                    </Route>
                </Route> 
                <Route path='/' element={<FormLayout />} >
                    <Route path='/login' element={<Login /> } />
                    <Route path='/cadastro' element={<Registration /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}