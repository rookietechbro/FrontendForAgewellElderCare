import {Container, Grid, Typography}  from "@mui/material"
import {Formik,Form,Field} from "formik";
import Button from '@mui/material/Button';
import agewellimage1 from '../assets/icons/agewellimage1.png';
import style from "../header/header.module.css"
import {useNavigate} from "react-router-dom";
import ApiService from "../ApiService";

const initialValue = {
    email:"",
    password:"",

}


const Login = () => {
    const navigate = useNavigate();

    const onsubmit = async (value) => {
        console.log("registration: ",value)
        const message = localStorage.getItem("error")
        try {
            const response = await ApiService.login(value)
            if(response.data.message === message)
                console.log("You have logged: ",response)
                 navigate("/")
        }catch (e) {
            alert("Invalid credentials")
            console.log("The Error: ",e.message)

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
                <div style={{backgroundColor:"cornflowerblue",width:"1000px",paddingTop:"40px",paddingBottom:"40px",paddingLeft:"50px",borderRadius:"15px",paddingRight:"600px",display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"80px"}}>
                    <Grid container
                          justifyContent={"center"}
                          alignItems={"center"}
                          display={"flex"}
                          flexDirection={"column"}
                    >

                        <Grid item xs={12}>
                            <Typography sx={{fontSize:"2.8rem",fontWeight:"700",marginLeft:"250px",width:"1200px"}}>
                               WELCOME BACK!
                            </Typography>
                            <Container>

                                <div>
                                    <Formik initialValues={initialValue} onSubmit={onsubmit} >
                                        <Form>


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

                                            <Button type="submit" variant="contained" style={{background:" #070a3a",fontSize:"1.2rem",padding:"8px 90px",borderRadius:"15px",marginTop:"12px",marginLeft:"110px",width:"653px"}} >
                                                Sign In
                                            </Button>

                                        </Form>

                                    </Formik>
                                    <div style={{position:"relative",left:"275px"}}>
                                        <h1 style={{color:"white",fontSize:"1.3rem",width:"1000px"}}>
                                            Don't have an account? <span onClick={()=>navigate("/register")} style={{color:"red",fontWeight:"1000",cursor:"pointer"}}>Sign Up</span>
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
export default Login