module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var bannerContent = '/*! <%= pkg.name %> v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Verifies javascript style
    jshint: {
      normal: ['js/*.js']
    },

    // Concatenates files into one
    concat: {
      mine: {
        banner: bannerContent,
        src: ['js/*.js'],
        dest: '.tmp/concat/mine.js'
      },
      all: {
        banner: bannerContent,
        src: ['js/*.js'],
        dest: '.tmp/concat/all.js'
      }
    },

    // Minifies javascript files
    uglify: {
      options: {
        banner: bannerContent
      },
      mine: {
        src: '.tmp/concat/mine.js',
        dest: 'dist/js/mine.js'
      },
      all: {
        src: '.tmp/concat/all.js',
        dest: 'dist/js/all.js'
      }
    },

    // Copies files to another direction
    copy: {
      fontawesome: {
        files: [
          {expand: true, cwd: 'node_modules/font-awesome', src: ['*', '*/*', '*/*/*'], dest: 'css/font-awesome'}
        ]
      },
      fonts: {
        files: [
          {expand: true, cwd: 'css/fonts', src: ['*', '*/*'], dest: 'dist/css/fonts/'},
          {expand: true, cwd: 'css/fontello/font', src: ['*'], dest: 'dist/css/fonts/'}
        ]
      },
      images: {
        files: [
          {expand: true, cwd: 'images', src: ['*', '*/*', '*/*/*'], dest: 'dist/images'}
        ]
      }
    },

    cssmin: {
      all: {
        files: {
          'dist/css/all.css': [
            "css/default.css",
            "css/layout.css",
            "css/media-queries.css",
            "css/magnific-popup.css"
          ]
        }
      }
    },

    watch: {
      mine: {
        files: ['js/*.js'],
        tasks: ['jshint:normal', 'concat', 'uglify']
      }
    }
  });

  grunt.registerTask('default', [
    //'jshint:normal',
    'copy',
    'cssmin',
    'concat',
    'uglify'
  ]);

};
