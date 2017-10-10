export default {
    input: 'dist/index.js',
    sourceMap: false,
    output: {
      file: 'dist/bundles/azure-mobile-app-services-client.umd.js',
      format: 'umd'      
    },
    name: 'azure.mobile.app.services.client',
    globals: {
      '@angular/core': 'ng.core',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    },
    external: ['@angular/core']
  }