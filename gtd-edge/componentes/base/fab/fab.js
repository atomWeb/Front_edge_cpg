import * as angular from 'angular'
import 'angular-material'

const raiz ='./componentes/base/'
const nombreComponente = 'fab'

angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
      templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })

export default nombreComponente