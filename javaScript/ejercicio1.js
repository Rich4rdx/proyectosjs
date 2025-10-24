
const estudiantes = [
 { nombre: "Ana", notas: [3.5, 4.0, 3.8], proyectoEntregado: true },
 { nombre: "Luis", notas: [2.8, 3.0, 2.5], proyectoEntregado: false },
 { nombre: "María", notas: [4.5, 4.2, 4.8], proyectoEntregado: true },
 { nombre: "Carlos", notas: [3.0, 3.1, 2.9], proyectoEntregado: false },
 { nombre: "Sofía", notas: [4.0, 3.9, 4.1], proyectoEntregado: true },
 { nombre: "Diego", notas: [2.0, 2.5, 2.8], proyectoEntregado: false },
 { nombre: "Valentina", notas: [4.8, 4.9, 5.0], proyectoEntregado: true },
 { nombre: "Andrés", notas: [3.2, 3.5, 3.4], proyectoEntregado: true },
 { nombre: "Camila", notas: [3.0, 2.7, 3.1], proyectoEntregado: false },
 { nombre: "Mateo", notas: [4.1, 4.3, 4.2], proyectoEntregado: true },
 { nombre: "Juliana", notas: [2.9, 2.8, 3.0], proyectoEntregado: false },
 { nombre: "Felipe", notas: [3.7, 3.6, 3.8], proyectoEntregado: true },
 { nombre: "Isabela", notas: [4.4, 4.6, 4.7], proyectoEntregado: true },
 { nombre: "Samuel", notas: [3.3, 3.1, 3.2], proyectoEntregado: false },
 { nombre: "Laura", notas: [2.5, 2.9, 2.7], proyectoEntregado: false },
 { nombre: "Tomás", notas: [4.2, 3.9, 4.4], proyectoEntregado: true },
 { nombre: "Natalia", notas: [3.0, 3.2, 3.1], proyectoEntregado: true },
 { nombre: "Esteban", notas: [4.0, 4.1, 4.2], proyectoEntregado: true },
 { nombre: "Daniela", notas: [2.3, 2.8, 2.6], proyectoEntregado: false },
 { nombre: "Julián", notas: [3.4, 3.6, 3.5], proyectoEntregado: true },
 { nombre: "Lucía", notas: [4.8, 4.9, 4.7], proyectoEntregado: true },
 { nombre: "Sebastián", notas: [3.9, 4.0, 3.8], proyectoEntregado: true },
 { nombre: "Carolina", notas: [2.7, 2.9, 3.0], proyectoEntregado: false },
 { nombre: "Pedro", notas: [3.5, 3.7, 3.6], proyectoEntregado: true },
 { nombre: "Martina", notas: [4.1, 4.3, 4.0], proyectoEntregado: true },
 { nombre: "Gabriel", notas: [2.6, 2.5, 2.9], proyectoEntregado: false },
 { nombre: "Sara", notas: [4.0, 3.9, 4.1], proyectoEntregado: true },
 { nombre: "Nicolás", notas: [3.1, 3.2, 3.3], proyectoEntregado: true },
 { nombre: "Elena", notas: [4.5, 4.7, 4.6], proyectoEntregado: true },
 { nombre: "Pablo", notas: [2.4, 2.8, 2.7], proyectoEntregado: false }
];


const calcularPromedio = (notas) => {
    let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma +=notas[i]
}
const promedio = suma /notas.length 
 return promedio;
} 





estudiantes.forEach( estudiantes => {

    estudiantes.promedio = calcularPromedio(estudiantes.notas);
})

console.log("lista de los estudiantes de sus promedios ");
estudiantes.forEach ( estudiantes => {
    console.log(`Nombre: ${estudiantes.nombre}`);
    console.log(`ProyectosEntregado: ${estudiantes.proyectoEntregado}`);
    console.log(`Promedio: ${estudiantes.promedio}`);
    
})


//. Filtrar los estudiantes que aprobaron (promedio mayor o igual a 3.0).


const promedioMayor = estudiantes.filter(estudiantes => estudiantes.promedio >= 3.0)


console.log( `estudiantes con promedio mayor o igual a 3.0`);

promedioMayor.forEach( estudiantes =>{
    console.log(`Nombre: ${estudiantes.nombre}`);
    console.log(`Promedio: ${estudiantes.promedio}`);
    
})



//Buscar con .find() a un estudiante específico por nombre y mostrar su información.

const estudiantes1 = estudiantes.find(estudiantes => estudiantes.nombre === "Ana")

console.log(`-------------------------`);

    console.log(`Nombre ${estudiantes1.nombre}`);
    console.log(`Promedio ${estudiantes1.promedio}`);


//Verificar con .some() si al menos un estudiante aún no ha entregado su proyecto final.

const estudiante2 = estudiantes.some(estudiantes => !estudiantes.proyectoEntregado)


if (estudiante2) {
    console.log("hay estudinates que no han entregado proyecto final");
    
    
}else{
    console.log("hay estudiante que si entregaron");
    
}

//Crear una función procesarEstudiantes(estudiantes, callback) que reciba el listado y 
// ejecute una función callback con los resultados 
// (por ejemplo, mostrar los aprobados o el mensaje final).
    

const procesarEstudiantes = (estudiantes, callback) =>{

    const aprobados = estudiantes.filter(estudiantes => estudiantes.promedio >= 3.0)
    const noAprobados = estudiantes.filter(estudiantes => estudiantes.promedio <= 3.0)
   
    

callback(aprobados,noAprobados)
}

const resultado =(aprobados,noAprobados) =>{

    console.log("estudiantes aprobados:");
    aprobados.forEach(estudiantes =>{
        console.log(`${estudiantes.nombre} , ${estudiantes.promedio.toFixed(2)}`);
        
    })

    console.log("estudiantes no aprobados");

    noAprobados.forEach(estudiantes => {
        console.log(`${estudiantes.nombre} , ${estudiantes.promedio.toFixed(2)}`);
        
    })
    
    

}

procesarEstudiantes(estudiantes,resultado)


//Usar desestructuración para extraer el nombre y promedio de cada estudiante al mostrar los resultados.


estudiantes.forEach(({nombre, promedio})=>{
    console.log(`nombre: ${nombre} , Promedio:${promedio}` );
    console.log("-------------------");
    
    
})