import { Alert, AlertHeading, Button, Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import Base from "../components/Base";
import logo from "./../assets/log.PNG";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../services/userservice";
import UserContext from "../context/UserContext";
const Login=()=>{
 const userContext = useContext(UserContext);
  let redirect=useNavigate();
  let [loading,setLoading]=useState(false);
  // handleChange
  const handleChange=(event,property)=>{
    setData({
      ...data,
      [property]:event.target.value     
    })
}
const handleReset=()=>{
  setLoading(false);
  setData({
  email:"",
  password:""
  })
  setError({
    errorData:null,
    isError:false
  })

}
const [data,setData]=useState({
  email:"",
  password:""
 })

 let [error,setError]=useState({
  errorData:null,
  isError:false
 })
const submitForm=(event)=>{
    event.preventDefault();
     console.log(data);
     if(data.email===undefined || data.email.trim()===''){
        toast.error("Email Is Required")
        return 
     }
     if(data.password===undefined || data.password.trim()===''){
      toast.error("Password Is Required")
      return 
   }
   loginUser(data).then((data)=>{
          toast.success("logged In")
          console.log(data);
          setError({
            errorData:null,
            isError:false
          })
          userContext.Login(data)
          redirect("/users/home");
    
   }).catch((err)=>{
    if (err.response && err.response.data && err.response.data.message) {
      console.log("DDD");
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    } else {
      console.error("An unexpected error occurred:", err.message);
      toast.error("An unexpected error occurred. Please try again later.");
    }
      setError({
        errorData:err,
        isError:true
      })
   }).finally(()=>{
    setLoading(false);
   })
}

  const loginForm=()=>{
    return (
        <Container>
          {/* {JSON.stringify(userContext)} */}
             <Row>
                <Col md={{
                    span:6,
                    offset:3
                    }}>
                  <Card className="my-3 border-0 shadow" style={{
                    position:"relative",
                    top:-60
                  }}>
                    <Card.Body>
                     <Container className="text-center mb-3"><img src={logo} alt="" height={50} width={50}></img>&nbsp;<h4>Store Login Here</h4>
                     </Container>
                     <Alert className="mt-2" dismissible variant="danger"  show={error.isError}
                        onClose={()=>setError({
                          isError:false,
                          errorData:null
                        })}
                       >
                        <AlertHeading>Hey there , </AlertHeading>
                        <p>{error.errorData?.response?.data?.message} </p>
                       </Alert>
                      <Form noValidate onSubmit={submitForm}>
                        {/* email login field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control
                            type="email"
                            placeholder="Enter Your Username Here"
                            onChange={(event)=>handleChange(event,'email')}
                            value={data.email}>
                            </Form.Control>
                        </Form.Group>
                        {/* Password Login Field */}
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Your Password</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Enter Your Password Here"
                            onChange={(event)=>handleChange(event,'password')}
                            value={data.password}>
                            </Form.Control>
                        </Form.Group>
                      
                      <Container className="text-center">
                         {/* <p>Forgot Password ! <a href="#">Click Here</a></p> */}
                         <p>If Not Registered ! <NavLink  to="/register">Click Here</NavLink></p>
                      </Container>
                      <Container className="text-center">
                        <Button className="ml-2" type="submit" variant="success">
                          <Spinner 
                            animation="border"
                            size="sm"
                            hidden={!loading}
                          ></Spinner>
                          <span hidden={!loading}> Please wait...</span>
                          <span hidden={loading}> Login</span>
                          </Button>
                        <Button onClick={handleReset} className="ml-2" variant="danger">Reset</Button>
                      </Container>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
             </Row>
        </Container>
    )
}
    return(
        <Base
        title="Electro Store/ Login"
        description="Login Here">
           {loginForm()}
        </Base>
    )
}
export default Login;