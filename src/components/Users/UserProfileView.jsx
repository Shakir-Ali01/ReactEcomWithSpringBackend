import React from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap';
import log from "./../../assets/log.PNG"
import profile from "./../../assets/c.jpg"
import { BASE_URL } from '../../services/helperservice';
// user=null means btDefault user null rhega
const UserProfileView = ({user=null}) => {
    const profileStyle={
        height:"100px",
        width:"100px",
        borderRadius:"50%"
    }
  return (
   <>
   
     {
        (user && <Card className='m-3 border-0 shadow'>
            <Card.Body>
                <Container className='my-3 text-center'>
                    <img className='border border-dark' style={profileStyle} src={user.imageName ? BASE_URL+'/users/image'+user.userId :profile} alt="Profile-Img"/>
                </Container>
                {/* <h3>{(user.name)?user?.name:"React Don"}</h3> */}
                <h2 className='text-center text-uppercase fw-bold text-primary'>{user.name}</h2>
                <div className='mt-3'>
                   <Card className='border-0 shadow' style={{borderRadius:"40px"}}>
                    <Card.Body>
                    <Table className='text-center' hover  responsive> 
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{user.name}</td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>

                            <tr>
                                <td>Gender</td>
                                <td>{user.gender}</td>
                            </tr>
                            <tr>
                                <td>About</td>
                                <td>{user.about}</td>
                            </tr>
                            <tr>
                                <td>Roles</td>
                                <td>{user.roles.map(role=><div key={role.roleId}>{role.roleName}</div>)}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Card.Body>
                   </Card>
                </div>
                <Container className='text-center mt-5'>
                    <Button variant="success" size="">Update</Button>
                    <Button className="ml-2" variant="warning" size="" cla>Orders</Button>
                </Container>
            </Card.Body>
         </Card>)
     }
   </>
  )
}

export default UserProfileView