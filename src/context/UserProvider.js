import { useContext, useEffect, useState } from "react"
import UserContext from "./UserContext";
import { doLogOutFromLocalStorage, doLoginLocalStorage, getDataFromLocalStroage, getUserFromLocalStorage, isAdmin, isLoggedIn } from "../auth/HelperAuth";
const UserProvider=({children})=>
{
  const [isLogin,setIsLogin]=useState(false)
  const [userData,setUserData]=useState(null);
  const [isAdminUser,setIsAdminUser]=useState(false);

/*
we will store this data in user data
  userData:{
    user:{

    },
    jwtToken:""
  }

*/
useEffect(()=>{
    setIsLogin(isLoggedIn());
    setIsAdminUser(isAdmin())
    setUserData(getDataFromLocalStroage());

},[]);

//login 
  const doLogin=(data)=>{
     doLoginLocalStorage(data);
     setIsLogin(true);
     //setting is admin user or Not
     setIsAdminUser(isAdmin());
     setUserData(getUserFromLocalStorage());
    
  }
//logout
const doLogOut=()=>{
  doLogOutFromLocalStorage();
  setIsLogin(false);
  setIsAdminUser(false);
  setUserData(null);
}

return(
    <UserContext.Provider value={{userData:userData,
        // we can remove setISlogin function
    setIsLogin:setIsLogin,
    isLogin:isLogin,
    //we can remove setUserData method
    setUserData:setUserData,
    Logout:doLogOut,
    Login:doLogin,
    isAdminUser:isAdminUser

    }}>
        {children}
    </UserContext.Provider>
)
}
export default UserProvider;