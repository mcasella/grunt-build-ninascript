module.exports = function(grunt) {
  grunt.registerTask('clean', 'clean', function() {
    grunt.log.writeln("clean task");
    grunt.loadNpmTasks('grunt-contrib-clean');    
    
    grunt.task.run('copy');
  });
};