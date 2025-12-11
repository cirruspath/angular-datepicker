/*global module*/
(function setUp(module) {
  'use strict';

  module.exports = function exportingFunction(grunt) {

    grunt.loadNpmTasks('grunt-eslint');
    return {
      'target': [
        'Gruntfile.js',
        '<%= confs.js %>/**/*.js'
      ]
    };
  };
}(module));
