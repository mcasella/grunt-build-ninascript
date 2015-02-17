/*
 * grunt-build-ninascript
 * 
 *
 * Copyright (c) 2015 Matt Casella
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.log.writeln('starting build_ninascript...');
 
    grunt.registerTask('build_ninascript', ['jshint', //validate developer code with JSHint
                                    // 'require_whitelist', //validate all required modules are on whitelis 
                                 
                                    //build .zip deliverable
                                    'clean:init', //cleanup old .zip and build folder
                                    'copy',   //copy source to build folder
                                    'zip',
                                    'clean:cleanup' //remove the build folder
                                ]);
};
