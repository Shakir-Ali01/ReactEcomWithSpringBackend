import { Col, Container, Row } from "react-bootstrap";
import UserProfileView from "../../components/Users/UserProfileView";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { getUser } from "../../services/userservice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
const Profile=()=>{
    const [user,setUser]=useState(null);
    const userContext=useContext(UserContext);
     const {userId}=useParams();
    useEffect(()=>{
        getUserDataFromServer()
    })
    const getUserDataFromServer=()=>{
        //api call
       // const userId=userContext.userData?.user?.userId; 
       // console.log('userId   '+userId)  
        getUser(userId)
         .then(data => {
            setUser(data);
        }).catch(err => {
            console.log(err);
            setUser(null)
            toast.error("Error in loading user information from server");
        })
     }
    return (
    <div>
        <Container className="my-3">
            
            <Row>
                <Col md={
                    {
                    span:6,
                    offset:3
                    }  
                }>
        {(user)?(   <UserProfileView 
        user={
            // {
                
            //     name: "React Don",
            //     email: "reactdon@gmail.com",
            //     gender: 'Male',
            //     about: "Iam Bhai OF React World.",
            //     roles: [{ roleId : 1,roleName: "Admin" }, {roleId : 2, roleName: "Normal"}]
            // }
            user
            
        }
        />)
        
        :<h1 className="text-center alert alert-primary">User Not Found {userId}</h1>}
         {/* <UserProfileView 
        user={
            {s
                user
                // name: "React Don",
                // email: "reactdon@gmail.com",
                // gender: 'Male',
                // about: "Iam Bhai OF React World.",
                // roles: [{ roleId : 1,roleName: "Admin" }, {roleId : 2, roleName: "Normal"}]
            }
            
        }
        /> */}
      
                </Col>
            </Row>
        
        </Container>
        
    </div>
    )
}
export default Profile;