import React from 'react'
import { useFecthCurso } from '../../hooks/useFecthCurso'
import {Link} from 'react-router-dom'
import { deleteCurso } from '../../helpersAdmin/deleteCurso';
export const DashMostrarCurso = () => {
     const {dataCurso:cursos}= useFecthCurso();
     const eliminarCurso =(id)=>{
      if(window.confirm(`¿Seguro que quieres eliminar al curso ID:${id}?`)){
        window.location.reload();
        return deleteCurso(id);
      }
     }
    return (
        <div className="Container_curso">
           {    cursos?.map(el=>
                <>
                 <div className="categoria_cursos">
                  <div className="ID_Curso">
                         <img src="../assets/img/profesor1.jpg"></img>
                          <p><span className="negr_curso">ID: </span>{el.id}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Titulo:</span>  {el.nombre}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Descripción</span> : {el.descripcion || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p><span className="negr_curso">Duración:</span>  {el.duracion || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Categoria: </span> {el.categoria || "----"}</p>
                        </div>
                        <div className="nombre_Categoria">
                          <p> <span className="negr_curso">Precio: </span> {el.precio || "----"}</p>
                        </div>        
                        <div className="botones_curso">
                        <Link to={`/admin/cursos/contenido/${el.id}`}><button className="btn_curso" id="masContenidoCurso">+ Contenido</button></Link>   
                         <Link to={`/admin/cursos/editar/${el.id}`}><button className="btn_curso" id="btn_editarCurso" >Editar</button></Link>   
                         <button className="btn_curso" id="btn_eliminarCurso" onClick={()=>eliminarCurso(el.id)}>Eliminar</button>    
                    </div>
                  </div>
               </>
               )
           }
        </div>
    )
}
