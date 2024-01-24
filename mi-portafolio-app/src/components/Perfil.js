import React from "react";
import '../styles/Perfil.css';
import Imagen from "./Imagen";

function Perfil(){
    
    return(
        <div class="main">
        <div class="name">
            <div class="principal-picture">
                <Imagen
                    value={require(`../image/perfil.jpeg`)}
                />
            </div>
            <div class="separacion">
            <div class="title-name">
                <h1>JuanJC</h1>

            </div>
            <div class="cont">
                <p>Super Junior Creador Server</p>
            </div>
            <div class="redes">
                <a href="https://github.com/Nacho123122">
                <Imagen
                    value={require(`../icons/github.svg`)}
                />
                </a>
                <a href="https://twitter.com/JuanJim05433363">
                <Imagen
                    value={require(`../icons/twitter.svg`)}
                />
                </a>
                <a>
                <Imagen
                    value={require(`../icons/linkedin.svg`)}
                />
                </a>
                <a>
                <Imagen
                    value={require(`../icons/youtube.svg`)}
                />
                </a>
            </div>
            </div>
        </div>
        <div class="cv">
            <div class="box">
                <p>1</p>
                <p>Month of experience</p>
            </div>
            <div class="box">
                <p>2</p>
                <p>Completed projects</p>
            </div>
            <div class="box">
                <p>1</p>
                <p>Satisfied customer</p>
            </div>
        </div>
        <div class="button">
            <div class="download" >
                <button>Download CV</button>
            </div>
            <div class="medio">
            </div>
            <div class="Contac">
                <a href="https://wa.me/59163225104"><button>Contact me</button></a>
            </div>
        </div>
        <div class="skills">
            <div class="port">
                <p>Portafolio</p>
            </div>
            <div class="ski">
                <p>Skills</p>
            </div>
            
        </div>
        
        <div class="page">
            <div class="box-blue">
                <div class="h2">
                    <h2>Exam page design</h2>
                </div>
                
                <div class="box-content">
                    <p>created with html and css</p>
                </div>
            
            </div>
            <div class="figure">
                <Imagen
                    value={require(`../image/ej1.jpeg`)}
                />
            </div>
            <div class="box-blue">
                <div class="h2">
                    <h2>View on Cell Phone</h2>
                </div>
            </div>
            <div class="figure">
            <Imagen
                    value={require(`../image/ej3.jpeg`)}
                />
            </div>
            
           
        </div>
        
    </div> 
    
    );
}

export default Perfil;