/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'dist', // 'dist',
        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs',
        'angular2-infinite-scroll': 'node_modules/angular2-infinite-scroll',
        'in-viewport': 'node_modules/in-viewport'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-in-memory-web-api': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'angular2-infinite-scroll': {
            main: 'angular2-infinite-scroll.js',
            defaultExtension: 'js'
        },
        'in-viewport': {
            main: 'in-viewport.js',
            defaultExtension: 'js'
        }

    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {
            main: 'bundles/' + pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);