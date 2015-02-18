module.exports = function(grunt) {
  grunt.registerTask('zip', 'zip', function() {
    grunt.log.writeln("zip task");
    grunt.loadNpmTasks('grunt-zip');
    
    grunt.task.run('zip');
  });
};