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

    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['postcss', 'cssmin']);
};
