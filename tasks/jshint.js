module.exports = function(grunt) {
  grunt.registerTask('jshint', 'jshint', function() {
    grunt.log.writeln("jshint task");
    grunt.loadNpmTasks('grunt-contrib-jshint');
  
    grunt.task.run('jshint');
  });
};