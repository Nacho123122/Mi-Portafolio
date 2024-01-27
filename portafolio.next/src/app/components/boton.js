import style from "./boton.module.css"

function Donw({val}){
    const descarga=()=>{
        alert("Descargando Archivo")
    }
    return(
        <button className={style.boton} onClick={descarga}>{val}</button>
    )
}

export default Donw;