import React, { useState } from 'react'
import { useParams } from 'react-router'
import { postEstudiante } from '../../helpersAdmin/postEstudiante'
import { postSection } from '../../helpersAdmin/postSection'
import { useFecthCursoID } from '../../hooks/useFecthCursoID'

export const DashAddSection = () => {
    const [form, setForm] = useState({})
    const {id} = useParams();
    const {dataCursoID:curso} =  useFecthCursoID(id);

    const handleSubmit =(e)=>{
       setForm({
           ...form,id_curso:curso[0]?.id,
          [e.target.name]:e.target.value,
       })
    }
   
    const AddSeccion =(e)=>{
       e.preventDefault();
    //    window.location.reload();
       postSection(form,id);
    }

    const AddVolver =(e)=>{
        e.preventDefault();
        window.location.reload();
    }
    return (
        <div >
            <p className="titulo_AddSeccion" >Agregar Sección</p>
            <form className="form_addSeccion">
                <label for="nom_modulo">Título</label>
                <input id="nom_modulo" name="nombre" type="text" onChange={handleSubmit}/>
                <button className="btn-default" id="btn_AddSeccion" type="submit" onClick={AddSeccion}>Agregar</button>
                <button className="btn-default" id="btn_AddVolver" type="submit" onClick={AddVolver}>volver</button>
            </form>
        </div>
    )
}
