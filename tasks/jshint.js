module.exports = function(grunt) {
  
  grunt.config('jshint', {
      app: {
         options: {
            curly: false, //if true, does not allow 1 line if/else block statements without curly braces
            eqnull: true, //supress == null warnings
            node: true, //specify nodejs
        
            /* use strict options */
            strict: true, //enforce "use strict"
            undef: true, //prohibit the use of explicity undeclared variables
        
            /* stylistic */
            sub: true, //suppress dot notation warnings e.g. using person['name'] instead of person.name
            eqeqeq: false, //allow == and != operators, do not require !== and ===
            //unused: true, //warns for unused variables
            
            laxbreak: true, //suppress warnings for line breaks
            "-W099": true, //supress warnings about mixed tabs and spaces 
            
            globals: { },
          },
         
          src: require('../config/app').buildFiles,
       },
   });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};