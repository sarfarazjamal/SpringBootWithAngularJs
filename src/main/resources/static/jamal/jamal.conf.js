// jamal configuration


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/jamal-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../jamal/angular.min.js',
      '../jamal/angular-mocks.js',
      '../js/*.js',
      '../js/**/*.js',
      '../test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/jamal-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/jamal-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/jamal-launcher
    //browsers: ['Chrome', 'PhantomJS', 'Safari', 'Firefox'],
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, jamal captures browsers, runs the tests and exits
    singleRun: false
  });
};
