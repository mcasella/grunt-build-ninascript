module.exports = function(grunt) {
  
    grunt.config('copy', {
        main: {
            src: require('../config/app').buildFiles,
            dest: require('../config/app').buildDir,
            expand: true,
            cwd: '',
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};