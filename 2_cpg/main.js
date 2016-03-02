// fichero principal
// importar librerias ES5 estilo ES6 
import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const appName = 'frontEdge'

angular.module(appName,['ngMaterial'])

let documentoHTML = angular.element(document)

let iniciarApp = ()=>angular.bootstrap(documentoHTML,[appName])

documentoHTML.ready(iniciarApp)