import { Button, Container } from "react-bootstrap";
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';
const Base=({ 
title="Shop what you need",
description="We Provide best ITem as you required ",
buttonEnabled=false,
buttonText="ShopNow",
buttonType="primary",
buttonLink="/",
children })=>{
    let styleContainer={
        height:"200px"
    }
    return (
      <div>
        <Container className="bg-dark text-center d-flex  justify-content-center align-items-center" fluid style={styleContainer}>
                   <div>
                   <h3 className="text-center">{title}</h3>
                    <p className="text-center">{description && description}</p>
                    {buttonEnabled && <NavLink as={NavLink} to={buttonLink} className={"btn btn-"+buttonType}>{buttonText}</NavLink>}
                   </div>
                    
        </Container>
               {children}
        <Footer/>
      </div>



    )
}
export default Base;