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
                        'assets/dist/css/responsive-styles.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin']);
};
