// Hacer ejercicios de estudiantes acá
// estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido
const estudiantesPorHechizo = (estudiantes, hechizo) => {
    const porHechizo = estudiante => estudiante.hechizoPreferido === hechizo;
    return estudiantes.filter(porHechizo)
}


// estudiantesConMasAmiguesQue, que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual a el número pasado por parámetro.
const estudiantesConMasAmiguesQue = (estudiantes, x) => {
    const contarAmigues = estudiante => estudiante.amigues.length >= x
    return estudiantes.filter(contarAmigues)
}

// estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes cuyo familiar sea alguno de los incluidos en el parámetro
const estudiantesConFamiliares = (estudiantes, arrayFamiliares) => {
    const incluyeFamiliares = estudiante => arrayFamiliares.includes(estudiante.familiar)
    return estudiantes.filter(incluyeFamiliares)
}

// obtenerPromedioDeEstudiante, que tome por parámetro une estudiante (que se saca del array estudiantes) y devuelva el promedio total de todas las materias

const obtenerPromedioDeEstudiante = estudiante => {
    const promedios = materia => materia.promedio
    const sumaDePromedios = (sumaParcial, actual) => sumaParcial + actual
    
    return estudiante.materias.map(promedios).reduce(sumaDePromedios) / estudiante.materias.length
}

// estudiantesConPromedioMayorA, que tome por parámetro un número y un array de estudiantes y devuelva un array con les estudiantes que tengan un promedio total mayor a dicho número (usar la función anterior)
const estudiantesConPromedioMayorA = (x, estudiantes) => {
    const conPromedioMayorA = estudiante => obtenerPromedioDeEstudiante(estudiante) > x 
    return estudiantes.filter(conPromedioMayorA)
}


// mejoresEstudiantesPorCasa, que tome por parámetro el nombre de una casa y un array de estudiantes y devuelva les estudiantes de dicha casa cuyo promedio total es mayor a 6
const mejoresEstudiantesPorCasa = (casa, estudiantes) => {
    const porCasa = estudiante => estudiante.casa === casa
    const porPromedio = estudiante => obtenerPromedioDeEstudiante(estudiante) > 6
    return estudiantes.filter(porCasa).filter(porPromedio)
}

// console.log(mejoresEstudiantesPorCasa("Ravenclaw", estudiantes))

// // casaConMejoresEstudiantes, que tome por parámetro un array de estudiantes y devuelva el nombre de la casa que tiene más cantidad de estudiantes con promedio total mayor a 6 (usar la función anterior)
// const casaConMejoresEstudiantes = estudiantes => {
//     const ravenclawCantidad = mejoresEstudiantesPorCasa("Ravenclaw", estudiantes)
//     const gryffindorCantidad = mejoresEstudiantesPorCasa("Gryffindor", estudiantes)
//     const slytherinCantidad = mejoresEstudiantesPorCasa("Slytherin", estudiantes)
//     const hufflepuffCantidad = mejoresEstudiantesPorCasa("Hufflepuff", estudiantes)
//     // const mejoresEstudiantesPorCasa = {
//     //     ravenclaw: ravenclawCantidad,
//     //     gryffindor: gryffindorCantidad,
//     //     slytherin: slytherinCantidad.lengt,
//     //     hufflepuff: hufflepuffCantidad
//     // }
    
//     return mejoresEstudiantesPorCasa
// }
// console.log(casaConMejoresEstudiantes(estudiantes))

//estudiantesPorMateriaAprobada, que tome por parámetro el nombre de una materia y un array de estudiantes y devuelva una array con les estudiantes que tienen en dicha materia un promedio superior a 6
const estudiantesPorMateriaAprobada = (materiaAChequear, estudiantes) => {
    const tieneMateria = materia => materia.nombre === materiaAChequear && materia.promedio > 6
    const porMateriaAprobada = estudiante => {
        const resultado = estudiante.materias.filter(tieneMateria)
        return resultado.length !== 0
    } 
    return estudiantes.filter(porMateriaAprobada)
}


// obtenerInfoResumida, que tome por parámetro un array de estudiantes y devuelva un array con objetos, habiendo un objeto por estudiante, donde cada objeto tiene las siguientes propiedades: nombre, casa, promedio, amigues (cantidad)

const obtenerInfoResumida = estudiantes => {
    const obtenerInfoEspecifica = estudiante => {
        const infoEspecifica = {}
        infoEspecifica.nombre = `${estudiante.nombreCompleto.nombre} ${estudiante.nombreCompleto.apellido}`
        infoEspecifica.casa = estudiante.casa
        infoEspecifica.promedio = obtenerPromedioDeEstudiante(estudiante)
        infoEspecifica.amigues = estudiante.amigues.length
        return infoEspecifica
    }
    return estudiantes.map(obtenerInfoEspecifica)
}

// cantidadDeEstudiantesPorCasa, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las casas como propiedades y la cantidad de estudiantes por casa (no debe contar amigues)
const cantidadDeEstudiantesPorCasa = estudiantes => {
    const contarEstudiantes = (datosParciales, estudiante) => {
        datosParciales[estudiante.casa] = datosParciales[estudiante.casa] + 1 || 1
        return datosParciales
    }
    return estudiantes.reduce(contarEstudiantes, {})
}

// cantidadDeEstudiantesPorMateriaAprobada, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y la cantidad de estudiantes que aprobaron dicha materia (promedio superior a 6)
const cantidadDeEstudiantesPorMateriaAprobada = estudiantes => {
    const aNombreDeMateria = materia => materia.nombre

    const materiaAprobada = materia => materia.promedio > 6

    const aMateriasAprobadas = (resultadoParcial, materia) => { // * string del nombre
        resultadoParcial[materia] = resultadoParcial[materia] + 1 || 1
        return resultadoParcial
    }

    const aprobadesPorMateria = (totalGeneralParcial, estudiante) =>
        estudiante.materias           // obtenemos el array de materias
            .filter(materiaAprobada)    // filtramos las materias aprobadas
            .map(aNombreDeMateria)      // nos quedamos con un array con los 
            // nombres de las materias
            .reduce(aMateriasAprobadas, totalGeneralParcial)

    return estudiantes.reduce(aprobadesPorMateria, {}) 
}

// console.log(cantidadDeEstudiantesPorMateriaAprobada(estudiantes))

// // promedioPorMateria, que tome por parámetro un array de estudiantes y devuelva un objeto con los nombres de las materias como propiedades y el promedio total de dicha materia entre todes les estudiantes (suma de todos los promedios divido la cantidad de estudiantes)

// // familiarPreferido, que tome por parámetro un array de estudiantes y devuelva el familiar que más estudiantes tienen

// const familiarPreferido = estudiantes => {
//     const contarFamiliares = (datosParciales, estudiante) => {
//         datosParciales[estudiante.familiar] = datosParciales[estudiante.familiar] + 1 || 1
//         return datosParciales
//     }

//     // const obtenerFamiliarPreferido = familiares => {
//     //     const numeroMayor = familiares[familiar]
//     // }

//     return estudiantes.reduce(contarFamiliares, {})
//     // .filter(obtenerFamiliarPreferido)
// }

// console.log(familiarPreferido(estudiantes))