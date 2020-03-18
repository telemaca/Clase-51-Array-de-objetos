// // Hacer ejercicios de artistas acá
// artistasSolistas, que tome por parámetro un array de artistas y devuelva un array con les artistas que sean solistas

const artistasSolistas = artistas => {
    const esSolista = artista => artista.solista
    return artistas.filter(esSolista)
}


// artistasPorEdad, que tome un parámetro "edad" y un array de artistas y devuelva un array con les artistas que tengan dicha edad, ordenados de menor a mayor según la edad
const artistasPorEdad = (edad, artistas) => {
    const tieneEdad = artista => artista.edad === edad
    return artistas.filter(tieneEdad)
}

// cantidadDeArtistasPorInstrumento, que tome un parámetro "instrumento" y devuelva un objeto donde cada "instrumetno" es una propiedad y su valor la cantidad de artistas que tocan dicho instrumento
const cantidadDeArtistasPorInstrumento = (artistas) => {
    const tocaInstrumento = (datosParciales, artista) => {
        datosParciales[artista.instrumento] = datosParciales[artista.instrumento] + 1 | 1
        return datosParciales
    }
    return artistas.reduce(tocaInstrumento, {})
}

// cantidadDeArtistasPorGenero, que tome por parámetro un array de artistas y devuelva un objeto donde cada "género" es una propiedad y su valor la cantidad de artistas de dicho género
const cantidadDeArtistasPorGenero = (artistas) => {
    const porGenero = (datosParciales, artista) => {
        datosParciales[artista.genero] = datosParciales[artista.genero] + 1 | 1
        return datosParciales
    }
    return artistas.reduce(porGenero, {})
}

// artistasConMasDiscosQue, que tome por parámetro "cantidadDeDiscos" y un array de artistas y devuelva un array con les artistas que tiene más de esa cantidad de discos, ordenados de mayor a menor según cantidad de discos
const artistasConMasDiscosQue = (cantidadDeDiscos, artistas) => {
    const porMasDiscos = (artista) => artista.discos.length > cantidadDeDiscos
    const mayorAMenor = (a, b) => b.discos.length - a.discos.length
    return artistas.filter(porMasDiscos).sort(mayorAMenor)
}

// artistasConDiscoEnAnio, que tome por parámetro un parámetro "anio", y devuelva true un array con los artistas que tengan publicado al menos un disco en dicho año
const artistasConDiscoEnAnio = (anio, artistas) => {
    const tieneAnio = disco => disco.anioLanzamiento === anio
    const porDiscoEnAnio = artista =>  {
        const resultado = artista.discos.filter(tieneAnio)
        return resultado.length !== 0
    }
    return artistas.filter(porDiscoEnAnio)
}

// artistaConMasEntradasVendidas, que tome por parámetro un array de artistas y devuelva el objeto artista que vendió más entradas en su último recital

// artistaConMayorRecaudacion, que tome por parámetro un array de artistas y devuelva el objeto artista que más recaudó en su último recital (entradasVendidas * costoEntradas)

// artistaConMasCopias, que devuelva el objeto artista que más copias de discos en total vendió