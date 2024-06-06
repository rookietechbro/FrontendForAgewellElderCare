import {Container, Grid, Typography}  from "@mui/material"
import {GridGoldenratioRounded} from "@mui/icons-material";
import {Formik,Form,Field} from "formik";
import Button from '@mui/material/Button';
import agewellimage1 from '../assets/icons/agewellimage1.png';
import style from "../header/header.module.css"
import {useNavigate} from "react-router-dom";
import ApiService from "../ApiService";


const initialValue = {
    name: "",
    email:"",
    password:"",
    phoneNumber:"",
    address:"",
}


 const Registration = () => {
    const navigate = useNavigate();

     const onsubmit = async (value) => {
         console.log("registration: ",value)
         try {
             const response = await ApiService.Register(value)
             const message = localStorage.getItem("message")
             if (response.data.message === message) {
                 console.log("Successful Registration: ",response.data)
                 console.log("The message: ", message)
                 navigate("/login")

             }else{

             }
         }catch (e){
             console.log("Error during Registration: ",e.message)
             alert("Registration UnSuccessful")


         }

     }
    return (
        <div>
            <div  style={{display:"flex",gap:"70%"}}>
            < div className={style.header} style={{position:"relative",top:"20px",left:"40px",marginLeft:"90px"}}>
                <img src={agewellimage1} alt="agewellimage1"/>
            </div>
                <div>
                    <Button variant="outlined" style={{
                        border:"2px solid #070a3a ",
                        color:"#070a3a",
                        position:"relative",
                        top:"40PX"
                    }}
                   onClick={()=>navigate("/")}
                    >Return To Previous Page</Button>
                </div>
            </div>

        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <div style={{backgroundColor:"cornflowerblue",width:"1000px",paddingTop:"40px",paddingBottom:"40px",paddingLeft:"50px",borderRadius:"15px",paddingRight:"600px",display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"30px"}}>
                <Grid container
                     justifyContent={"center"}
                     alignItems={"center"}
                     display={"flex"}
                     flexDirection={"column"}
               >

                <Grid item xs={12}>
                   <Typography sx={{fontSize:"2.8rem",fontWeight:"1000",marginLeft:"250px"}}>
                       ELDER'S REGISTRATION
                   </Typography>
                    <Container>

                    <div>
                       <Formik initialValues={initialValue} onSubmit={onsubmit} >
                           <Form>
                               <div style={{marginTop: "20px",marginLeft:"115px"}}>
                                   <Field
                                       type="text"
                                       id="name"
                                       name="name"
                                       placeHolder="Name"
                                       required
                                       style={{
                                           width: "650px",
                                           height: "50px",
                                           fontSize: "1.2rem",
                                           paddingLeft: "40px",
                                           borderRadius: "15px"
                                       }}
                                   />
                               </div>

                               <div style={{marginTop: "20px",marginLeft:"115px"}}>
                                   <Field
                                       type="email"
                                       id="email"
                                       name="email"
                                       placeHolder="Email"
                                       required
                                       style={{
                                           width: "650px",
                                           height: "50px",
                                           fontSize: "1.2rem",
                                           paddingLeft: "40px",
                                           borderRadius: "15px"
                                       }}
                                   />
                               </div>

                               <div style={{marginTop: "20px",marginLeft:"115px"}}>
                                   <Field
                                       type="password"
                                       id="password"
                                       name="password"
                                       placeHolder="Password"
                                       required
                                       style={{
                                           width: "650px",
                                           height: "50px",
                                           fontSize: "1.2rem",
                                           paddingLeft: "40px",
                                           borderRadius: "15px"
                                       }}
                                   />
                               </div>

                               <div style={{marginTop: "20px",marginLeft:"115px"}}>
                                   <Field
                                       id="phoneNumber"
                                       name="phoneNumber"
                                       placeHolder="Phone Number"
                                       type='tel'
                                       required
                                       style={{
                                           width: "650px",
                                           height: "50px",
                                           fontSize: "1.2rem",
                                           paddingLeft: "40px",
                                           borderRadius: "15px"
                                       }}
                                   />
                               </div>
                               <div style={{marginTop: "20px",marginLeft:"115px"}}>
                                   <Field
                                       as="textArea"
                                       id="address"
                                       name="address"
                                       placeHolder="Address"
                                       required
                                       style={{
                                           width: "650px",
                                           height: "50px",
                                           fontSize: "1.2rem",
                                           paddingLeft: "40px",
                                           borderRadius: "15px"
                                       }}
                                   />
                               </div>
                               <Button type="submit" variant="contained" style={{background:" #070a3a",fontSize:"1.2rem",padding:"8px 290px",borderRadius:"15px",marginTop:"12px",marginLeft:"110px"}} >
                                   Submit
                               </Button>

                           </Form>

                       </Formik>
                        <div style={{position:"relative",left:"275px"}}>
                            <h1 style={{color:"white",fontSize:"1.3rem",width:"1000px"}}>
                                Already have an account? <span onClick={()=>navigate("/login")} style={{color:"red",fontWeight:"1000",cursor:"pointer"}}>Log In</span>
                            </h1>
                        </div>
                    </div>
                    </Container>
                </Grid>
               </Grid>
            </div>
        </div>
        </div>
    )
 }
export default Registration;