import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { Container ,Col,Card,Row, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { isLoggedIn } from "../../auth/HelperAuth";
const Dashboard=()=>{
    const userContext=useContext(UserContext)
    //Private Dashboard
    const dashboardView=()=>{
        return (<div>
            {/* <h1>This is User Dashboard</h1> */}
            <Outlet/>
       </div>)
    }
    //Not Login View
    const notLoginView=()=>{
        return(
            <Container>
                <Row>
                    <Col
                    md={{
                        span:8,
                        offset:2
                    }}>
                     <Card className="border-0 shadow mt-3">
                        <Card.Body className="text-center">
                            <h3>You are not logged In</h3>
                            <p>Please do Login to View Page</p>
                            <Button as={NavLink} to="/login" variant="success">Login Now</Button>
                        </Card.Body>
                     </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
    /*(userContext.isLogin)? dashboardView():notLoginView()*/
    (isLoggedIn())? dashboardView():<Navigate to="/login"/>
    )
}
export default Dashboard;