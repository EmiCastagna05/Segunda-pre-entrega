class Alumnos {
    constructor(nombre, apellido, notaFinal) {
        this.nombre = nombre
        this.apellido = apellido
        this.notaFinal = notaFinal
    }
}

let vali = 0
const arrayAlumnos = []
const aprobados = []
const desaprobados = []

do {
    let menu = parseInt(prompt('1- Añadir alumno \n2- Mostrar alumnos aprobados \n3- Mostrar alumnos desaprobados \n0- Salir'))
    while (menu > 3 || menu < 0) {
        alert('La opcion seleccionada no existe. Seleccione una opcion existente')
        menu = parseInt(prompt('1- Añadir alumno \n2- Mostrar alumnos aprobados \n3- Mostrar alumnos desaprobados \n0- Salir'))
    }

    if (menu === 1) {   // añadir alumno
        // igualo vali a 0 para mantenerme dentro del do while
        vali = 0

        // pido los datos del alumno
        let nombre = prompt('Ingrese el nombre del alumno')
        let apellido = prompt('Ingrese el apellido del alumno')

        let trim1 = parseInt(prompt('Ingrese la nota del primer trimestre'))
        while (trim1 > 10 || trim1 < 1) {   // valido la nota del primer trimestre
            alert('La nota ingresada no es valida. Ingrese una nota entre 1 y 10')
            trim1 = parseInt(prompt('Ingrese la nota del primer trimestre'))
        }

        let trim2 = parseInt(prompt('Ingrese la nota del segundo trimestre'))
        while (trim1 > 10 || trim1 < 1) {   // valido la nota del segundo trimestre
            alert('La nota ingresada no es valida. Ingrese una nota entre 1 y 10')
            trim2 = parseInt(prompt('Ingrese la nota del primer trimestre'))
        }

        let trim3 = parseInt(prompt('Ingrese la nota del tercer trimestre'))
        while (trim1 > 10 || trim1 < 1) {   // valido la nota del tercer trimestre
            alert('La nota ingresada no es valida. Ingrese una nota entre 1 y 10')
            trim3 = parseInt(prompt('Ingrese la nota del primer trimestre'))
        }
        let promedio = (trim1 + trim2 + trim3) / 3

        // guardo los datos del alumno en un nuevo objeto y este objeto en un array
        const alumno = new Alumnos(nombre, apellido, Math.round(promedio))
        arrayAlumnos.push(alumno)

        // separo los alumnos aprobados de los desaprobados
        if (promedio >= 6) {
            aprobados.push(alumno)
        } else {
            desaprobados.push(alumno)
        }

        alert(alumno.nombre + ' ' + alumno.apellido + '. Nota final: ' + alumno.notaFinal)
    }
    else if (menu === 2) {  // mostrar alumnos aprobados
        for (const iterator of aprobados) {
            alert(iterator.nombre + ' ' + iterator.apellido + '. Nota final: ' + iterator.notaFinal)
        }
    }
    else if (menu === 3) {  // mostrar alumnos desaprobados
        for (const iterator of desaprobados) {
            alert(iterator.nombre + ' ' + iterator.apellido + '. Nota final: ' + iterator.notaFinal)
        }
    }

    else if (menu === 0) {
        // igualo vali a 1 para salir del do while y terminar el programa
        vali = 1
        alert('Aprobaron ' + aprobados.length + ' alumnos y desaprobaron ' + desaprobados.length + ' alumnos')
    }
} while (vali != 1)

