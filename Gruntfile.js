module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            options: {
                sourceMap: true,
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'pub/css/responsive-styles.min.css': [
                        'assets/dist/css/responsive-styles-processed.css'
                    ]
                }
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        overrideBrowserslist: ['last 2 versions',  'ie 11']
                    })
                ]
            },
            dist: {
                src: 'assets/dist/css/responsive-styles.css',
                dest: 'assets/dist/css/responsive-styles-processed.css'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/dist/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'pub/images/'
                }]
            }
        },

        watch: {
            css: {
                files: ['assets/dist/css/responsive-styles.css'],
                tasks: ['postcss', 'cssmin'],
                options: {
                    livereload: true,
                },
            },
            imagemin: {
                files: 'assets/dist/images/**/*.{png,jpg,gif}',
                tasks: ['imagemin']
            },
        }

    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['postcss', 'cssmin', 'imagemin', 'watch']);
};
