global.SRC_FOLDER = 'src';
global.BUILD_FOLDER = 'build';
global.RELEASE_FOLDER = 'release';
global.TMP_FOLDER = 'tmp';

global.config = {
    paths: {
        src: {
            index: SRC_FOLDER + '/index.html',
            assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
            images: SRC_FOLDER + '/assets/images/**/*',
            external: 'external/**/*',
            scripts: SRC_FOLDER + '/modules/**/*.js',
            bowerStyles: [
            'bower_components/**/*.min.css',
             "bower_components/material-date-picker/app/styles/mbdatepicker.css",
             // 'external/style.css',
             // 'external/jade.css',
             // 'external/responsive.css',
             // 'external/font-awesome.min.css'
             ],
            styles: SRC_FOLDER + '/styles/app.scss',
            stylesGlob: SRC_FOLDER + '/styles/**/*.scss',
            templates: SRC_FOLDER + '/modules/**/*.html',
            templatesHTML: SRC_FOLDER + '/modules/**/*.html',
            templatesCompiled: TMP_FOLDER,
            livereload: [BUILD_FOLDER + '/**/*', '!' + BUILD_FOLDER + '/assets/**/*'],
            modules: './' + SRC_FOLDER + '/modules/index.js',
            config: SRC_FOLDER + '/modules/app/config.json',
            vendor: [
            // 'bower_components/jquery/jquery.min.js',
            // 'bower_components/bootstrap/dist/js/bootstrap.min.js',
            // 'bower_components/jquery-migrate/jquery-migrate.min.js',
            // 'bower_components/jquery-appear/build/jquery.appear.min.js',
            // 'bower_components/requirejs/require.js',
            // 'bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
            // 'bower_components/fitvids/jquery.fitvids.js',
            // 'bower_components/isotope/dist/isotope.pkgd.min.js',
            // 'bower_components/jtextillate/assets/jquery.fittext.js',
            // 'bower_components/jtextillate/assets/jquery.lettering.js',
            // 'bower_components/jtextillate/jquery.textillate.js',
            // 'bower_components/jquery.nicescroll/dist/jquery.nicescroll.min.js',
            // 'bower_components/jquery-parallax/scripts/jquery.localscroll-1.2.7-min.js',
            // 'bower_components/jquery-parallax/scripts/jquery.scrollTo-1.4.2-min.js',
            // 'bower_components/jquery-parallax/scripts/jquery.parallax-1.1.3.js',
            // 'bower_components/jquery-parallax/scripts/jquery.parallax-1.1.3.js',
            // 'bower_components/slicknav/dist/jquery.slicknav.min.js',
            // 'bower_components/mediaelement/build/mediaelement-and-player.min.js',
            // 'external/modernizrr.js',
            // 'bower_components/nivo-lightbox/dist/nivo-lightbox.min.js',
            // 'bower_components/owlcarousel/owl.carousel.min.js',
            // 'external/contact.js',
            // 'external/count-to.js',
            // 'external/script.js',
            ]
        },
        dest: {
            build: {
                styles: BUILD_FOLDER,
                scripts: BUILD_FOLDER,
                images: BUILD_FOLDER + '/images',
                external: BUILD_FOLDER,
                assets: BUILD_FOLDER + '/assets',
                index: BUILD_FOLDER,
                server: BUILD_FOLDER,
                vendor: BUILD_FOLDER
            },
            release: {
                external: RELEASE_FOLDER,
                styles: RELEASE_FOLDER,
                scripts: RELEASE_FOLDER,
                images: RELEASE_FOLDER + '/images',
                assets: RELEASE_FOLDER + '/assets',
                index: RELEASE_FOLDER,
                server: RELEASE_FOLDER,
                vendor: RELEASE_FOLDER
            }
        }
    },
    filenames: {
        build: {
            styles: 'bundle.css',
            bowerStyles: 'vendor.css',
            vendor: 'vendor.js',
            scripts: 'bundle.js',
            config: 'config.js'
        },
        release: {
            styles: 'bundle.min.css',
            bowerStyles: 'vendor.min.css',
            scripts: 'bundle.min.js',
            vendor: 'vendor.js',
            config: 'config.min.js'
        },
        templates: {
            compiled: 'templates.js',
            angular: {
                moduleName: 'app.templates',
                prefix: '',
                stripPrefix: 'app/'
            }
        }
    },
    ports: {
        staticServer: 1337,
        livereloadServer: 35729
    }
};
