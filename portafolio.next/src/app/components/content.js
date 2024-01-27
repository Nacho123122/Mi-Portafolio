import style from "./content.module.css";

function Tent({h2,p}){
    return(
        <div className={style.box}>
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    )
}
export default Tent;