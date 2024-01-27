import style from "./image-prin.module.css";
import Image from "next/image";
function Prin(){
    return(
        <div className={style.principal_picture}>
      <Image
      src="/images/perfil.jpeg"
      alt="Picture of the author"
      width={215}
      height={215}
      />
      </div>
    )
}
export default Prin;