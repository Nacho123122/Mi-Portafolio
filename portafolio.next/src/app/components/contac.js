import style from "./contac.module.css";

function Con({val}){
    return(
        <button className={style.con}>{val}</button>
    )
}
export default Con;