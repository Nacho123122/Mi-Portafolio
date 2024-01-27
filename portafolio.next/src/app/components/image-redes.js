import Image from "next/image";

function Red({valor}){
    return(
       
            <Image src={valor} height={36} width={36}/>
    );  
}
export default Red;