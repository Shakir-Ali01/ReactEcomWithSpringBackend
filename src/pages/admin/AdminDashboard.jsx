import { Navigate, Outlet } from "react-router-dom";
import { isAdmin } from "../../auth/HelperAuth";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
const AdminDashboard=()=>{
    
    const userContext=useContext(UserContext)
    const dashboardView=()=>{
        return (
            <div>
            <h1>This is Admin Dashboard</h1> 
            <Outlet/>
         </div>
        )
    }
    return ( 
        (isAdmin()? dashboardView():<Navigate to="/users/home"></Navigate>)
    )
}
export default AdminDashboard;