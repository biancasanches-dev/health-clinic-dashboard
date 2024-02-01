import { Navigate, Outlet } from "react-router-dom";
import authStore from "../stores/auth.store";

const PrivateRoute = () => {
    const { isAuth } = authStore;

    return (
        isAuth ? <Outlet /> : <Navigate to="/login" /> 
    )
}

export default PrivateRoute;