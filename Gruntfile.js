module.exports = function( grunt ) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),

    jshint: {
      options: {
        es5: true,
        newcap: false
      },
      files: [
        "package.json",
        "Gruntfile.js",
        "index.js",
        "lib/**/*.js",
        "bin/**/*.js"
      ]
    }
  });

  grunt.loadNpmTasks( "grunt-contrib-jshint" );
  grunt.registerTask( "default", [ "jshint" ]);
};
