function cargarEstudiantes() {
    fetch('data/estudiantes.json')
        .then(respuesta => respuesta.json())
        .then(estudiantes => {
            // Selecciona el <tbody> de la tabla el espacio vacio que deje
            const tbody = document.querySelector('#estudiantes-table tbody');

            
            //console.log('Datos de estudiantes:', JSON.stringify(estudiantes));
            console.log('Datos de estudiantes:', estudiantes);



            // Agrega una fila para cada estudiante
            estudiantes.forEach(estudiante => {
                // Crea una nueva fila
                const contenido = document.createElement('tr');

                // Agrega celdas a la fila
               contenido.innerHTML = `
                    <td>${estudiante.id}</td>
                    <td>${estudiante.nombre}</td>
                    <td>${estudiante.casa}</td>
                `;

                // Agrega la fila al <tbody>
                tbody.appendChild(contenido);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
       
}

cargarEstudiantes();
