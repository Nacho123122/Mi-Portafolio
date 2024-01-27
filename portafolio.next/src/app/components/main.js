"use client"
import { useEffect,useState } from "react";
import style from "./main.module.css";
import Image from "next/image";
import Prin from "./image-prin";
import Red from "./image-redes";
import Est from "./estats";
import Down from "./boton";
import Con from "./contac";
import Second from "./image-second";
import Tent from "./content";

function Main(){
    return(
        <div className={style.main}>
        <div className={style.name}>
                <Prin/>
            <div className={style.separacion}>
            <div className={style.title_name}>
                <h1>JuanJC</h1>
            </div>
            <div className={style.cont}>
                <p>Super Junior UI/UX</p>
            </div>
            
            <div className={style.redes}>
                <a href="https://github.com/Nacho123122">
                    <Red 
                    valor={"/images/github.jpeg"}/>
                </a>
                <a href="https://twitter.com/JuanJim05433363">
                <Red 
                    valor={"/images/twiter.jpeg"}/>
                </a>
                <a href="https://www.linkedin.com/in/juan-ignacio-jimenez-condori-619a362b0/">
                <Red 
                    valor={"/images/linkedin.jpeg"}/>
                </a>
                <a href="https://www.youtube.com/channel/UC-17Zxgut0WcW-KnwZ3KMYw">
                <Red 
                    valor={"/images/youtube.jpeg"}/>
                </a>
            </div>
            </div>
        </div>
        
        <div className={style.cv}>
            <Est 
            p1={"1"}
            p2={"Month of experience"}
            />
            <Est 
            p1={"2"}
            p2={"Completed projects"}
            />
            <Est 
            p1={"1"}
            p2={"Satisfied customer"}
            />           
        </div>
        <div className={style.button}>
            <div className={style.download}>
                <Down
                val={"Donwload Cv"}      
                />
            </div>
            <div className={style.Contac}>
                <a href="https://wa.me/59163225104"><Con val={"Contac me"}/></a>
            </div>
            
            <div className={style.port}>
                <p>Portafolio</p>
            </div>
            <div className={style.ski}>
                <p>Skills</p>
            </div>    
        
        </div>
        
        <div className={style.page}>

                <Tent
                h2={"Exam page design"}
                p={"created with html and css"}
                />
                <Second
                val={"/images/ej1.jpeg"}
                />
            <Tent
                h2={"View in cell phone"}
                p={"created with html and css"}
                />
            <Second
                val={"/images/ej3.jpeg"}
                />
            
           
        </div>
        
    </div>
        
    )
}
export default Main;