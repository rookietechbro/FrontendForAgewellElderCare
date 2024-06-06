import Button from "@mui/material/Button";
import style from '../heroPage/heroPage.module.css'
import screen from '../assets/icons/Screenshot.jpg'
import frontphoto from '../assets/icons/frontphoto/comrawpixel427883.jpg'

export default function HeroPage() {
    return (
        <div className={style.heroPage}>
            <div className={style.bothText}>

                    <h1 className={style.give}>Your <span style={{color:'red'}}> Loved Ones <br/></span>
                       Deserve The Gift Of A <span style={{color:'red'}}>Healthy</span>,
                        <span style={{color:'red'}}> Long Life</span>.
                    </h1>

                <div>
                <span className={style.subscribe}>Subscribe to regular care-giving services for them, <br/>starting from <span style={{color:'red'}}>N15,000</span> per month.</span>
                </div>
                <div className={style.buttonHolder}>
                    <button className={style.getStarted}>Get Started</button>
                    <button className={style.logIn}>Log In</button>
                </div>
            </div>

            <div className={style.screen}>
                {/*<img src={screen} alt={screen}/>*/}
            </div>
        </div>
    )
}