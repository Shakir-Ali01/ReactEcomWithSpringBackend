// user Related api calls
import { publicAxios } from "./axiosservice";
export const registerUser=(userData)=>{
    return publicAxios.post(`/users`,userData).then((response)=>{
        return response.data
    })
}
    // login User
    export const loginUser=(loginData)=>{
       return publicAxios.post(`/auth/login`,loginData).then((response)=>response.data)
    }
export const getUser=(userId)=>{
    publicAxios.get(`/users/${userId}`).then(response=>response.data);
}