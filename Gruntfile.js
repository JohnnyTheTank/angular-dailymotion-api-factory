module.exports = function(grunt) {

    var banner = '/**\n    @name: <%= pkg.name %> \n    @version: <%= pkg.version %> (<%= grunt.template.today("dd-mm-yyyy") %>) \n    @author: <%= pkg.author %> \n    @url: <%= pkg.homepage %> \n    @license: <%= pkg.license %>\n*/\n';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            js: {
                files : {
                    'dist/angular-dailymotion-api-factory.min.js' : ['src/*.js']
                }
            },
            options: {
                banner: banner,
            }
        },
        concat: {
            options: {
                separator: ';',
                banner: banner,
            },
            dist: {
                files : {
                    'dist/angular-dailymotion-api-factory.js' : ['src/*.js']
                }
            },
        },
        watch: {
            minifiyJs: {
                files: [
                    'src/*.js'
                ],
                tasks: ['uglify', 'concat'],
                options: {
                    spawn: true,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};
