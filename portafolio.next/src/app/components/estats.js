import style from "./estats.module.css";

function Est({p1,p2}){
    return(
        <div className={style.box}>
                <p>{p1}</p>
                <p>{p2}</p>
            </div>
    )
}
export default Est;