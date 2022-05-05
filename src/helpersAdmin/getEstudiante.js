import React from 'react'

export const getEstudiante = async() => {
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
    const url = "http://localhost:3001/getEstudiante";
    const res =await fetch(url,config);
    const students = await res.json();
    const student = students.map(item=>{
       return { 
           id : item.id_student,
           name: item.name,
           lastname:item.lastname,
           email:item.email,
           role:item.role,
           id_person:item.id_person,
       }
    })
    return student
}
