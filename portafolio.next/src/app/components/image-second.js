import style from "./image-second.module.css";
import Image from "next/image";
function Second({val}){
    return(
        <div className={style.second}>
            <Image src={val} width={362} height={226} />
            
        </div>
    )
}
export default Second;