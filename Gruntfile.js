/**
 * Dream Big Gruntfile
 * Use this to make tasks much smaller!!
 */
var path = require('path'),
    fs = require('fs');

// grunt setup
module.exports = function(grunt) {

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Functions
    var get_package = function() {
        var package_data = fs.readFileSync('./package.json');
        var package_file = JSON.parse(package_data);
        return package_file;
    };

    var package_version_choices = function(version_string) {
        var parse_package_version = function(version_string) {
            function parseInteger(str) {
                return parseInt(str, 10);
            }
            return version_string.split('.').map(parseInteger);
        };

        var version = parse_package_version(version_string);
        var choices = [
            [ version[0], version[1], version[2] + 1 ],
            [ version[0], version[1] + 1, 0 ],
            [ version[0] + 1, 0, 0 ]
        ];
        return choices.map(function(version) { return version.join('.'); });
    };

    var update_package = function() {
        var pjson = get_package();
        var version_string = package_version_choices(pjson.version)[0];

        pjson.version = version_string;

        // update grunt config
        grunt.config.set("pkg", pjson);

        fs.writeFileSync('./package.json', JSON.stringify(pjson, null, 4));
    };

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            main: {
                files: {
                    'www/css/upcourage.css': 'www/css/main.scss'
                }
            }
        },

        jshint: {
            dist: {
                src: [
                    'www/js/app.js',
                    'www/js/routes.js',
                    'www/js/filters/**',
                    'www/js/controllers/**',
                    'www/js/services/**',
                    'www/js/directives/**'
                ]
            }
        },

        concat: {
            dist: {
                src: [
                    'www/js/app.js',
                    'www/js/routes.js',
                    'www/js/filters/**',
                    'www/js/controllers/**',
                    'www/js/services/**',
                    'www/js/directives/**'
                ],
                dest: 'www/js/upcourage.js'
            }
        },

        uglify: {
            dist: {
                options: {
                    banner: '/* <%= pkg.name %> - V:<%= pkg.version %> - <%= grunt.template.today("mm/dd/yyyy") %> */\n',
                    compress: {
                       drop_console: true
                    },
                    mangle: false
                },
                src: ['www/js/upcourage.js'],
                dest: 'www/js/upcourage.min.js'
            }
        },

        watch: {

            sass: {
                files: [
                    'www/css/modules/*.scss',
                    'www/css/pages/*.scss',
                    'www/css/main.scss'
                ],
                tasks: 'sass'
            },

            concat: {
                files: [
                    'www/js/app.js',
                    'www/js/routes.js',
                    'www/js/filters/**',
                    'www/js/controllers/**',
                    'www/js/services/**',
                    'www/js/directives/**'
                ],
                tasks: 'base'
            }
        }

    });

    // Custom Tasks
    grunt.registerTask('update-version', update_package);
    
    grunt.registerTask('base', [
        'sass',
        'jshint',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('dev', [
        'base',
        'watch'
    ]);
    
    grunt.registerTask('deploy', [
        'update-version',
        'base'
    ]);

};