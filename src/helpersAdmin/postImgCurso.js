import React from 'react'

export const postImgCurso = async (fd) => {
    if(!localStorage.getItem("token")) return alert ("Sign up")
    const {token} = JSON.parse(localStorage.getItem("token"));

    console.log("fd",fd.get("imagen")); 
     let config ={
        method:"POST",
        enctype:"multipart/form-data",
        headers:{
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
        body: JSON.stringify(fd)
     }
   try{    
    const respuesta = await fetch(`http://localhost:3001/uploadImgCurso`,config)
    const res = await respuesta.json();
    (!res.ok) ? alert("There was a mistake") : alert("Added Image")
    }catch{
  console.log(); 
  }
}
