import React from 'react'

export const deleteCategoria = async(id) => {
  
    if(!localStorage.getItem("token")) return alert ("registrate")
    const {token} = JSON.parse(localStorage.getItem("token"));

     let config ={
        method:"DELETE",
        headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
        },
     }
   try{    
    const response = await fetch(`http://localhost:3001/deleteCategoria/${id}`,config)
    const res = await response.json();
    (!res.ok) ? alert("There was a mistake") : alert("It was deleted correctly")
    }catch{
    console.log();
  }
}
