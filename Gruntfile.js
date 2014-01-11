module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  global.port = 8080
  grunt.initConfig({
    watch: {
      all: {
        options: {
          livereload: 35353
        },
        files: ["<%= grunt.option(\"filename\") || 'index' %>.md"],
        tasks: "shell:presentation:<%= grunt.option(\"filename\") %>"
      }
    },
    connect: {
      server: {
        options: {
          open: "http://localhost:<%= global.port %>/<%= grunt.option(\"filename\") || 'index' %>.html",
          port: global.port,
          livereload: 35353
        }
      }
    },
    shell: {
      presentation: {
        command: function (filename) {
          if (!filename) {filename = grunt.option('filename') || 'index' };
          console.log('building your presenation ' + filename + '.md')
          return "node_modules/.bin/cleaver " + filename + '.md'
        },
        options: {
          stdout: true
        }
      }
    }
  });

  grunt.registerTask('build', 'watch and build presentation by filename', function(filename) {
    if (!filename) {filename = 'index'};
    grunt.option('filename', filename)
    grunt.task.run('default')
  })
  grunt.registerTask('default', ['shell:presentation', 'connect:server', 'watch:all']);
}