'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./i18n/en.js'))
        .controller('homeController', require('./controllers/home.controller'))
        .controller('serviceController', require('./controllers/service.controller'))
        .controller('scsController', require('./controllers/scs.controller'))
        .controller('tfeController', require('./controllers/tfe.controller'))
        .controller('aboutController', require('./controllers/aboutController'))
        .controller('newsController', require('./controllers/news.controller'))
        .controller('seeController', require('./controllers/see.controller'));
