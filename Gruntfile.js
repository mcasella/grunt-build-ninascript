/*
 * grunt-build-ninascript
 * 
 *
 * Copyright (c) 2015 Matt Casella
 * Licensed under the MIT license.
 */

'use strict';

function loadConfig(path) {
  var glob = require('glob');
  var object = {};
  var key;
 
  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require(path + option);
  });
 
  return object;
}

module.exports = function (grunt) {
  grunt.log.writeln('starting grunt-build-ninascript');
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);
  
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };
  
  // Project configuration.
  grunt.util._.extend(config, loadConfig('./tasks/options/'));
  grunt.initConfig(config);
  
  // Actually load this plugin's task(s).
  //grunt.loadTasks('tasks');
  
  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'build_ninascript');
  
  console.log('grunt config='+JSON.stringify(grunt.config(), undefined, 2));

};
