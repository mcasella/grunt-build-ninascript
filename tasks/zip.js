module.exports = function(grunt) {
  
   console.log('blah');
  
   grunt.config('zip', {
     main: {
        src: require('../config/app').buildDir + '/**',
        dest: require('../config/app').outputFile
     }
   });

    grunt.loadNpmTasks('grunt-zip');
};