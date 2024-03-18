import { Button } from "react-bootstrap";
import Base from "../components/Base";
import{toast} from 'react-toastify';
import axios from 'axios';
function Index() {
   function showSuccessToast(){
      // toast.success("This is success Message",{position: "top-right"})
      console.log("success toast");
      toast.warn("this is errror Message");
   }
const GetDataFromServer=()=>{
toast.info("Getting data from Server");
axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
console.log(response.data);
}).catch((error)=>{
   console.log(error);
   toast.error("SomeThing Went Wrong");
});
}
return (
   <Base title="Shop What You Need"
         description={"Welcome to Trending Store ,We provide best items as you need"}
         buttonEnabled={true}
         buttonText="Subscribe"
         buttonType="success"
         buttonLink="about">
      <h1>Working on home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Praesentium accusantium ab sed quo. Totam ad unde sed nemo
          dignissimos praesentium deserunt, modi placeat mollitia quos
           enim culpa incidunt nulla vel eaque ducimus consequatur doloribus?
            Maxime, tenetur quidem natus tempore illo unde adipisci id, voluptates
             a facere excepturi fuga aut dolorem!</p>
             <Button variant="success" onClick={showSuccessToast}>Toastify Sucess</Button>
             <Button variant="primary" onClick={GetDataFromServer}>Get Data From API</Button>
             
   </Base>
   
)
}
export default Index;