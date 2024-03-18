import { Container, Row ,Col, Card,Form, Button, Spinner} from "react-bootstrap";
import Base from "../components/Base";
import logo from "./../assets/log.PNG";
import { useState } from "react";
import{toast} from 'react-toastify';
import { registerUser } from "../services/userservice";
const Register=()=>{
    
    let [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        about:'',
        gender:''
    })
    const[loading,setloading]=useState(false);
    const [errorData,setErrorData]=useState({
              isError:false,
              errorData:null
    })
    const submitForm=(event)=>{
         event.preventDefault();
         if(data.name==undefined || data.name.trim()==''){
            toast.error("Name is required");
            return 
         }
         if(data.email==undefined || data.email.trim()==''){
            toast.error("Email is required");
            return 
         }
         if(data.password==undefined || data.password.trim()==''){
            toast.error("password is required");
            return 
         }
         if(data.confirmPassword==undefined || data.confirmPassword.trim()==''){
            toast.error("password is required");
            return 
         }
         if(data.password!=data.confirmPassword){
            toast.error("Password and Confirm Password Not Macthed");
         }
         setloading(true);
         registerUser(data).then(userData=>{
            if(userData.email===null){
              toast.error("This Email Is Already Exists ! Try With Another Email OR Login ")
              
              return
            }
            toast.success("User Created SuccessFully !")
            clearData();
         })
         .catch(error=>{
          
            setErrorData({
              isError:true,
              errorData:error
            })
            toast.error("Error in creating user ! Try again")
         })
         .finally(()=>{
          setloading(false)
         })
    }
    // clear Data
      const clearData=()=>{
        setData({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        about:'',
        gender:''
        })
        setErrorData({
          errorData:null,
          isError:false
        })
      }
    // handleChange
    const handleChange=(event,property)=>{
        setData({
          ...data,
          [property]:event.target.value     
        })
    }
    const resgisterForm=()=>{
        return (
            
            <Container>
              <Row>
                {/* {JSON.stringify(data)} */}
        {/* span means we want column size 6 and offset 3 means left 3 column from right nd 3 from left */}
                  <Col sm={{span:6,offset:3}} >
                     <Card className="my-3" style={{position:'relative',top:-80}}>
                        <Card.Body>
                        <Container className="text-center mb-3"><img src={logo} alt="" height={50} width={50}></img>&nbsp;<h4>Store SignUp Here</h4></Container>
                            <Container></Container>
                            <Form noValidate onSubmit={submitForm}>
                                {/* Name Field */}
                            <Form.Group className="mb-3" controlId="formName">
                              <Form.Label>Enter Your Name</Form.Label>
                              <Form.Control type="text" 
                              placeholder="Enter Your Name"
                              value={data.name}
                              isInvalid={errorData.errorData?.response?.data?.name}
                              onChange={(event)=>handleChange(event,'name')}
                              />
                              <Form.Control.Feedback type="Invalid">{errorData.errorData?.response?.data?.name}</Form.Control.Feedback>
                            </Form.Group>
                                {/* Email Field */}
                            <Form.Group className="mb-3"
                             controlId="formEmail"
                             >
                              <Form.Label>Enter Your Email</Form.Label>
                              <Form.Control type="email" placeholder="Enter Your Email" 
                              onChange={(event)=>handleChange(event,'email')}
                              value={data.email}
                              isInvalid={errorData.errorData?.response?.data?.email}
                              />
                              <Form.Control.Feedback type="Invalid">{errorData.errorData?.response?.data?.email}</Form.Control.Feedback>
                            </Form.Group>
                                {/* Password Field */}
                            <Form.Group className="mb-3" controlId="formPassword">
                              <Form.Label>Enter Your Password</Form.Label>
                              <Form.Control type="password" placeholder="Enter Your Password" 
                              onChange={(event)=>handleChange(event,'password')}
                              value={data.password}
                              isInvalid={errorData.errorData?.response?.data?.password}
                              />
                              <Form.Control.Feedback type="Invalid">{errorData.errorData?.response?.data?.password}</Form.Control.Feedback>
                              
                            </Form.Group>



                            {/* Confirm Password Field */}
                            <Form.Group className="mb-3" controlId="formConfirmPassword">
                              <Form.Label>Re-Enter Password</Form.Label>
                              <Form.Control type="password" placeholder="Re-Enter Your Password" 
                              onChange={(event)=>handleChange(event,'confirmPassword')}
                              value={data.confirmPassword}/>
                              
                            </Form.Group>
                             
                          
                            {/* Gender Radio Btn */}
                            <Form.Group className="mb-3" controlId="formName">
                              <Form.Label>Gender &nbsp;</Form.Label>
                              <Form.Check
                                inline
                                name="gender"
                                label="Male"
                                type={'radio'}
                                id={'gender'}
                                value={'male'}
                                onChange={(event)=>handleChange(event,'gender')}
                                checked={data.gender=='male'}
                            />
                             <Form.Check
                                
                                inline
                                name="gender"
                                label="Female"
                                type={'radio'}
                                id={'gender'}
                                value={'Female'}
                                checked={data.gender=='Female'}
                                onChange={(event)=>handleChange(event,'gender')}
                            />
                            </Form.Group>
                            {/* About Field */}
                            <Form.Group className="mb-2">
                                <Form.Control as={'textarea'} rows={5} placeholder="Write Here...."
                                onChange={(event)=>handleChange(event,'about')}
                                value={data.about}
                                isInvalid={errorData.errorData?.response?.data?.about}
                                />
                              <Form.Control.Feedback type="Invalid">{errorData.errorData?.response?.data?.about}</Form.Control.Feedback>

                            </Form.Group>
                            <Container>
                                <p className="text-center">Alreday Register ?  <a href="">Login</a></p>
                            </Container>
                            <Container className="text-center">
                            <Button className="text-uppercase" 
                            type="submit"
                            variant="success"
                            disabled={loading}>
                             <Spinner
                             animation="border"
                             size="sm"
                             className="me-2"
                             hidden={!loading}
                             />
                             <span hidden={!loading}>Wait....</span>
                             <span hidden={loading}>&nbsp;Register</span> 
                            </Button>
                             <Button className="ml-2 text-uppercase" onClick={clearData} variant="danger">Reset</Button>
                            </Container>
                            </Form>
                        </Card.Body>
                     </Card>
                  </Col>
                 
              </Row>
            </Container>
        )
    }
    return (
        <Base
        title="Electro Store/ SignUp"
        description="Fill the Form correctly to register with us you use services that we provide">
            {resgisterForm()}
        </Base>
       
    )
}
export default Register;