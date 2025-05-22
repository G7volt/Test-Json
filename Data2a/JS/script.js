//"Datos representa al JSON"
function CrearTabla(datos){
    let tabla = `
     <!--"overflow-auto": Hace que la tabla tenga un scroll hacia los lados si la pantalla es muy pequeña-->
    <table role="grid" class="overflow-auto">
        <thead><!--Encabezado de la tabla-->
            <tr><!--para crear una fila de la tabla-->
                <th>Nombre</th>
                <th>Carnet</th>
                <th>Rol</th>
                <th>Seccion</th>
            </tr>
        </thead>

        <tbody>
            
       
    `;

    datos.forEach(integrante => {
        tabla += `
           <tr>
               <td>${integrante.nombre}</td>
               <td>${integrante.carnet}</td>
               <td>${integrante.rol}</td>
               <td>${integrante.Seccion}</td>
               </tr>
        `;
    });


    tabla += `
            </tbody>
        </table>
    `;

    //
    document.getElementById("tabla").innerHTML = tabla
}

CrearTabla(integrantes);
