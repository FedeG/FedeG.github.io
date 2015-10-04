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
      all: {
        src: '.tmp/concat/all.js',
        dest: 'dist/js/all-min.js'
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
      },
      js: {
        files: {
          'js/jquery.fittext.js': ['node_modules/fittext.js/jquery.fittext.js']
        }
      },
      jsmin: {
        files: {
          'js/min/jquery.flexslider-min.js': ['node_modules/flexslider/jquery.flexslider-min.js'],
          'js/min/jquery.magnific-popup.min.js': ['node_modules/magnific-popup/dist/jquery.magnific-popup.min.js'],
          'js/min/jquery.waypoints.min.js': ['node_modules/waypoints/lib/jquery.waypoints.min.js'],
          'js/min/jquery.min.js': ['node_modules/jquery/dist/jquery.min.js']
        }
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
