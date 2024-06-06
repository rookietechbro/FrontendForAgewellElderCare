import style from "./style.module.css"
import image from "../../components/assets/icons/girlcaregiver/istockphoto-1404673415-612x612.jpg"
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

const GetStartedPage=()=>{
    const navigate = useNavigate();
    return(
        <div>
            <div>
                <div className={style.background} style={{display:"flex", justifyContent:"center", alignItems:"center",marginTop:"80px"}}>

                    <div style={{marginBottom:"150px"}}>
                        <img src={image} style={{width: "800px", height: "600px"}}/>
                        <h1 style={{fontSize: "2.5rem",fontWeight:"1000",marginLeft:"260px"}}>
                            REGISTER AS A
                        </h1>
                        <div style={{display: "flex", gap:"50px",justifyContent:"center", alignItems:"center"}}>
                            <Button onClick={()=>navigate("/registration_careGiver")} variant="contained" style={{fontSize:"2.0rem",color: "white", borderRadius:"5px", backgroundColor: " #070a3a",padding:"10px 35px"}}>
                                Care Giver
                            </Button>
                            <Button onClick={()=>navigate("/register")} variant="contained" style={{fontSize:"2.0rem",color: "white", borderRadius:"5px", backgroundColor: " #070a3a",padding:"10px 10px"}}>
                                Senior Citizen
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStartedPage;