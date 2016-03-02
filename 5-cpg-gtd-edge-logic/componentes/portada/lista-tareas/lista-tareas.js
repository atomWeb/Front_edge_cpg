import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import filaTarea from 'componentes/portada/lista-tareas/fila-tarea/fila-tarea'

import moduloservicioTareas from 'servicioTareas' //este es el js servicioTareas.js

const raiz ="./componentes/portada/"
const nombreComponente = 'listaTareas'
const nombreFichero = 'lista-tareas'

import controladorTareas from 'componentes/portada/lista-tareas/controlador-tareas'

angular.module(nombreComponente, ['ngMaterial', filaTarea, moduloservicioTareas])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreFichero}/${nombreFichero}.html`,
        // controller : function(servicioTareas){
        //     this.tareas = servicioTareas.tareas
        // }
        controller: controladorTareas
    })


export default nombreComponente