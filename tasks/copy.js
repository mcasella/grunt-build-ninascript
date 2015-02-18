module.exports = function(grunt) {
  grunt.registerTask('copy', 'copy', function() {
    grunt.log.writeln("copy task");
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.task.run('copy');
  });
};