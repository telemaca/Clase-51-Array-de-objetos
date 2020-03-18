// // Hacer ejercicios de empleades acá
// empleadesQueHacenGuardia, que devuelva un array con todes les empleades que hacen guardia
const empleadesQueHacenGuardia = empleades => {
    const porHacenGuardia = empleade => empleade.haceGuardia
    return empleades.filter(porHacenGuardia)
}

// empleadesPorPais, que tome por parámetro el nombre de un país y devuelva un array con todes les empleades que son de dicho país
const empleadesPorPais = (pais, empleades) => {
    const porPais = empleade => empleade.pais === pais
    return empleades.filter(porPais)
}

// empleadesPorArea, que tome por parámetro el nombre de un área y devuelva un array con todes les empleades que son de dicha área
const empleadesPorArea = (area, empleades) => {
    const porArea = empleade => empleade.area === area
    return empleades.filter(porArea)
}

// empleadesConSueldoMayorA, que tome por parámetro un número como sueldo y devuelva un array con todes les empleades que tengan un sueldo mayor a dicho número, ordenados de menor a mayor según sueldo
const empleadesConSueldoMayorA = (sueldo, empleades) => {
    const porSueldoMAyorA = empleade => empleade.sueldo > sueldo
    return empleades.filter(porSueldoMAyorA)
}

// empleadesConMasLenguajes, que tome por parámetro un número y devuelva un array con aquelles empleades que sepan más lenguajes que dicho número
const empleadesConMasLenguajes = (cantidadDeLenguajes, empleades) => {
    const porCantidadDeLenguajes = empleade => empleade.lenguajes.length > cantidadDeLenguajes
    return empleades.filter(porCantidadDeLenguajes)
}

// sueldoPromedioEmpleades, que devuelva el sueldo promedio de todos los empleados
const sueldoPromedioEmpleades = empleades => {
    const sueldos = empleade => empleade.sueldo
    const aPromedioDeSueldos = (sumaParcial, actual) => sumaParcial + actual
    return empleades.map(sueldos).reduce(aPromedioDeSueldos) / empleades.length
}

// sueldoPromedioPorSeniority, que tome por parámetro un seniority, y devuelva el sueldo promedio de todes les empleades que tengan ese seniority
const sueldoPromedioPorSeniority = (seniority, empleades) => {
    const porSeniority = empleade => empleade.seniority === seniority
    return sueldoPromedioEmpleades(empleades.filter(porSeniority))
}

// buscarEmpleades, que tome por parámetros area, puesto y seniority, y devuelva un array con les empleades que pertenezcan a dicha area, puesto y seniority
const buscarEmpleades = (area, puesto, seniority, empleades) => {
    const porArea = empleade => empleade.area === area
    const porPuesto = empleade => empleade.puesto === puesto
    const porSeniority = empleade => empleade.seniority === seniority

    return empleades.filter(porArea).filter(porPuesto).filter(porSeniority)
}

// empleadeSabeLenguaje, que tome por parámetro un objeto empleade (elemento del array empleades) y un lenguaje y devuelva true si dicho empleade sabe dicho lenguaje
const empleadeSabeLenguaje = (lenguajeAChequear, empleade) => empleade.lenguajes.includes(lenguajeAChequear)

// empleadesQueSabenLenguaje, que tome por parámetro un lenguaje y devuelva todes les empleades que saben dicho lenguaje (usar la función anterior)

const empleadesQueSabenLenguaje = (lenguajeAChequear, empleades) => {
    const porLenguaje = empleade => empleadeSabeLenguaje(lenguajeAChequear, empleade)
    return empleades.filter(porLenguaje)
}

// empleadesQueSabenLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan todos esos lenguajes

// empleadesQueSabenAlgunosLenguajes, que tome por parámetro un array de lenguajes y devuelva un array con aquelles empleades que sepan al menos uno de esos lenguajes

// empleadesConMejorSueldo, que devuelva un array con los 10 mejores empleades pagos (investigar metodo sort)

// obtenerTitulosCompletos, que devuelva un array donde cada elemento es un string con la forma "nombre, puesto seniority, area", p.ej.: "Nadia Conrad, Senior Backend Developer, Desarrollo", habiendo un elemento por cada empleade (usar map)
const obtenerTitulosCompletos = empleades => {
    const titulosCompletos = empleade => `${empleade.nombre}, ${empleade.seniority} ${empleade.puesto}, ${empleade.area}`
    return empleades.map(titulosCompletos)
}

// obtenerInfoPersonal, que devuelva un array donde cada elemento es un objeto con las propiedades
// nombre
// pais
// edad habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)
const obtenerInfoPersonal = empleades => {
    const infoPersonal = empleade => {
        const infoEspecifica = {}
        infoEspecifica.nombre = empleade.nombre
        infoEspecifica.pais = empleade.pais
        infoEspecifica.edad = empleade.edad
        return infoEspecifica
    }
    return empleades.map(infoPersonal)
}

// obtenerInfoPuestos, que devuelva un array donde cada elemento es un objeto con las propiedades
// nombre
// area
// puesto
// seniority habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original (usar map)
const obtenerInfoPuestos = empleades => {
    const infoPuestos = empleade => {
        const infoEspecifica = {}
        infoEspecifica.nombre = empleade.nombre
        infoEspecifica.area = empleade.area
        infoEspecifica.puesto = empleade.puesto
        infoEspecifica.seniority = empleade.seniority
        return infoEspecifica
    }
    return empleades.map(infoPuestos)
}


// obtenerInfoSeniority, que devuelva un array donde cada elemento es un objeto con las propiedades
// nombre
// seniority
// sueldo
// cantidadLenguajes habiendo un elemento por cada empleade, y donde cada propiedad se corresponde a la propiedad del objeto original, eecepto cantidadLenguajes, que es un número indicando la cantidad de lenguajes que sabe (usar map)
const obtenerInfoSeniority = empleades => {
    const infoSeniority = empleade => {
        const infoEspecifica = {}
        infoEspecifica.nombre = empleade.nombre
        infoEspecifica.seniority = empleade.seniority
        infoEspecifica.sueldo = empleade.sueldo
        infoEspecifica.lenguajes = empleade.lenguajes.length
        return infoEspecifica
    }
    return empleades.map(infoSeniority)
}

// obtenerInfoPagos, que devuelva una array donde cada elemento es un objeto con las propiedades
// nombre
// sueldoBruto
// obraSocial
// jubilacion
// sueldoNeto habiendo un elemento por cada empleade, donde
// sueldoBruto es el sueldo del objeto original
// obraSocial es el 3% del sueldoBruto
// jubilacion es el 11% del sueldoBruto
// sueldoNeto es el resultado de restarle a sueldoBruto los valores de obraSocial y jubilacion
const obtenerInfoPagos = empleades => {
    const infoPagos = empleade => {
        const infoEspecifica = {}
        infoEspecifica.nombre = empleade.nombre
        infoEspecifica.sueldoBruto = empleade.sueldo
        infoEspecifica.obraSocial = Math.round(empleade.sueldo * .03)
        infoEspecifica.jubilacion = Math.round(empleade.sueldo *.11)
        infoEspecifica.sueldoNeto = empleade.sueldo - infoEspecifica.obraSocial - infoEspecifica.jubilacion
        return infoEspecifica
    }
    return empleades.map(infoPagos)
}


// obtenerEstadisticasSeniority que devuelva un objeto donde cada propiedad es un seniority y el valor la cantidad de empleades con dicho seniority
const obtenerEstadisticasSeniority = empleades => {
    const porSeniority = (resultadosParciales, empleade) => {
        resultadosParciales[empleade.seniority] = resultadosParciales[empleade.seniority] +1 | 1
        return resultadosParciales
    }
    return empleades.reduce(porSeniority, {})
}


// errorEnProduccion, que ponga en true la propiedad haceGuardia de todos los empleados
const errorEnProduccion = empleades => {
    const guardiaATrue = empleade => {
    empleade.nombre
    empleade.pais
    empleade.edad
    empleade.area
    empleade.puesto
    empleade.seniority
    empleade.sueldo
    empleade.haceGuardia = true
    empleade.lenguajes
    return empleade
    }
    return empleades.map(guardiaATrue)
}

// subirDeCategoria, que tome como parámetro un objeto empleade. Si diche empleade no tiene un seniority "Senior", cambiar el valor de su propiedad seniority con el siguiente que le corresponde en orden ("Trainee" -> "Junior" -> "Semisenior" -> "Senior"), y le incremente en 10000 el sueldo
const subirDeCategoria = empleade => {
   switch (empleade.seniority) {
        case "Trainee":
            empleade.seniority = "Junior"
            empleade.sueldo += 10000
            return empleade
        case "Junior":
            empleade.seniority = "Semisenior"
            empleade.sueldo += 10000
            return empleade
        case "Semisenior":
            empleade.seniority = "Senior"
            empleade.sueldo += 10000
            return empleade
        default:
            return empleade
   }
}
console.log(subirDeCategoria(empleades[0]))

// agregarTecnologias, que agregue a todos los objetos empleades la propiedad tecnologías,que es un array conteniendo los valores "GIT" y "Node.js"

// // obtenerEstadisticasLenguajes que devuelva un objeto donde cada propiedad es un lenguaje y el valor la cantidad de empleades que saben dicho lenguaje