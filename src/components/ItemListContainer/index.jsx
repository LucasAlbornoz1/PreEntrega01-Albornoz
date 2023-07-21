import React from "react";
import { useState } from "react";
import "../ItemListContainer/style.css"


function nombreAutor(){
    const [autor, setAutor] = useState({
    name: "Lucas Albornoz",
    edad: 28,
});    
function cambiarAutor() {
    setAutor({
        ...autor,
        name:"No existe otro creador",
    })
} 

return (
    <><h1>{autor.name}</h1>
    <button onClick={cambiarAutor}> Ver otros creadores </button></>
  )
}
export default nombreAutor;
