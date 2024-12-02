import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";


const ProtectedRoute = () => {
    const accessToken = 'fdfvdfgdf';
    const navigate = useNavigate();

    useEffect(()=>{
        if (accessToken) {
            return
        }else{
            navigate('/login')
        }
    },[]);
    return <Outlet/>
}

export default ProtectedRoute;