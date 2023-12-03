import { Outlet, Navigate } from "react-router";


const PrivateRoutes = () => {

    let token = window.localStorage.getItem('muslim_comunity_token');

    return (
        token !== null || undefined ? <Outlet /> : <Navigate to="/" />

    )
}

export default PrivateRoutes