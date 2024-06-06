import style from './header.module.css';
import Button from '@mui/material/Button';
import agewellimage1 from '../assets/icons/agewellimage1.png'
import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={style.wholeBody}>
            <div className={style.header}>
                <img src={agewellimage1} alt="agewellimage1"/>
            </div>
                <nav className={style.navContainer}>
                    <div className={style.all}>
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#services">Services</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#testimonials">Testimonials</a>
                    </div>
                </nav>
                    <div className={style.log}>
                        <Button  onClick={()=> navigate("/login_start_page") } sx={{backgroundColor: '#070a3a'}} variant="contained">
                            Log In
                        </Button>
                        <Button onClick={()=> navigate("/start_page") }  sx={{color: '#070a3a',border: "1px solid #070a3a"}} variant="outlined" >
                            Get Started
                        </Button>
                    </div>
        </div>
    )
}
export default Header;

// export default  function Header(){
//
// }