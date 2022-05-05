import React from 'react'

export const getCertificados = async () => {
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));
    let config ={
        method:"GET",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
    }
    const url = "http://localhost:3001/getCertificado";
    const respuesta =await fetch(url,config);
    const certificates = await respuesta.json();
    const certificate = certificates.map(item=>{
       return { 
           id_certificate : item.id_certificate,
           id_person: item.id_person,
           name_curso: item.name_curso,
           name_person: item.name,
           email:item.email,
       }
    })
    return certificate
}
