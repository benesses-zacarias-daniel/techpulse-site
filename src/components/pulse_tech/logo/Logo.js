import Img from "../../img/Img";
import Log from "../../assets/logo1SF.png";
import Nome from "../../nome/Nome";
import style from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={style.area_pulse}>
            <div className={style.area_img} >
                <Img src={Log} alt={"Logo do TechPulse"} />
            </div>
            <div className={style.area_nome}>
                <h2>
                    <Nome />
                </h2>
            </div>
        </div>
    );
}

export default Logo;