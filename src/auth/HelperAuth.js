// data:save localStorage
  export const doLoginLocalStorage=(data)=>{
    localStorage.setItem("userData",JSON.stringify(data));
  } 
// data:fetch
   export const getUserFromLocalStorage=()=>{
    const data=getDataFromLocalStroage()
    if(data != null){
       return data.user;
    }return null;
   }
   export const getTokenFromLocalStorage=()=>{
        //   return getDataFromLocalStroage()?.data.user;
          const data=getDataFromLocalStroage()
          if(data != null){
             return data.jwtToken;
          }return null;
          
   }
   export const getDataFromLocalStroage=()=>{
      const data=localStorage.getItem("userData")
      if(data != null){
         return JSON.parse(data);
      }return null;
   }
//   check user is Logged In OR NOt
 export const isLoggedIn=()=>{
    if(getTokenFromLocalStorage()){
        return true;
    }else{
        return false;
    }
 }
// data: remove: logout
export const doLogOutFromLocalStorage=()=>{
   localStorage.removeItem("userData");
}


//Check user is Admin or Not
export const isAdmin=()=>{
    if(isLoggedIn()){
       const user=getUserFromLocalStorage()
       const roles=user.roles;
       if(roles.find((role)=>role.roleId=="2345ghhjjjsksks")){
        // console.log(roles[0].roleId)
           return true;
       }else{
          return false;
       }
    }else{
        return false;
    }
}