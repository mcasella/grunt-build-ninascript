/*
 * grunt-build-ninascript
 * 
 *
 * Copyright (c) 2015 Matt Casella
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.log.writeln('starting grunt-build-ninascript');
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);
  
  // Project configuration.
  grunt.initConfig({ 
    build_ninascript: {
        main: {
        }
    }
  
  });
  
  // Actually load this plugin's task(s).
  //grunt.loadTasks('tasks');
  
  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'build_ninascript');
  
  console.log('grunt config='+JSON.stringify(grunt.config(), undefined, 2));

};
