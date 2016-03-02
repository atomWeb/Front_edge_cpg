import * as angular from 'angular'
import * as angularMaterial from 'angular-material'
import * as angularUiRouter from 'angular-ui-router'

import base from 'componentes/base/base'
import portada from 'componentes/portada/portada'
import tarea from 'componentes/tarea/tarea'
import configuracion from 'componentes/configuracion/configuracion'


const nombreApp = 'frontEdge'

angular.module(nombreApp, ['ngMaterial', 'ui.router', base, portada, tarea, configuracion])
  .config(($urlRouterProvider) => $urlRouterProvider.otherwise('/'))

  
let documentoHTML = angular.element(document)

let iniciarApp = () => angular.bootstrap(documentoHTML, [nombreApp])

documentoHTML.ready(iniciarApp)

// en Angular acceder al dom solo de las propiedades link y compile de las directivas
// no desde los componentes, no controladores, no servicios, no factorias, etc

// Un componente es un conjunto como maximo de 3 cosas:
// - una vista
// - un binding (por donde recibe datos de su componente padre)
// - un controller 